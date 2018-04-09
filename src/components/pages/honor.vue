<template>
  <div>
      <div class="header">
          <img src="@/assets/connection.jpg" alt="">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >关于我们</el-breadcrumb-item>
        <el-breadcrumb-item >荣誉资质</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <div class="content">
          <h1>荣誉资质</h1>
          <p>QUALIFICATION</p>
          <hr>
          <el-row class="honor-row">
        <el-col :span="6">
          <div class="honor-img">
            <img src="@/assets/image001.jpg" alt="">
          </div>          
        </el-col>
        <el-col :span="6">
          <div class="honor-img">
            <img src="@/assets/image002.jpg" alt="">
          </div>          
        </el-col>
        <el-col :span="6">
          <div class="honor-img">
            <img src="@/assets/image003.jpg" alt="">
          </div>          
        </el-col>
        <el-col :span="6">
          <div class="honor-img">
            <img src="@/assets/image004.jpg" alt="">
            <img src="@/assets/image005.jpg" alt="">
          </div>
          
        </el-col>
      </el-row>
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

hr{
    color: rgb(182, 180, 180);
    box-shadow: 0 0 2px rgb(182, 180, 180);
}
.el-breadcrumb{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
}
.honor{
  width: 100%;
  background-color: rgb(249, 249, 249)
}
.honor-row{
  padding: 5%;
}
.honor-img{
  margin: 0 4% 0;
}
.honor-img img{
  width: 100%;
  height: 100%;
}
</style>


