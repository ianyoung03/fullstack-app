import { Dimensions, Text, View } from "react-native";

//getting size of screen to scale the post container accordingly
const {width, height} = Dimensions.get('window');

export default function Post() {
  

  const componentWidth = width*0.9;
  const componentHeight = height*0.7;

  return (
    <View className='flex-1 w-screen h-full bg-slate-700'>
      <Text className='text-4xl font-bold'>This is a post container</Text>
    </View>
  );
}