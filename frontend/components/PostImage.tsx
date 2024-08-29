import React, {useEffect, useState, useRef} from "react"
import {Image, Text, View, Pressable } from "react-native";
import images from '../assets/imageMapping'

// DOUBLE CLICK CODE for liking posts: https://benhur-martins.medium.com/handling-double-and-single-tap-on-react-native-101b43bf4f2a
let timer: any = null;
const TIMEOUT = 500
const debounce = (onSingle: any, onDouble: any) => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    onDouble();
  } else {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      onSingle();
    }, TIMEOUT);
  }
};
// END OF THIS DOUBLE CLICK CODE PORTION

interface PostImageProps {
  liked: number;
  setLiked: (liked: number) => void;
  image: string;
}
const PostImage: React.FC<PostImageProps> = ({liked, setLiked, image}) => {
 
  // DOUBLE CLICK CODE
  const [tap, setTap] = useState("...");

  useEffect(() => {
    setTimeout(() => {
      setTap("...");
    }, 2000);
  }, [tap]);

  const onSingleTap = () => null;
  const onDoubleTap = () => setLiked(1 - liked);

  const onPress = () => {
    debounce(onSingleTap, onDoubleTap);
  };
  // DOUBLE CLICK CODE ENDS

  //state to store if the like animation (big red heart when you like a post) is active
  const [likeAnimation, setLikeAnimation] = useState(false);
  
  const initialRender = useRef(true);
  
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    /* if a post is liked let the state of likeAnimation be true for one second, then set back to false
     so that it can be rendered for 800ms in the return function*/
    if (liked ){
      initialRender.current = false;
      setLikeAnimation(true);
        const timer = setTimeout(() => {
          setLikeAnimation(false);
        }, 800);
      }
      return () => clearTimeout(timer);
    }, [liked])
  
  /* accessing the image to be displayed */
  const imageSource = images[image];
  
  if (!imageSource) {
    return <View><Text>No image found</Text></View>;
  }

  return(
      <Pressable className = 'justify-center items-center' onPress={onPress}>
        <Image style={{height: 510, width: 375}} className='rounded-lg w-11/12  z-0 mb-30' source={imageSource} />
        {likeAnimation && (
          <Text className='absolute text-9xl z-30 color-white'>❤️</Text>
        )}
      </Pressable>
  );
}

export default PostImage;