import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator } from 'App/Validators/User/Avatar'
import Database from '@ioc:Adonis/Lucid/Database'
import Application from '@ioc:Adonis/Core/Application'
export default class UserAvatarController {
  public async update({ request, auth }: HttpContextContract) {

    await Database.transaction(async (trx)=>{
      const { file } = await request.validate(UpdateValidator)

      const user = auth.user!.useTransaction(trx)
  
      const avatar = await user.related('avatar').firstOrCreate(
        {},
        {
          fileCategory: 'avatar',
          fileName: `${new Date().getTime()}.${file.extname}`,
        }
      )
  
      await file.move(Application.tmpPath('uploads'), {
        name: avatar.fileName,
        overwrite: true
      })
  
      return avatar
    })


  }
}
