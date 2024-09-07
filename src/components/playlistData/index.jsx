import axios from "axios";
const PlayListItems=async (playlistid)=>{
    const id=playlistid
    const data=await axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems',
      "params":{
      'part':'snippet',
      'maxResults':'100',
      'key': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      'playlistId':id,
    }})
    return data.data.items;
}
export default PlayListItems;