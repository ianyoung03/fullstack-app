import { Text, View , FlatList} from "react-native";
import Post from "../components/Post"


const Posts = [
  {
    id: '0',
    title: 'First Item',
  },
  {
    id: '1',
    title: 'Second Itedssm',
  },
  {
    id: '2',
    title: 'Third Item',
  },
];

//type ItemProps = {title: string};

// const Item = ({title}: ItemProps) => (
//   <View>
//     <Text>TTTT</Text>
//   </View>
// );

export default function Index() {
  return (
   
   // use flatlist to ensure lazy rendering (improved perfornamce)!!
   
    <FlatList data={Posts} 
    renderItem={({item}) => <View className='h-screen w-screen'><Post/></View>} 
    keyExtractor={item => item.id}/>
 
      

   
   
  );
}
