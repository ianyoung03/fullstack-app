import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany} from '@adonisjs/lucid/orm'
import User from '#models/user'
import LikedPost from '#models/liked_post'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number
  
  @column()
  declare caption: string

  @column()
  declare image: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //defining relationships
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => LikedPost)
  declare likedPost: HasMany<typeof LikedPost>
}