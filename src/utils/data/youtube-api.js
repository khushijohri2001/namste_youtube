const API_KEY = "AIzaSyBIQnESt8QIZexFOT-hLoixiX0PDorg3tI"

export const YOUTUBE_POPULAR_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_VIDEO_DETAILS_API_BY_ID = (id) => `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`;


export const YOUTUBE_CATEGORY_VIDEO_API = (searchKeyword) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchKeyword}&key=${API_KEY}`;

export const YOUTUBE_COMMENT_THREAD_API = (id) =>  `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${id}&key=${API_KEY}`;

export const YOUTUBE_CHANNEL_API = (id) => `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`


export const YOUTUBE_SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

