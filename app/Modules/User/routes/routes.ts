import Route from '@adonisjs/core/services/router'
const UsersController = () => import('../controllers/users_controller.js')

export default () => {
  Route.group(() => {
    Route.get('/', [UsersController, 'index'])
  }).prefix('users')
}
