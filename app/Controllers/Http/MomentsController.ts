import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'

export default class MomentsController {
    public async store({request, response}: HttpContextContract ) {
        
        const body = request.body()

        return body

    }
}
