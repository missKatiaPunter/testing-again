import axios from "axios";

const API_KEY = "AIzaSyBxCU7R6_vlIpxdFu7WmpOnFdY1V97khZ4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: API_KEY
    }
});