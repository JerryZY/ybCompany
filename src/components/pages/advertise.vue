<template>
  <div>
      <div class="header">
           <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >关于我们</el-breadcrumb-item>
        <el-breadcrumb-item >加入我们</el-breadcrumb-item>
      </el-breadcrumb>
      <hr>
      </div>
     
      <div class="content">
         <img src="@/assets/1.jpg" alt="">
         <div class="content-box">
            <h1>{{employeeInfo[nowIndex].position}}</h1>
            <div class="duty">
              <p>岗位职责：</p>
              <p v-html="employeeInfo[nowIndex].duty"></p>   
            </div>
            <div class="require">
               <p>岗位要求:</p>
               <p>{{employeeInfo[nowIndex].require}}</p>            
               <hr style="color:white">
               <p>简历发送至：</p>
               <p>lilianhua@outlook.com</p>
            </div>
            <router-link to="/connection"><div class="join-btn">加入我们</div></router-link>                       
         </div>  
         <div class="circle-box">
                <div class="circle" v-for="(item,index) in employeeInfo" @click="goto(index)" :class="{on: index === nowIndex}"></div>
            </div>     
      </div>            

  </div>
</template>

<script>
export default {
  data (){
      return {
         nowIndex: 0,
         employeeInfo:[
             {
                position:'前端工程师',
                duty:'1.负责产品和项目的页面，交互总体设计的实现</br>2.根据设计原型或文档编码实现。</br>3.根据交互要求实现功能并保证兼容性。',
                require:'从事前端开发工作3年以上'
             },
             {
                position:'嵌入式工程师',
                duty:'1.负责产品和项目的硬件控制开发。</br>2.根据需求进行软件的移植或者定制。</br>3.根据设计实现在控制板上开发相应的功能。',
                require:'从事嵌入式开发工作3年以上，精通linux'
             },
             {
                position:'JAVA工程师',
                duty:'1.负责移动App后台系统框架设计，及webservice接口的编写；</br>2.与移动App前端工程师合作，开发交互、性能、安全性良好的网站产品；</br>3.负责后台开发和维护，网站整体规划、组织及设计管理。',
                require:'从事JAVA后端开发工作3年以上'
             },
         ]
      }
  },
  methods:{
        goto(index){
            this.nowIndex=index;
        },
  }
}
</script>


<style scoped>
.header{
    width: 100%;
    /* height: 100px; */
    margin-top: 100px;
    padding-top:2%;
}
@media screen and (max-width: 850px){
    .header{
        /* height: 50px; */
        margin-top: 50px;
    }
}

.el-breadcrumb{
    /* margin-top: 20px; */
    margin-bottom: 20px;
    margin-left: 50px;
}
.content{
    width: 100%;
    position: relative;    
    text-align: left;
}
.content img{
    width: 100%;
    height: 100%;
}
.content-box{
    width: 35%;
    height: 84%;
    position: absolute;
    /* background-color: black; */
    top: 8%;
    left: 32.5%;
    color: white;
    font-family: "黑体";
}
.content-box h1{
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: center;
    font-size: 2.5vw;
}
.content-box p{
    color: white;
    font-size: 1.2vw;
    padding: 0 0 0.2%;
}
.require{
    position: absolute;
    top: 50%;
    width: 100%;
}
.join-btn{
    position: absolute;
    top: 85%;
    left: 37.5%;
    width: 25%;
    height: 6%;
    border: 1px solid white;
    box-shadow: 0 0 5px white;
    border-radius: 5%;
    text-align: center;
    line-height: 2.5vw;
    font-size: 1.2vw;
}
.join-btn:hover{
    color: rgb(43, 194, 163);
    border: 1px solid rgb(43, 194, 163);
    box-shadow: 0 0 5px rgb(43, 194, 163);
}
.circle-box{
    width: 30%;
    position: absolute;
    bottom: 2.5%;
    left: 48%;
    
}
.circle{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid white;    
    float: left;
    margin-right:2%;  
}
.circle:hover{
    background-color: white;
}
.on{
    background-color: white;
}
a {
    text-decoration: none;
    color: white;
}
.router-link-active {
    text-decoration: none;
}
</style>


