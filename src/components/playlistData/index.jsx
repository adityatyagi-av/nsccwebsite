import axios from "axios";
const PlayListItems=async (playlistid)=>{
    const id=playlistid
    const data=await axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems',
      "params":{
      'part':'snippet',
      'maxResults':'100',
      'key':'AIzaSyC7dXH4DpGAhN5xconGyzY9UiZslTiCbGU',
      'playlistId':id,
    }})
    return data.data.items;
}
export default PlayListItems;