import axios from 'axios'; // package.json에 설치된 axios 라이브러리를 들고 온다.
//node_modules에 설치된 라이브러리를 들고 온다.
// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() { 
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList() {
    // return axios.get(config.baseUrl + 'ask/1.json');
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
    // return axios.get(config.baseUrl + 'jobs/1.json')
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchCommentItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
}


 