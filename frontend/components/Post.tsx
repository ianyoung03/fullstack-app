import { Dimensions, Text, View } from "react-native";
import LikeButton from './LikeButton'
import PostImage from './PostImage'
import {useState, createContext, } from "react"

export default function Post() {
  
  const [liked, setLiked] = useState(0);

  return (
        <View className='flex-1 w-screen h-full bg-slate-700'>
        <Text className='text-4xl font-bold'>This is a post container</Text>
        <LikeButton liked={liked} setLiked={setLiked}/>
        <PostImage liked={liked} setLiked={setLiked}/>
        </View>

  );
}