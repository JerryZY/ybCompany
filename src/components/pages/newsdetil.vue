<template>
  <div>
      <div class="header">
          <img src="@/assets/connection.jpg" alt="">
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >新闻中心</el-breadcrumb-item>
      </el-breadcrumb>
      <hr>
      <div class="content">
          <h1>新闻中心</h1>
          <ul>
              <li v-for="item in newsList">
                <router-link :to="{path:'/news',query:{ id:item.newsId }}">
                <img src="@/assets/6_02.png" alt="">
                <h4>{{item.newsTitle}}</h4>
                <p>{{item.newsDate | formatDate}}</p>
                <p style="color:rgb(43, 194, 163)">阅读全文</p>
                </router-link>  
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {formatDate} from '@/components/common/date.js';
export default {
  data (){
      return{
          newsList:[]
      }
  },
  filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
  created(){
     this.$ajax({
        method:"post",
        url:"findSuccessNews.action",
     })
     .then((response)=>{
         console.log(response);
         this.newsList=response.data;
     })
     .catch(error=>{
         console.log(error);
         alert('error');
     })
  }
}
</script>


<style scoped>
.header{
    width: 100%;
    margin-top: 100px;
}
@media screen and (max-width: 850px){
    .header{
        margin-top: 50px;
    }
}
.header img{
    width: 100%;
    height: 100%;
}
.el-breadcrumb{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
}
.content{
    width: 80%;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
}
.content li{
    list-style: none;
    color: gray;
    float: left;
    width: 30%;
    margin: 5% 1% 5%;
    background-color: rgb(245, 245, 245);
    text-align: left;
}
.content li img{
    width: 100%;
    height: 100%;
}
</style>


