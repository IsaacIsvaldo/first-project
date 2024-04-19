import Route from '@adonisjs/core/services/router'
import routes from '../app/routes/index.js'

Route.group(() => {
  routes()
}).prefix('api/v1')
