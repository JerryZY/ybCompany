<template>
  <div>
      <div class="header">
          <img src="@/assets/connection.jpg" alt="">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >关于我们</el-breadcrumb-item>
        <el-breadcrumb-item >公司简介</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <div class="content">
          <h1>公司简介</h1>
          <p>COMPANY PROFILE</p>
          <hr>
          <p class="info">厦门南方宇邦科技有限公司是一家以技术为导向的研发中心，主要为智能硬件的开发，
比如3D打印机及其生态服务、无人机研发及其服务、创客套件开发等。总部为福建宇邦
科技有限公司，工厂在深圳，且在内蒙古呼和浩特、西安等地有分公司。
       我们一直以技术为第一生产力作为核心思想，秉承“以市场为导向，通过为客户提供
优质的服务，实现与客户的合作共赢”的服务理念，持续不断地为客户提供一流的产品和
全方位的解决方案，创造客户价值。
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


