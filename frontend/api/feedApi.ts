
// function receives 10 new random feed items (posts) in json form from backend
const getFeed = async() => {
    try {
      const response = await fetch(
        'http:localhost:3333/returnfeed'
      );
      const json = await response.json();

      return(json)
      
    } catch (error) {
      console.error(error);
    }
  }

  export default getFeed;