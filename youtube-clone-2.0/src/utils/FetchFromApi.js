import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '73c8605efbmsh288a5ec7206f07dp1b54e2jsnc59b4a30d545',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const FetchFromApi = async (url) => {
    //console.log('Inside fetchfromapi',process.env.REACT_APP_RAPID_API_KEY)
    const {data} = await axios.get(`${BASE_URL}/${url}`,
    options);

    return data;
  }