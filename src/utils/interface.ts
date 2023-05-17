/*
 * @Author: wuxiaolin xiaolin.wu@eeoa.com
 * @Date: 2023-03-27 18:28:29
 * @LastEditors: wuxiaolin xiaolin.wu@eeoa.com
 * @LastEditTime: 2023-03-27 18:41:34
 * @FilePath: /vite-project/src/utils/interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Response
 */
export interface IResponseData {
    /**
     * 状态码
     */
    code: number;
    data: any;
    /**
     * 响应信息
     */
    message: string;
}
export interface IProduct {
    /**
     * 总页数
     */
    pageTotal: string;
    /**
     * 资源id
     */
    product_id: string;
    /**
     * 图片URL
     */
    product_img_url: string;
    /**
     * 名称
     */
    product_name: string;
    /**
     * 原始价格
     */
    product_price: string;
    /**
     * 折扣价格
     */
    product_uprice: string;
    /**
     * 总条数
     */
    rows: string;
}