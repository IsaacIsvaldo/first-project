import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '../../User/models/user.js'
export default class Moment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare title: string
  @column()
  declare description: string
  @column()
  declare image: string
  @column()
  declare userId: number
  @belongsTo(() => User)
  user: BelongsTo<typeof User>
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
