import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Post from '#models/post'
export default class PostsController {
    async returnFeed({}: HttpContext){
        //normally would parameterized the num of posts but just hardcoding for demo purposes
        const feedPosts = await Post.query().limit(10);
        
        // array we end up returning. Holds all relevant data for the frontend Post component
        const extendedPosts = [];
        
        
        for (const post of feedPosts) {
            
            // posts currently an array of Lucid objects. Converting to Json to safely add things
            const postObject = post.toJSON();
            
            // the user associated with a given post (pulled from DB)
            const associatedUser = await User.find(post.userId);
          
            // adding to our return array the final json object that has both all post info, plus additional user info needed
            if (associatedUser != null){
                extendedPosts.push({
                    ...postObject,
                    username: associatedUser.username,
                    profilePhoto: associatedUser.profilePhoto
                })
            }
            
        }

        return extendedPosts;
       

    }
}