import { Text, View , FlatList} from "react-native";
import Post from "../components/Post"
import {useState, useEffect} from "react"

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
/*const testApiCall = async() => {
  try {
    const response = await fetch(
      'http:localhost:3333/returnfeed'//,{ 
      //method: 'GET'
      //}
    );
    const json = await response.json();
    console.log(json);
    return json;
    
  } catch (error) {
    console.error(error);
  }
}*/



//const feed = testApiCall();
export default function Index() {
  // Test API Call
  //testApiCall();

  const [feed, setFeed] = useState<any[]>([]);

  const testApiCall = async() => {
    try {
      const response = await fetch(
        'http:localhost:3333/returnfeed'//,{ 
        //method: 'GET'
        //}
      );
      const json = await response.json();
      console.log(json);
      setFeed(json);
      
    } catch (error) {
      console.error(error);
    }
  }


  // this is great because this will run when our feed component initally mounts or renders. And remember it runs every time THIS component renders, not sub components within this one
  useEffect(() =>{
    testApiCall();
  }, [])
  return (

    
   // use flatlist to ensure lazy rendering (improved perfornamce)!!
    <FlatList data={feed} 
    renderItem={({item}) => <View className='h-screen w-screen'><Post postData={item}/></View>} 
    keyExtractor={item => item.id}/>
 
      

   
   
  );
}
