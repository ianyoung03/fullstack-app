import { Text, View , FlatList, Dimensions, RefreshControl} from "react-native";
import Post from "../components/Post"
import {useState, useEffect, useCallback} from "react"

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//const feed = testApiCall();
export default function Index() {
  // Test API Call
  //testApiCall();

  const [feed, setFeed] = useState<any[]>([]);

  const [refreshing, setRefreshing] = useState(true);


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
    if(refreshing){
      testApiCall();
      setRefreshing(false);
    }
    
  }, [refreshing])

    // Function to handle refreshing
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      
    }, []);
  return (

    
   // use flatlist to ensure lazy rendering (improved perfornamce)!!
    <FlatList data={feed} 
    renderItem={({item}) => <View style={{height: windowHeight*0.7}} className='flex-1 '><Post postData={item}/></View>} 
    keyExtractor={item => item.id}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
    />
  
      

   
   
  );
}
