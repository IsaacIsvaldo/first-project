import Moment from '#models/moment'

export default class MomentService {
  async all() {
    return await Moment.all()
  }
  async find(id: number) {
    return await Moment.find(id)
  }
  async create(data: any) {
    return await Moment.create(data)
  }
  async update(id: number, data: any) {
    const moment = await Moment.findOrFail(id)
    moment.$columns = data
    await moment.save()
  }
}
