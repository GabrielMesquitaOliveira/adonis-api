import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { fileCategory } from 'App/Utils'
export default class File extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fileCategory: fileCategory
  @column()
  public ownerId: number

  @column()
  public fileName: string
}
