import MomentService from '#services/moment_service'
import { inject } from '@adonisjs/core'
//import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class MomentsController {
  constructor(private momentService: MomentService) {}
  async index() {
    return this.momentService.all()
  }
}
