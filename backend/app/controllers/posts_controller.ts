import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Post from '#models/post'
import LikedPost from '#models/liked_post'
export default class PostsController {

    // this function provides the homepage with post data for the feed
    async returnFeed({}: HttpContext){
        const feedPosts = [];
        const usedPosts: number[] = [];
        
        //picking 10 random images and adding to add to the feedPosts array
        for (let i = 0; i < 10; ++i){
            const id = Math.floor(Math.random() * (35-1)) + 1;
            if (!usedPosts.includes(id)){
                const item = await Post.find(id);
                if(item){
                    usedPosts.push(id);
                    feedPosts.push(item);
                }
            } else {
                --i;
            }

           
        }
        // this is the array we end up returning. Holds all relevant data for the frontend Post component in JSON format
        const extendedPosts = [];
        
        // this loop turns every feedPosts item into a json 
        // then it adds some extra data needed for the front end (like status & user who posted it)
        // then it adds it to the extendedPosts array to be returned
        for (const post of feedPosts) {
            
            // posts currently an array of Lucid objects. Converting to Json to safely add things
            const postObject = post.toJSON();
            
            // the user associated with a given post (pulled from DB)
            const associatedUser = await User.find(post.userId);

            // is the item currently liked or unliked (userId hardcoded as 1 here, this would normally be handled by auth (im assuming) but auth is not setup)
            const isLiked = await LikedPost.query().where('userId', 1).andWhere('postId', post.id).first();
            
            // config the liked number (state is stored numerically as a yes (1) or no (0) in front)
            let likedStatus: number = 0;
            if (isLiked) {
                likedStatus = 1;
            }

            // adding to our return array the final json object that has both all post info, plus additional user info needed
            if (associatedUser != null){
                extendedPosts.push({
                    ...postObject,
                    username: associatedUser.username,
                    profilePhoto: associatedUser.profilePhoto,
                    liked: likedStatus,

                })
            }
            
        }

        console.log("10 random posts have been delivered to the front end");
        return extendedPosts;
       

    }
}