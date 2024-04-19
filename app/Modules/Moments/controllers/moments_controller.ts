import MomentService from '../services/moment_service.js'
import { inject } from '@adonisjs/core'
//import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class MomentsController {
  constructor(private momentService: MomentService) {}
  async index() {
    return this.momentService.all()
  }
  async show(id: number) {
    return this.momentService.find(id)
  }
  async store(data: any) {
    return this.momentService.create(data)
  }
  async update(id: number, data: any) {
    return this.momentService.update(id, data)
  }
}
