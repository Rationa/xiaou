import http from './axios'

// 获取轮播图信息
export function getBannerList(){
    return http.get('/api/getbanner')
}

// 获取商品信息
export function getIndexgoods(){
    return http.get('/api/getindexgoods')
}