import { TouchableOpacity, Text, View } from "react-native";
import React, {useState} from "react"
import {useContext, createContext, } from "react"

interface LikeButtonProps {
    liked: number;
    setLiked: (liked: number) => void;
}
export const LikeButton : React.FC<LikeButtonProps> = ({liked, setLiked}) => {
  
  const handlePress = () => {
    setLiked(1 - liked);
  }

  return (
    <TouchableOpacity className='absolute bottom-12 right-5 z-10' onPress={handlePress}>
      {(liked == 1) && (
        <Text className='text-5xl z-10' >❤️</Text>
      )}
      {(liked == 0) && (
        <Text className='text-5xl z-10' >🩶</Text>
      )}
    </TouchableOpacity>
  );
}

export default LikeButton;