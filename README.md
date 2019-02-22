# vue-xys-tongji

> 这是小雨伞数据统计的组件
> 1、Vue项目引入组件后自动统计路由变更，上报PV(Page View，浏览量)、UV(Unique Visitor，访客数)
> 2、Vue项目可以通过绑定 [ v-xys-track ] 指令来自动上报埋点信息

###安装
```
npm install vue-xys-tongji --save
```
在页面中引用
```
import XysTongJi from 'vue-xys-tongji'
```
使用插件
```
Vue.use(XysTongJi, {router: router})
```
埋点统计
在Vue项目中可以在任意元素绑定 [ v-xys-track ] 指令，点击该元素会自动上报埋点信息
```
#传值为变量
<a v-xys-track="keyName">点击事件上报</a>
...
data(){
 return {
   keyName: 'detail_askphone',
 };
},
#传值为字符串
<a v-xys-track="'detail_askphone'">点击事件上报</a>
```

###注意
1、该组件需要提前引入小雨伞的统计js文件
```
<include file="static/html/tongji.html" />
```
2、埋点统计如果传值为字符串，请用单引号包裹，不然会报错