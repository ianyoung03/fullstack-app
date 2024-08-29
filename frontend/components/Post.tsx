import { Dimensions, Text, View } from "react-native";
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
                console.log("OOPSIE");
                const response = await fetch(`http:localhost:3333/storeLike/${postData.id}`);
            } catch (error) {
                console.log(error);
            }
        } else {
            try{   
                console.log("OOPSIEDoopsie");
                const response = await fetch(`http:localhost:3333/destroyLike/${postData.id}`);
                console.log("doink");
            } catch (error) {
                console.log(error);
            }
        }
    }

    updateLikeStatus();
  }, [liked])


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