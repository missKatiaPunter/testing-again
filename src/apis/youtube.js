import axios from "axios";

const API_KEY = "AIzaSyBx3MW7kb7a-RMNR9CSWnq7l2ouIloMCOE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: API_KEY
    }
});