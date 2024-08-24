import React, {useEffect, useState} from "react"
import {Image, Text, View, Pressable } from "react-native";


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
}
const PostImage: React.FC<PostImageProps> = ({liked, setLiked}) => {
 
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


  return(
    <Pressable onPress={onPress}>
      <Image source={require('../assets/golf.jpeg')} />
    </Pressable>
  );
}

export default PostImage;