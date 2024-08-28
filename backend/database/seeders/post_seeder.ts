import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Post from '#models/post'
export default class extends BaseSeeder {
  async run() {
    const posts = [];
    const tags = ['#AltFashion', '#Casual', '#Vintage', '#Oversize']

    for (let i = 1; i <= 35; i++){
      posts.push({
        userId: Math.floor(Math.random() * (20-1)) + 1,
        caption: `Check out my fit! ${i} ${tags[i%4]}`,
        image: `post${i}.jpeg`,
      })
    }

    await Post.createMany(posts);
  }
}