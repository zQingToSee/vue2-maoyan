//* 这个文件用来管理整个项目的所有接口
import http from "./http";
// 城市列表接口
export const getCityListApi = (params) => http.get("/area/list", params);
// 最受欢迎接口
export const getRatedListApi = (params) => http.get("/rated/list", params);
