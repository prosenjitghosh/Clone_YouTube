const API_Key="AIzaSyBEhmBTIbV7IbCcCMYQsgLNfvwkLbT_lj8";

export const Youtube_Popular_Video_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_Key}`;

export const Youtube_Suggestion = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const Youtube_Search = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${API_Key}`