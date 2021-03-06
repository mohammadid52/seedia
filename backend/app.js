const path = require('path')
const express = require('express')
const cors = require('cors')

const mongodb = require('mongodb')
const authenticationRouter = require('./apis/authenticate')
const mediaUploadRouter = require('./apis/mediaUpload')
const userRouter = require('./apis/user')
const productsRouter = require('./apis/products')
const reviewsRouter = require('./apis/reviews')
const projectRouter = require('./apis/project')
const requestsRouter = require('./apis/requests')
const groupsRouter = require('./apis/groups')
const postRouter = require('./apis/posts')
const storeRouter = require('./apis/store')
const eventRouter = require('./apis/event')

const app = express()
const bodyParser = require('body-parser')

const client = mongodb.MongoClient

let allowedOrigins = [
  'http://13rms.localhost:3000',
  'http://tradingpost13rms.com',
]

const URI = 'mongodb://localhost:27017/'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
)
app.use(express.json())
require('dotenv').config()

client.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    const db = client.db('13rms')
    const usersCollection = db.collection('users')
    const productsCollection = db.collection('products')
    const reviewsCollection = db.collection('reviews')
    const projectsCollection = db.collection('projects')
    const requestsCollection = db.collection('requests')
    const groupsCollection = db.collection('groups')
    const postCollection = db.collection('posts')
    const eventCollection = db.collection('events')

    const passUserCollection = async (req, res, next) => {
      res.locals.usersCollection = usersCollection
      next()
    }
    const passProductsCollection = (req, res, next) => {
      res.locals.productsCollection = productsCollection
      res.locals.reviewsCollection = reviewsCollection
      next()
    }

    const passProjectsCollection = (req, res, next) => {
      res.locals.projectsCollection = projectsCollection
      next()
    }

    const passRequestsCollection = (req, res, next) => {
      res.locals.requestsCollection = requestsCollection
      next()
    }
    const passGroupsCollection = (req, res, next) => {
      res.locals.groupsCollection = groupsCollection
      next()
    }
    const passPostCollection = (req, res, next) => {
      res.locals.postCollection = postCollection
      next()
    }
    const passEventCollection = (req, res, next) => {
      res.locals.eventCollection = eventCollection
      next()
    }

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      next()
    })

    app.use('/user', passUserCollection, userRouter)
    app.use('/event', passUserCollection, passEventCollection, eventRouter)
    app.use(
      '/project',
      passUserCollection,
      passProjectsCollection,
      projectRouter
    )
    app.use(
      '/products',
      passUserCollection,
      passProductsCollection,
      productsRouter
    )
    app.use(
      '/reviews',
      passUserCollection,
      passProductsCollection,
      reviewsRouter
    )
    app.use(
      '/requests',
      passUserCollection,
      passRequestsCollection,
      requestsRouter
    )
    app.use('/groups', passUserCollection, passGroupsCollection, groupsRouter)
    app.use(
      '/post',
      passUserCollection,
      passGroupsCollection,
      passEventCollection,
      passPostCollection,
      postRouter
    )
    app.use(
      '/store',
      passUserCollection,
      passProductsCollection,
      passPostCollection,
      storeRouter
    )

    app.use('/auth', passUserCollection, authenticationRouter)

    app.use('/uploadImage', mediaUploadRouter)

    app.use(express.static(path.join(__dirname, 'build')))
    app.use(express.static(path.join(__dirname, 'build', 'static')))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
  }
)

// ~~~~~~~~~~~~~~~~~~IGNORE THIS~~~~~~~~~~~~~~~~~~~~~ //

const PORT = 3005

app.listen(PORT, () => {
  console.log(`API Server running on ${PORT}`)
})
