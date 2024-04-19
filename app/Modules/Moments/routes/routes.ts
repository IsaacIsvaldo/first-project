// app/Modules/Users/routes.ts

import Route from '@adonisjs/core/services/router'
const MomentsController = () => import('../controllers/moments_controller.js')

export default () => {
  Route.group(() => {
    Route.get('/', [MomentsController, 'index'])
  }).prefix('moments')
}
