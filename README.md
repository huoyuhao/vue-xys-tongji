# vue-xys-tongji

> 这是小雨伞数据统计的组件

###安装
```
npm install vue-xys-tongji --save
```
在页面中引用
```
import xystongji from 'vue-xys-tongji'
```
使用插件
```
Vue.use(xystongji, {router: router})
```
埋点统计
```
<a v-xystrack="keyName" >点击时间上报</a>
```

###说明
该组件需要提前引入小雨伞的统计js文件
