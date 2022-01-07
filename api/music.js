import axios from 'axios'
axios.defaults.timeout = 10000;
//获取歌词
export const getWords = (baseUrl, id) => {
    return axios.get(`${baseUrl}/lyric?id=${id}`);
}
//获取歌曲详情
export const getMusicInfo = (baseUrl, id) => {
    return axios.get(`${baseUrl}/song/detail?ids=${id}`);
}
//获取歌曲url
export const getMusicUrl = (baseUrl, id) => {
    return axios.get(`${baseUrl}/song/url?id=${id}`);
}
// //获取热门歌曲   此接口废弃处理
// export const getHotMusic = (id) => {
//     return axios.get(`/top/list?idx=${id}`);
// }
//获取搜索建议
export const getSearchSuggest = (baseUrl, key) => {
    return axios.get(`${baseUrl}/search/suggest?keywords=${key}`)
}

//获取榜单的歌手
export const getTopListArtist = (baseUrl, type) => {
    return axios.get(`${baseUrl}/toplist/artist?type=${type}`)
}

//新歌速递
export const getNewSongs = (baseUrl, type) => {
    return axios.get(`${baseUrl}/top/song?type=${type}`)
}

//获取音乐详情,ids可以是单个id,也可以是，分割的id,也可以是id数组
export const getSongDetail = (baseUrl, ids) => {
    if (Array.isArray(ids)) {
        ids = ids.join(',')
    }
    return axios.get(`${baseUrl}/song/detail?ids=${ids}`)
}

//获取歌单详情
export const getPlayListDetail = (baseUrl, id) => {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}