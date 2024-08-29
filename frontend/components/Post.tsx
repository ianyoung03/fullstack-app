import { Dimensions, Text, View, Image } from "react-native";
import LikeButton from './LikeButton'
import PostImage from './PostImage'
import {useState, useRef, useEffect} from "react"

//interface PostProps {
 //   data: string;
 // }

const Post = ({postData} : any) => {
  
  const [liked, setLiked] = useState(postData.liked);
  const initialRender = useRef(true); 
  //have a useEffect here that runs based with state (liked) as a dependency. If that changes, run the effect
  // use a useRef to skip the initial render

  useEffect(() => {
    if (initialRender.current){
        initialRender.current = false;
        return;
    }

    const updateLikeStatus = async () => {
        if (liked == 1){
            try{   
                const response = await fetch(`http:localhost:3333/storeLike/${postData.id}`);
            } catch (error) {
                console.log(error);
            }
        } else {
            try{   
                const response = await fetch(`http:localhost:3333/destroyLike/${postData.id}`);
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    updateLikeStatus();
  }, [liked])


  //console.error(postData.image);
  return (
        <View className='bg-black p-2 mb-4'>
            <View className='flex-row items-center mb-2'>
                <Image source={require('../assets/golf.jpeg')} className='w-10 h-10 rounded-full mr-2' />
                <Text className='text-white text-base font-bold'>{postData.username}</Text>
            </View>

            <LikeButton  liked={liked} setLiked={setLiked}/>
            <PostImage liked={liked} setLiked={setLiked} image={postData.image}/>

            <View>
                <Text className='absolute bottom-5 left-5 z-20 text-white text-base'>{postData.caption}</Text>
            </View>
            <View className='flex-row items-center mb-2'>
                <Text className='text-slate-400 text-base'>view comments</Text>
            </View>
        </View>

  );
}

export default Post;