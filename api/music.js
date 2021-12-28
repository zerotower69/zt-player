import axios from 'axios'
//获取歌词
export const getWords = (id) => {
    return axios.get(`https://music.zerotower.cn/lyric?id=${id}`);
}
//获取歌曲详情
export const getMusicInfo = (id) => {
    return axios.get(`https://music.zerotower.cn/song/detail?ids=${id}`);
}
//获取歌曲url
export const getMusicUrl = (id) => {
    return axios.get(`https://music.zerotower.cn/song/url?id=${id}`);
}
//获取热门歌曲
export const getHotMusic = (id) => {
    return axios.get(`https://music.zerotower.cn/top/list?idx=${id}`);
}
//获取搜索建议
export const getSearchSuggest = (key) => {
    return axios.get(`https://music.zerotower.cn/search/suggest?keywords=${key}`)
}