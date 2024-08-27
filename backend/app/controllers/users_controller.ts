import type { HttpContext } from '@adonisjs/core/http'
//import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"; //added by myself
import User from '#models/user'


export default class UsersController {
    async show({params, response}: HttpContext) {
        try {
          const user = await User.findOrFail(params.id)
          return response.status(200).json(user)
        } catch (error) {
          return response.status(404).json({ message: 'Product not found' })
        }
      }
}