import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // not super formal typescript here because I'm just seeting
    const users = [];

    for (let i = 2; i <= 20; i++){
      users.push({
        username: `person${i}`,
        email: `person${i}@gmail.com`,
        password: `password${i}`,
        profilePhoto: `pfp${i}.jpeg`
      })
    }

    await User.createMany(users);
  }
}