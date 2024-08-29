import type { HttpContext } from '@adonisjs/core/http'
import LikedPost from '#models/liked_post'

export default class LikedPostsController {
    async store({params}: HttpContext) {
        const likedPost = await LikedPost.query().where('userId', 1).andWhere('postId', params.postId).first();
        console.log("got to here");
        if (likedPost == null) {
            await LikedPost.create({
                userId: 1,
                postId: params.postId,
            })

            console.log("Post " + params.postId + " was liked!");
        }

        const likedPostNow = await LikedPost.query().where('userId', 1).andWhere('postId', params.postId).first();
        console.log("updated");
        return likedPostNow;

       
    }

    async destroy({params}: HttpContext) {
        // delete item from DB given parameter
        const likedPost = await LikedPost.query().where('userId', 1).andWhere('postId', params.postId).first();

        if (likedPost){
            await likedPost.delete();
            console.log("The like on post " + params.postId + " was removed!");
        }

    }
}