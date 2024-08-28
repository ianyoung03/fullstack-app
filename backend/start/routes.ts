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
//added myself. Health checks routing
const HealthChecksController = () => import('#controllers/health_checks_controller')

router.get('/health', [HealthChecksController])
//health checks end here


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/users/:id', [UsersController, 'show'])

router.get('/returnfeed', [PostsController, 'returnFeed'])
