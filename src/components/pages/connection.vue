<template>
  <div>
      <div class="header">
          <img src="@/assets/connection.jpg" alt="">
                     <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >关于我们</el-breadcrumb-item>
        <el-breadcrumb-item >联系我们</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <div class="content">
          <h1>联系我们</h1>
          <p>CONTACT US</p>
          <hr>
          <p class="info">地址：福建省厦门市集美区招商海德公园别墅101<br>
             电话：xxxxxxxx<br>
             传真：xxxxxxxx<br>
             邮编：361022<br>
             邮箱：lilianhuo@outlook.com<br>
          </p>
          <hr>
      </div>
          

  </div>
</template>

<script>
export default {
  data (){
      return {
      }
  },
  methods:{
        
  }
}
</script>


<style scoped>
.header{
    width: 100%;
    /* height: 100px; */
    margin-top: 100px;
}
@media screen and (max-width: 850px){
    .header{
        /* height: 50px; */
        margin-top: 50px;
    }
}
.header img{
    width: 100%;
}
.content{
    width: 80%;
    /* background-color: black; */
    text-align: left;
    position: relative;
    left: 10%;
    font-size: 1.1vw;
}
.content h1{
    margin-bottom: 0;
}
.info{
    margin: 10% 2% 10%;
}
hr{
    color: rgb(182, 180, 180);
    box-shadow: 0 0 2px rgb(182, 180, 180);
}
.el-breadcrumb{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
}
</style>


