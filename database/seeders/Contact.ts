import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Contact from 'App/Models/Contact'

export default class ContactSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Contact.createMany([
      {
        firstName: 'Emma',
        lastName: 'Doe',
        telephone: '055341083'
      },
      {
        firstName: 'Yaw',
        lastName: 'cret',
        telephone: '055341045'
      },
      {
        firstName: 'simon',
        lastName: 'willson',
        telephone: '0553411123'
      },
      {
        firstName: 'Mary',
        lastName: 'Amoah',
        telephone: '0553867543'
      },
      {
        firstName: 'Sammy',
        lastName: 'Bin',
        telephone: '0553321324'
      },

    ])
  }
}
