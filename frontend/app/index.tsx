import { Text, View , FlatList, Dimensions, RefreshControl} from "react-native";
import Post from "../components/Post"
import {useState, useEffect, useCallback} from "react"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  
  // state hook storing feed items as an array of JSON objs
  const [feed, setFeed] = useState<any[]>([]);

  // used for refresh control in flatlist
  const [refreshing, setRefreshing] = useState(true);


  const testApiCall = async() => {
    try {
      const response = await fetch(
        'http:localhost:3333/returnfeed'
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

    
    // Main feed renders in this flatlist
    // rendering as flatlist instead of scrollview so it does lazy rendering
    <FlatList data={feed} 
      renderItem={({item}) => <View style={{height: windowHeight*0.7}} className='flex-1 '><Post postData={item}/></View>} 
      keyExtractor={item => item.id}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
    />
  
      

   
   
  );
}
