import { Dimensions, Text, View } from "react-native";
import LikeButton from './LikeButton'
import PostImage from './PostImage'
import {useState} from "react"

//interface PostProps {
 //   data: string;
 // }

const Post = ({postData} : any) => {
  
  const [liked, setLiked] = useState(0);
  //console.error(postData.image);
  return (
        <View className='flex-1 w-screen h-full bg-slate-700'>
            <Text className='text-4xl font-bold'>This is a post container</Text>
            <LikeButton liked={liked} setLiked={setLiked}/>
            <PostImage liked={liked} setLiked={setLiked} image={postData.image}/>
        </View>

  );
}

export default Post;