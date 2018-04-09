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
        <h2>{{newscontent.newsTitle}}</h2>
        <p>{{newscontent.newsDate | formatDate}}</p>
        <div v-html="newscontent.newsEditorval"></div>
        <router-link to="/newsdetil"><div>返回</div></router-link>
      </div>
  </div>
</template>

<script>
import {formatDate} from '@/components/common/date.js';
export default {
  data (){
      return{
        newscontent:[]
      }
  },
  filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
  created(){
    var newsId=this.$route.query.id;
    this.$ajax({
        method:"post",
        url:"findNewsById.action",
        params: {
            newsId: newsId
        }
     })
     .then((response)=>{
         console.log(response);
         this.newscontent=response.data;
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
}
</style>


