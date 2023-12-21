import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator } from 'App/Validators/User/Register'

export default class UserController {
  public async show({}: HttpContextContract) {}

  public async destroy({ request, auth }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const user = auth.user!

    user.merge(data)

    await user.save()

    return user
  }
}
