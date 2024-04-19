import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Moment from '../../Moments/models/moment.js'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare username: string
  @column()
  declare email: string
  @column()
  declare password: string
  @hasMany(() => Moment)
  declare moments: relations.HasMany<typeof Moment>
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
