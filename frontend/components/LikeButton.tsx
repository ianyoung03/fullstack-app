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
    <TouchableOpacity onPress={handlePress}>
      <Text>{liked==1 ? "Liked" : "Unliked"}</Text>
    </TouchableOpacity>
  );
}

export default LikeButton;