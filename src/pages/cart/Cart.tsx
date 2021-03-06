import Card from 'components/atoms/Card'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import PageTitle from 'components/atoms/PageTitle'
import Section from 'components/atoms/products/Section'
import Sidebar from 'components/Sidebar'
import { links } from 'constants/Links'
import NarrowLayout from 'containers/NarrowLayout'
import { getBasket } from 'helpers'
import useUser from 'hooks/useUser'
import { IParent, IProduct } from 'interfaces/UniversalInterface'
import { map } from 'lodash'
import DashboardHeader from 'pages/DashboardHeader'
import Product from 'pages/products/Product'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { removeFromBasket } from 'state/Redux/Actions/userActions'
import { eclipse } from 'utils/functions'

const ProductList = ({ productList }: { productList: IProduct[] }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div className="flex flex-col">
      {map(productList, (product) => {
        const _removeFromBasket = (item: any) => {
          dispatch(removeFromBasket(item))
        }
        return (
          <div
            onClick={() => history.push(links.getProductUrl(product._id))}
            className="cursor-pointer sm:flex border-b pb-8 border-gray-200 dark:border-gray-700 gap-x-8"
          >
            <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
              <img
                alt=""
                className="h-32 rounded-lg shadow-lg"
                src={product?.images[0].url}
              />
            </div>
            <div>
              <h4
                title={product.productName}
                className="text-lg dark:text-white font-bold"
              >
                {eclipse(product.productName, 100)}
              </h4>
              <p
                title={product.productDescription}
                className="mt-2 dark:text-gray-500 text-sm"
              >
                {eclipse(product.productDescription, 250)}
              </p>
            </div>
            <div className="flex items-center justify-between flex-col">
              <h4 className="text-lg dark:text-white font-bold">
                ${product.price}
              </h4>
              <button
                onClick={() => _removeFromBasket(product)}
                className="mt-2 bg-red-600 p-1 px-2 rounded-md text-white hover:bg-red-700 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Cart = ({ userData }: { userData: IParent }) => {
  const basket = useSelector((state) => getBasket(state))
  const { otherUserData, iAmOwnerOfThisProfile } = useUser(
    userData?.profileUrl,
    userData
  )
  const products = basket?.products || []
  return (
    <>
      <Meta pageTitle={`My Cart - 13RMS`} />
      <DashboardHeader userData={userData} />
      <Sidebar />

      <NarrowLayout customMaxWidth="max-w-7xl">
        {products.length > 0 ? (
          <div className="">
            <div className="mb-4">
              <PageTitle title="Your Cart" />
            </div>
            <ProductList productList={basket?.products} />
          </div>
        ) : (
          <Card
            content={
              <div>
                <EmptyState
                  title="Your cart is empty"
                  subtitle="You have no items in your cart"
                  hideBorders
                  iconUrl="/empty-cart.png"
                />
              </div>
            }
          />
        )}

        <Section
          showChildren={products && products.length > 0}
          title={
            iAmOwnerOfThisProfile
              ? 'Suggested Products'
              : `${otherUserData?.firstName}'s Products`
          }
        >
          {products &&
            products.length > 0 &&
            products.map((product: any) => (
              <Product userId={userData._id} product={product} />
            ))}
        </Section>
      </NarrowLayout>
    </>
  )
}

export default Cart
