import axios from "axios";
const FetchVideo=async (videoid)=>{
    const id=videoid
    const data=await axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/videos',
      "params":{
      'part':'snippet',
      'key':'AIzaSyC7dXH4DpGAhN5xconGyzY9UiZslTiCbGU',
      'id':id,
    }})
    return data;
}
export default FetchVideo;