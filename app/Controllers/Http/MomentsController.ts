import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {v4 as uuidv4} from 'uuid'

import Moment from 'App/Models/Moment'

import Application from '@ioc:Adonis/Core/Application'

export default class MomentsController {
    
    private validationOptions = {
        type: ['image'],
        size: ['2mb']
    }

    public async store({request, response}: HttpContextContract ) {
        
        const body = request.body()
        
        const image = request.file('image', this.validationOptions)

        if(image) {
            const imageName = `${uuidv4()}.${image.extname}`

            await image.move(Application.tmpPath('uploads'), {
                name: imageName
            })

            body.image = imageName
        }

        const moment = await Moment.create(body)

        response.status(201)
    
        return{
            message: 'Momento criado com sucesso',
            data: moment
        }

    }
}
