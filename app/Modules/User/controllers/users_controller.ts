import { inject } from '@adonisjs/core'
import UserService from '../services/user_service.js'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}
  async index() {
    return this.userService.all()
  }
}
