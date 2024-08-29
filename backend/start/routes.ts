/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const PostsController = () => import('#controllers/posts_controller')
const LikedPostsController = () => import('#controllers/liked_posts_controller')
const HealthChecksController = () => import('#controllers/health_checks_controller')

// health check endpoint
router.get('/health', [HealthChecksController])

// endpoint to return feed data to client
router.get('/returnfeed', [PostsController, 'returnFeed'])

// endpoint to store an instance of a post like in DB
router.get('/storeLike/:postId', [LikedPostsController, 'store'])

// endpoint to delete an instance of a like in DB
router.get('/destroyLike/:postId', [LikedPostsController, 'destroy'])

// boiler plate hello world route (not used)
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// route created when testing API connection (not used in app)
router.get('/users/:id', [UsersController, 'show'])

