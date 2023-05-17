import request from "./request";
//获取列表数据
export const getLists = () => request.get(`/home/page/2/15`);

//获取商品详情
export const getDetail = (id) => request.get(`/detail/${id}`);
