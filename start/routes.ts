/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MomentsController = () => import('#controllers/moments_controller')
import router from '@adonisjs/core/services/router'
router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: '---',
      }
    })
    router.get('/moments', [MomentsController, 'index'])
  })
  .prefix('/api')
