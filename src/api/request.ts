/*
 * @Author: wuxiaolin xiaolin.wu@eeoa.com
 * @Date: 2023-03-23 18:35:17
 * @LastEditors: wuxiaolin xiaolin.wu@eeoa.com
 * @LastEditTime: 2023-03-27 18:40:10
 * @FilePath: /vite-project/src/api/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
const service = axios.create({
  baseURL: "http://127.0.0.1:4523/m1/2484323-0-default"
});
// 请求拦截器
service.interceptors.request.use((config) => config);
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    if (!res.data.code) {
      return res.data.data;
    }
  },
  (err) => Promise.reject(err)
);
export default service;
