<template>
  <div id="app">
    <el-row class="app-head">
      <el-col :span="12">
        <div class="header-left">
            <router-link to="/"> <img src="./assets/5_03.png" alt=""></router-link>
        </div>
      </el-col>
      <el-col :span="12" class="header-nav">
        <ul @click="addStyle($event)">
          <router-link to="/"><li class="active">首页</li></router-link>
          <li>服务项目</li>
          <router-link to="/productdetil"><li>案例</li></router-link>
          <router-link to="/newsdetil"><li>新闻中心</li></router-link>
          <router-link to="/">
            <li @mouseover="showDropdown" @mouseout="hideDropdown">关于我们
              <div class="dropdown">
                <router-link to="/profile"><p>公司简介</p></router-link>
                <router-link to="/honor"><p>荣誉资质</p></router-link>
                <router-link to="/advertise"><p>加入我们</p></router-link>
                <router-link to="/connection"><p>联系我们</p></router-link>
              </div>
            </li>
          </router-link>
        </ul>

      </el-col>
    </el-row>
  
     
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <el-row :gutter="0" class="footer">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content">
        <h4>关于我们</h4>
        <router-link to="/profile"><p>公司简介</p></router-link>
        <router-link to="/honor"><p>荣誉资质</p></router-link>
        <router-link to="/advertise"><p>加入我们</p></router-link>
        </div></el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5"><div class="grid-content ">
        <h4>服务项目</h4>
        <p>3D打印机</p>
        <p>无人机</p>
        <p>创客套间</p>
        </div></el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content ">
        <h4>案例</h4>
        <p>福州第二中学</p>
        <p>仓山实验小学</p>
        <p>福州第四中学</p>
        </div></el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5"><div class="grid-content ">
        <h4>联系我们</h4>
        <p>电话：xxxxxx</p>
        <p>传真：xxxxxxx</p>
        <p>邮箱：lilianhuo@outlook.com</p>
        </div></el-col> 
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="ybcode">
        <h4>关注我们</h4>
        <img src="@/assets/code.jpg" alt="">
        </div></el-col>      
    </el-row>
      <div class="last"><p>Copyright 2018 厦门南方宇邦科技有限公司 闽ICP备xxxxxxxx号</p></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        timer:''
      }
    },
    mounted(){
      window.addEventListener('scroll',this.changeNav);
    },
    components:{
      
    },
    methods: {
      changeNav(){
        var sTop =window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;  
        var nav=document.getElementsByClassName('app-head')[0];
        if(sTop>0){
          nav.style.opacity=0.9;
          nav.style.boxShadow="3px 3px 3px grey";
         }else{
           nav.style.opacity=1;
           nav.style.boxShadow='none';
        }
      },
      addStyle(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var aLI=document.getElementsByTagName('li');
        for(var i=0;i<aLI.length;i++){
          console.log(aLI[i].className+i);          
          aLI[i].className='';
        }
        if(target.nodeName.toLowerCase() === 'li'){
          target.className='active';
          console.log(target.className+'target');
        }
        if(target.nodeName.toLowerCase() === 'p'){
          target.parentNode.parentNode.parentNode.className='active';
        }
      },
      showDropdown(){
        clearTimeout(this.timer);
        var oDiv=document.getElementsByClassName('dropdown')[0];
        oDiv.style.display='block';

      },
      hideDropdown(){
        var oDiv=document.getElementsByClassName('dropdown')[0];
        this.timer=setTimeout(function(){
          oDiv.style.display='none';
        },300);

      }
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
h4{
  padding-top: 25px;
  margin: 0;
  font-size: 1.2vw;
}
p{
  font-size: 1vw;
}
/* h1{
  text-align: left;
  line-height: 220px;
  margin: 0;
  padding-left: 15px;
  width: 50%;
  height: 100%;
  float: left;
  font-size: 2vw;
} */
/* @media screen and (max-width: 850px){
  h1{
    text-align: left;
    line-height: 100px;
    margin: 0;
    padding-left: 10px;
    width: 50%;
    height: 100%;
    float: left;
    font-size: 2vw;
  }
} */


  .footer {
    background-color: rgb(245, 245, 245);
    font-size: 90%;
  } 
.el-menu-item{

  font-size: 1.2vw;
}
@media screen and (max-width: 850px){
  .el-menu-item{
  font-size: 0.8vw;
  }
}
.app-head{
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 3;
  top: 0;
  background-color: white;
}

.header-nav{
  width: 50%;
  height: 100px;
  /* background-color: pink; */
  margin: 0;
  padding: 0;
}

.header-nav li{
  width: 12%;
  list-style: none;
  float: left;
  /* background-color: yellow; */
  padding:0 3% 10px;
  font-family: "黑体";
  color: gray;
  margin: 5% 0;
  font-size: 1.3vw;
  position: relative;
}

.header-nav li:hover{
  border-bottom: 2px solid rgb(43, 194, 163);
  color:  rgb(43, 194, 163);
}
.header-nav .active{
  border-bottom: 2px solid rgb(43, 194, 163);
  color:  rgb(43, 194, 163);
}
.header-left{
  position: relative;
}
.header-left img{ 
  width: 50%;
  float: left;
  margin-left: 10%; 
  margin-top: 5%;
}
.el-menu li{
  float: left;
  padding-left: 5%;
}

.ybcode img{
  height: 25%;
  width: 25%;
  /* margin-top: 5%; */
}
.last{
  width: 100%;
  background-color:rgb(43, 194, 163);
  color: white;
}
.last p{
  color: white;
  margin: 0;
  padding: 5px;
  font-size: 1vw;
  font-family: "微软雅黑";
}
h4{
  font-family: "黑体";
  margin-bottom:5px ;
}
p{
  font-family: "微软雅黑";
  color: gray;
  margin: 0;
  padding: 2px;
}
.grid-content{
  margin-top:10% auto 10%;

}
@media screen and (max-width: 850px){
  .app-head{
    height: 50px;
  }
  .header-nav{
    height: 50px;
  }
  .header-nav li{
    margin-top: 0;
    width: 13%;
    padding:0 2px 10px;
  }
  .header-left img{
    margin-top: 10px;
    height: 25px;
    width: 125px;
  }
}
.dropdown{
  width: 100%;
  background-color: white;
  margin-top: 10px;
  box-shadow: 1px 1px 5px gray;
  margin:7px -5px;
  padding: 5px;
  display: none;
  position: absolute;
  top: 2.5vw;
  left: -0.2vw;
}
.dropdown p{
  margin: 4px ;
}
.dropdown p:hover{
  color: rgb(43, 194, 163);
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
</style>
