import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Auth'
import { User } from 'App/Models'
import faker from 'faker'
export default class UserResgisterController {
  public async store({request}: HttpContextContract) {
    const { email, redirectUrl } = await request.validate(StoreValidator)
    const user = await User.create({email})

    await user.save()

    user.related('keys').create({key: faker.})
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}
}
