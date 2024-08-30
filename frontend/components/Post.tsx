import {Text, View, Image } from "react-native";
import LikeButton from './LikeButton'
import PostImage from './PostImage'
import {useState, useRef, useEffect} from "react"
import updateLikeStatus from "../api/likeApi"



const Post = ({postData} : any) => {
  
  //storing state of a post (is it liked or not). Initial state is determined by postData prop (the JSON received from the returnfeed API call)
  const [liked, setLiked] = useState(postData.liked);

 
  const initialRender = useRef(true); 
  
  //if state of a like changes and it's not the first render (when state is initialized so we don't need to change backend)
  //then make a call to backend to update the like status
  useEffect(() => {
    if (initialRender.current){
        initialRender.current = false;
        return;
    }

    updateLikeStatus(liked, postData.id);
  }, [liked])


  return (
        <View className='bg-black p-2 mb-4'>
            {/*This view handles the pfp/name section above the photo. It's just here for 
            aesthetic purposes (doesn't do anything) so I didn't make it as it's own componenet*/}
            <View className='flex-row items-center mb-2'>
                <Image source={require('../assets/golf.jpeg')} className='w-10 h-10 rounded-full mr-2' />
                <Text className='text-white text-base font-bold'>{postData.username}</Text>
            </View>

            {/* Positioning the like button, image, and caption within the post */}
            <LikeButton  liked={liked} setLiked={setLiked}/>
            <PostImage liked={liked} setLiked={setLiked} image={postData.image}/>
            <View>
                <Text className='absolute bottom-5 left-5 z-20 text-white text-base'>{postData.caption}</Text>
            </View>

            {/* Comment section. Normally would make it it's own component but didn't for same reason as above */}
            <View className='flex-row items-center mb-2'>
                <Text className='text-slate-400 text-base'>view comments</Text>
            </View>
        </View>

  );
}

export default Post;