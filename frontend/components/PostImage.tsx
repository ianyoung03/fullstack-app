import React, {useEffect, useState} from "react"
import {Image, Text, View, Pressable } from "react-native";
import images from '../assets/imageMapping'

// DOUBLE CLICK CODE: https://benhur-martins.medium.com/handling-double-and-single-tap-on-react-native-101b43bf4f2a
// NOTE TO READER: i know defining tpyes as any in TS is a bad practice, but since this is just for demo I am being lazy
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

  //console.log(image);
  
  const imageSource = images[image];
  
  if (!imageSource) {
    return <View><Text>No image found</Text></View>;
  }

  return(
      <Pressable className = 'justify-center items-center' onPress={onPress}>
        <Image style={{height: 510, width: 375}} className='rounded-lg w-11/12  z-0 mb-30' source={imageSource} />
      </Pressable>
  );
}

export default PostImage;