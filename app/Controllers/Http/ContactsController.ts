import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Contact from "App/Models/Contact"

export default class ContactsController {

    public async index({ response, request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 20

        const contacts = await Contact.query().paginate(page, limit)

        return response.created({
            status: '201',
            message: 'Contact generated successfully',
            data: contacts,
        });

    }



    public async store({ request, response }: HttpContextContract) {

        const contactSchema = schema.create({
            firstName: schema.string(),
            lastName: schema.string(),
            telephone: schema.string([
                rules.unique({ table: 'contacts', column: 'telephone' }),
                rules.maxLength(10)
            ]),


        })

        const validatedData = await request.validate({
            schema: contactSchema,
            messages: {
                'firstName.required': 'Enter first name',
                'lastName.required': 'Enter last name',
                'telephone.required': 'Enter first telephone',
                'telephone.maxLength': 'Phoone number must not exceed 10 digits',
                'telephone.unique':'Phoone number already '
            }
         })

        try {

            const contact = await Contact.create(validatedData)

            return response.created({
                status: '201',
                message: 'Contact saved successfully',
                data: contact,
            });
            
        } catch (error) {
            
            return response.created({
                status: '500',
                message: 'Contact was not successfully saved',
                data: [],
            });
        }
        

        return 'Contact saves successfully'
    }


    public async getById({ response, params }: HttpContextContract) {

        

        const contact = await Contact.find(params.id)

        //  return response.status(201).json(contact);
        if (contact) {

            return response.json({
                status:'201',
                messages: 'Contact found successfully',
                data: contact,
            })
            
        } else {

            return response.json({
                status:'500',
                messages: 'Contact not found',
                data: [],
            })

        }
    }


    public async edit({  params, request, response }: HttpContextContract) {

        const contactPhone = schema.create({
            firstName: schema.string.optional(),
            lastName: schema.string.optional(),
            telephone: schema.string.optional([
                rules.unique({ table: 'contacts', column: 'telephone' }),
                rules.maxLength(10),
                rules.minLength(10)
            ]),
        })

        const validatedData = await request.validate({
            schema: contactPhone,
            messages: {
                'telephone.maxLength': 'Phone number must not exceed 10 digits',
                'telephone.minLength': 'Phone number must not be less than 10 digits',
                'telephone.unique':'Phoone number already '
            }
         })
        
        
         

        

            const contactInstance = await Contact.find(params.id)
             


            if (contactInstance) {
                
              const contact = await Contact
                .query()
                .where('id', params.id)
                .update({ 
                    first_name: validatedData.firstName,
                    last_name: validatedData.lastName,
                    telephone:validatedData.telephone
                    
                })
            
            
                return response.json({
                    status:'201',
                    messages: 'Contact Updated successfully',
                    data: contact,
                })
            } else {
                
            return response.json({
                status:'500',
                messages: 'Contact ID not found, Contact Failed to Updated',
                data: [],
              })
            }

        

    }

    


    public async delete({ params, response }: HttpContextContract) {


            const contactInstance = await Contact.find(params.id)
            
            if (contactInstance) {
                
                const conatct = await Contact.query().where('id', params.id).delete()

                return response.json({
                    status: '201',
                    'messages': 'Contact Deleted Successfully',
                    data: conatct,
                })

            } else {
                
                return response.json({
                status: '500',
                'messages': 'Contact ID not found, Contact Failed to Delete',
                data: [],
                })
            }

        

    }
}
