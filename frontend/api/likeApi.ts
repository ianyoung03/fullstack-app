// calls API to process a like on the backend
const updateLikeStatus = async(liked: number, postDataId: number) => {
    if (liked == 1){
        try{   
            await fetch(`http:localhost:3333/storeLike/${postDataId}`);
        } catch (error) {
            console.log(error);
        }
    } else {
        try{   
            await fetch(`http:localhost:3333/destroyLike/${postDataId}`);
            
        } catch (error) {
            console.log(error);
        }
    }
}

export default updateLikeStatus;