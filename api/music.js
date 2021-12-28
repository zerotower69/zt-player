import axios from 'axios'
axios.defaults.baseURL = "https://music.zerotower.cn"
//获取歌词
export const getWords = (id) => {
    return axios.get(`/lyric?id=${id}`);
}
//获取歌曲详情
export const getMusicInfo = (id) => {
    return axios.get(`/song/detail?ids=${id}`);
}
//获取歌曲url
export const getMusicUrl = (id) => {
    return axios.get(`/song/url?id=${id}`);
}
//获取热门歌曲
export const getHotMusic = (id) => {
    return axios.get(`/top/list?idx=${id}`);
}
//获取搜索建议
export const getSearchSuggest = (key) => {
    return axios.get(`/search/suggest?keywords=${key}`)
}