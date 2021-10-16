/* eslint-disable quotes */
const router = require('express').Router()
const auth = require('../middleware/verifyAuth')
const {
  responseMsg,
  unique,
  addObjectId,
  getItem,
  getManyItems,
} = require('../utils')
var ObjectId = require('mongodb').ObjectId
require('dotenv').config()

// ====================================================== //
// ======================QUERIES======================= //
// ====================================================== //

router.get('/postedBy/:userId', auth, async (req, res) => {
  const userId = req.params.userId
  const productsCollection = res.locals.productsCollection
  const products = await getManyItems(productsCollection, {
    postedBy: ObjectId(userId),
  })

  try {
    if (products && products.length) {
      return res
        .status(202)
        .json(responseMsg('success', 'Products fetched successfully', products))
    } else {
      return res
        .status(204)
        .json(responseMsg('error', 'Cannot fetch products.', {}))
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(
        responseMsg('error', 'Oops! Something went wrong. Please try again', {})
      )
  }
})

router.get('/p/:productId', auth, async (req, res) => {
  const token = req.user
  const { productId } = req.params
  const usersCollection = res.locals.usersCollection
  const productsCollection = res.locals.productsCollection

  // first check if the token.id exists in products collection or not
  // if yes then add it to products collection
  // else create new doc and add it to products collection

  // add token id to products collection to track views and interests

  const product = await getItem(productsCollection, productId)

  const user = await getItem(usersCollection, token.id)

  const getUniqProductsViewedList = () => {
    const productId = ObjectId(product._id)
    const productsViewed = user?.productsViewed || []
    // that's my product
    // this will go in user.business object
    if (
      !user?.business?.products?.find(
        (d) => d.toString() === product._id.toString()
      )
    ) {
      if (productsViewed.length > 0) {
        const alreadyExists = productsViewed.find(
          (d) => d.toString() === product._id.toString()
        )

        if (alreadyExists) {
          return [...productsViewed]
        } else {
          return [...productsViewed, productId]
        }
      } else {
        return [productId]
      }
    } else {
      return [...productsViewed]
    }
  }

  // this will go in product object
  const getUniqUsersViewedList = () => {
    const userId = ObjectId(token.id)
    const usersViewed = product?.usersViewed || []
    // that's my product
    if (token.id !== product.postedBy.toString()) {
      if (usersViewed.length > 0) {
        const alreadyExists = usersViewed.find((d) => d.toString() === token.id)
        if (alreadyExists) {
          return [...usersViewed]
        } else {
          return [...usersViewed, userId]
        }
      } else {
        return [userId]
      }
    } else {
      return [...usersViewed]
    }
  }

  try {
    if (product && user) {
      await usersCollection.updateOne(
        { _id: ObjectId(token.id) },
        {
          $set: {
            productsViewed: getUniqProductsViewedList(),
          },
        },
        { new: true }
      )
      await productsCollection.updateOne(
        { _id: ObjectId(product._id) },
        {
          $set: {
            usersViewed: getUniqUsersViewedList(),
          },
        },
        { new: true }
      )
      return res
        .status(202)
        .json(responseMsg('success', 'Product fetched successfully', product))
    } else {
      return res
        .status(204)
        .json(
          responseMsg(
            'error',
            'Cannot find product. Maybe the product is currently unavailable',
            {}
          )
        )
    }
  } catch (error) {
    console.error(error)
    return res
      .status(204)
      .json(
        responseMsg('error', 'Oops! Something went wrong. Please try again', {})
      )
  }
})

// ====================================================== //
// ==================FRIEND'S PURCHASING================= //
// ====================================================== //

router.get('/friends-purchases', auth, async (req, res) => {
  const token = req.user

  const usersCollection = res.locals.usersCollection

  const productsCollection = res.locals.productsCollection
  // get my friends list
  try {
    const user = await getItem(usersCollection, token.id)

    if (user?.following?.length > 0) {
      const idArray = user?.following.map(addObjectId)
      const friends = await getManyItems(usersCollection, {
        _id: { $in: idArray },
      })
      let result = []
      friends.map((friend) => {
        if (friend?.purchases && friend?.purchases.length > 0) {
          let temp = friend?.purchases?.map((p) => p.productId)
          result.push(...temp)
        }
      })

      const uniqId = unique(result)
      const products = await getManyItems(productsCollection, {
        _id: { $in: uniqId.map(addObjectId) },
      })

      if (products.length > 0) {
        return res
          .status(202)
          .json(responseMsg('success', 'friends found', products))
      } else {
        return res
          .status(202)
          .json(responseMsg('error', 'No results found...', {}))
      }
    } else {
      return res.status(204).json(responseMsg('error', 'No friends found', {}))
    }
  } catch (error) {
    return res
      .status(204)
      .json(responseMsg('error', 'Something went wrong..', {}))
  }
})
// ====================================================== //
// ====================PURCHASE PRODUCT================== //
// ====================================================== //

router.post('/purchase/add', auth, async (req, res) => {
  const token = req.user
  const { productId } = req.body

  const usersCollection = res.locals.usersCollection

  const productsCollection = res.locals.productsCollection

  if (productId) {
    try {
      //?  1. Add obj to user.purchases. obj = {productId, purchasedOn}
      //?  2. Add userId to product.purchasedBy

      const user = await getItem(usersCollection, token.id) //! current user
      const product = await getItem(productsCollection, productId) //! current product
      if (user && product) {
        const purchases = user?.purchases || []
        const purchasedBy = user?.purchasedBy || []
        await usersCollection.updateOne(
          { _id: ObjectId(user._id) },
          {
            $set: {
              purchases: [...purchases, { productId, purchasedOn: new Date() }],
            },
          },
          { new: true }
        )
        await productsCollection.updateOne(
          { _id: ObjectId(productId) },
          {
            $set: {
              purchasedBy: [...purchasedBy, token.id],
            },
          },
          { new: true }
        )
        return res
          .status(202)
          .json(responseMsg('success', 'Product purchase success', product))
      } else {
        return res
          .status(403)
          .json(responseMsg('error', 'Cannot find either product or user', {}))
      }
    } catch (error) {
      return res
        .status(204)
        .json(responseMsg('error', 'Something went wrong..', {}))
    }
  } else {
    return res
      .status(204)
      .json(responseMsg('error', 'Product Id not found', {}))
  }
})
router.post('/purchase/add-fake', auth, async (req, res) => {
  const { productId, userId } = req.body

  const usersCollection = res.locals.usersCollection

  const productsCollection = res.locals.productsCollection

  if (productId) {
    try {
      //?  1. Add obj to user.purchases. obj = {productId, purchasedOn}
      //?  2. Add userId to product.purchasedBy

      const user = await getItem(usersCollection, userId) //! current user
      const product = await getItem(productsCollection, productId) //! current product
      if (user && product) {
        const purchases = user?.purchases || []
        const purchasedBy = user?.purchasedBy || []
        await usersCollection.updateOne(
          { _id: ObjectId(user._id) },
          {
            $set: {
              purchases: [...purchases, { productId, purchasedOn: new Date() }],
            },
          },
          { new: true }
        )
        await productsCollection.updateOne(
          { _id: ObjectId(productId) },
          {
            $set: {
              purchasedBy: [...purchasedBy, userId],
            },
          },
          { new: true }
        )
        return res
          .status(202)
          .json(responseMsg('success', 'Product purchase success', product))
      } else {
        return res
          .status(403)
          .json(responseMsg('error', 'Cannot find either product or user', {}))
      }
    } catch (error) {
      return res
        .status(204)
        .json(responseMsg('error', 'Something went wrong..', {}))
    }
  } else {
    return res
      .status(204)
      .json(responseMsg('error', 'Product Id not found', {}))
  }
})

// ====================================================== //
// ======================MUTATIONS======================= //
// ====================================================== //

router.post('/add', auth, async (req, res) => {
  const token = req.user
  const { newProductData } = req.body

  if (
    !(
      newProductData.productName ||
      newProductData.productPrice ||
      newProductData.productDescription ||
      newProductData.availableColors ||
      newProductData.estimatedDelivery ||
      newProductData.tags
    )
  ) {
    return res
      .status(204)
      .json(responseMsg('error', 'Please add all required fields', {}))
  } else {
    const productsCollection = res.locals.productsCollection
    const usersCollection = res.locals.usersCollection

    // first check if the token.id exists in products collection or not
    // if yes then add it to products collection
    // else create new doc and add it to products collection

    const user = await usersCollection.findOne({ _id: ObjectId(token.id) })

    try {
      const data = {
        postedBy: ObjectId(token.id),
        ...newProductData,
      }
      const product = await productsCollection.insertOne(data)
      if (user) {
        await usersCollection.updateOne(
          { _id: ObjectId(user._id) },
          {
            $set: {
              business: {
                ...user.business,
                products:
                  user?.products?.length > 0
                    ? [...user.products, product.insertedId]
                    : [product.insertedId],
              },
            },
          },
          { new: true }
        )
        return res
          .status(202)
          .json(responseMsg('success', 'Product added successfully', {}))
      } else {
      }
    } catch (error) {
      console.error(error)
      return res
        .status(204)
        .json(
          responseMsg(
            'error',
            'Oops! Something went wrong. Please try again',
            {}
          )
        )
    }
  }
})

module.exports = router
