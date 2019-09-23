// var BASE_URL = 'http://localhost:8000';
// var URLIST = {
//   user_login: BASE_URL + '/admin/login',
//   user_logout: BASE_URL + '/admin/logout',
//   user_info: BASE_URL + '/admin/getuser'
// };
var BASE_URL='http://localhost:8000';
var URLIST={
   user_login:BASE_URL+'/admin/login',
   user_logout:BASE_URL+'/admin/logout',
   user_info:BASE_URL+'/admin/getuser',

   category_show:BASE_URL+'/admin/category_search',//文章类别搜索
   category_add:BASE_URL+'/admin/category_add',//新增文章
   category_del:BASE_URL+'/admin/category_delete',//删除文章
   category_edit:BASE_URL+'/admin/category_edit',//编辑文章类别
}