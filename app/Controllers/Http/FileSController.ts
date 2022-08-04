import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import Upload from 'App/Models/Upload'

export default class FilesController {

    public async upload({ request, response}: HttpContextContract) {
        
        const fileSchema = schema.create({

            csvFileName: schema.file({
                size: '4mb',
                extnames: ['csv'],
            }),
        
        })
        
        const validatedData = await request.validate({
            schema: fileSchema
        })

        if (!validatedData.csvFileName) {
            return
        }

        const imageName = new Date().getTime().toString() + '.' + validatedData.csvFileName.subtype 

                await validatedData.csvFileName.move(Application.publicPath('uploads'),{
                    name: imageName
        })
        
        const upload = new Upload()

        upload.csvFileName = `upload/${imageName}`
        
        upload.save()

        return response.json({
            status:'201',
            messages: 'File Uploaded successfully',
            data: upload,
        })
            
        
    }
}
