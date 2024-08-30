import { View , FlatList, Dimensions, RefreshControl} from "react-native";
import Post from "../components/Post"
import {useState, useEffect, useCallback} from "react"
import getFeed from "../api/feedApi"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  
  // state hook storing feed items as an array of JSON objs
  const [feed, setFeed] = useState<any[]>([]);

  // used for refresh control in flatlist
  const [refreshing, setRefreshing] = useState(true);



  // makes an API call to get feed on first render, and whenever refreshing value is changed
  useEffect(() =>{
    if(refreshing){
      getFeed().then(json => {
        setFeed(json);
      }).catch(error => console.error(error));
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
