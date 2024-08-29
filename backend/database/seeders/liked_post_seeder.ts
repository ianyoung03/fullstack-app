import { BaseSeeder } from '@adonisjs/lucid/seeders'
import LikedPost from '#models/liked_post'
export default class extends BaseSeeder {
  async run() {
    await LikedPost.createMany([
      {
        postId: 1,
        userId: 1
      }, 
      {
        postId: 3,
        userId: 1
      }, 
      {
        postId: 5,
        userId: 1
      }
    ])
  }
}