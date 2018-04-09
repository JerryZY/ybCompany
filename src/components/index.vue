<template>
  <div>
    <div class="block">
     <el-carousel height="685px">
      <el-carousel-item v-for="(item,index) in CarouselImg" :key="index">
        <img :src="item.url" alt="">
      </el-carousel-item>
     </el-carousel>
    </div>
    <div class="feature">
      <ul>
        <li>
          <img src="@/assets/3_03.png" alt="">
          <h4>技术支持</h4>
          <p>一家以技术为导向的研发中心、</p>
          <p>国家重点高新技术企业</p>
        </li>
        <li>
          <img src="@/assets/3_05.png" alt="">
          <h4>核心思想</h4>
          <p>以技术为第一生产力</p>
        </li>
        <li>
          <img src="@/assets/3_07.png" alt="">
          <h4>精诚服务</h4>
          <p>在产品研发和技术层面精益求精，</p>
          <p>孜孜不倦，从而快速响应客户，</p>
          <p>提升服务质量</p>
        </li>
      </ul>
    </div>
    <div class="service">
      <h1>服务项目</h1>
      <ul>
        <li><div>
          <div class="filter">
            <p>3D打印机</p>
            <p>及其生态服务</p>
          </div>
          <img src="@/assets/4_03.png" alt="">
        </div></li>
        <li><div>
          <div class="filter">
            <p>无人机</p>
            <p>及其开发</p>
          </div>
          <img src="@/assets/4_05.png" alt="">
        </div></li>
        <li><div>
          <div class="filter">
            <p>创客套间</p>
            <p>及其开发</p>
          </div>
          <img src="@/assets/4_07.png" alt="">
        </div></li>
      </ul>
    </div>
    <SildeShow :sildes="sildes" :inv="invTime"></SildeShow>
    <div class="honor" >
      <h1>荣誉资质</h1>
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
    </div>
    <div class="profiles">
      <h1>新闻中心</h1>
      <div class="profiles-word">
        <p>中国海峡项目成果交易会期间，福建省省长于国伟、副省长张志南、副省长梁建勇、省发改委主任魏克良、福州市常务副市长黄忠勇、管委会主任何宝、市发改委领导同志等，亲临福建宇邦科技体验馆详细了解公司发展情况及公司未来的发展愿景！</p>
      </div>
      <el-row class="profiles-row">
        <el-col :span="12" >
          <div class="profiles-img">
            <img src="@/assets/6_02.png" alt="">
            <img src="@/assets/6_07.png" alt="">
          </div>
        </el-col>
        <el-col :span="12">
          <div class="profiles-img" style="text-align:right">
            <img src="@/assets/6_04.png" alt="">
            <img src="@/assets/6_09.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SildeShow from '@/components/sildeshow'
export default {
  name: 'index',
  data () {
    return {
      CarouselImg:[
        {url:require('@/assets/1_02.png')},
        {url:require('@/assets/2_02.jpg')},
        {url:require('@/assets/3_02.png')},
      ],
      invTime:2000,
      sildes:[
        {
          src:require('@/assets/image008.jpg'),
          title:'福州市第二中学',
          content:'为响应国家“全民阅读”的号召，落实党的十六大关于建设学习型社会的要求，进一步提高全体师生的阅读量和阅读水平，福州二中引进了“书香校园”读书运动，师生通过宇邦科技云屏借阅机可以直接在触摸屏上进行阅读，也可以通过扫一扫图书二维码，即可将图书下载到手机、ipad等手持移动终端设备上，享受“手机扫一扫，把书带回家”的服务体验。使广大师生的课外阅读变得更加方便更加高效，最大化得利用碎片化的空闲时间充实自身知识。'
        },
        {
          src:require('@/assets/image007.jpg'),
          title:'福州仓山实验小学',
          content:'本公司为仓山实验小学量身打造了智慧课堂解决方案，进一步提升了教育信息化水平，充分利用先进的教育技术促进学习方式的改革，带给学生更多个性化学习体验，使学生学习更自主，交互更充分，减轻了教师的工作压力，调动了学生的学习积极性。'
        },
        {
          src:require('@/assets/image006.jpg'),
          title:'福州第四中学',
          content:'福建省福州第四中学系福建省省重点中学、福建省一级达标校、福州市首批特色学校。现有39个教学班，学生数近2000人。福建宇邦科技为福州第四中学提供强有力的校园信息化整体解决方案和技术支撑。为福州第四中学的校园信息化建设及保障信息化教学、教学及教务管理秩序做出了卓越的贡献。'
        },
      ],
    }
  },
  components:{
    SildeShow
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
} */
.el-carousel{
  margin-top: 100px;
}
.el-carousel img{
  height: 100%;
  width: 100%;
}
p{
  margin: 0;
  font-size: 1vw; 
}
/* @media screen and (max-width: 850px){
  .el-carousel{
    height: 100px;
  }
  .el-carousel__container{
    height: 100px;
  }
} */
.feature{
  background-color:rgb(249, 249, 249);
  width: 100%;
  overflow: hidden;
  margin: 2% auto 0;
  padding: 0;
}
.feature li{
  list-style: none;
  float: left;
  width: 32%;
  margin: 0 auto;
  padding-top:5%; 
  /* background-color:pink; */
  text-align: center;
}
.feature li img{
  width: 15%;
  height: 15%;
}
.feature li h4{
  font-size: 1.2vw;
  margin-bottom: 1vw;
  font-family: "黑体";
}
p{
  color: gray;
  font-family: "微软雅黑";
}
.service{
  background-color:rgb(249, 249, 249);
  width: 100%;
  overflow: hidden;
  margin:auto 0;
  padding: 0;
}
.service li{
  list-style: none;
  float: left;
  width: 32%;
  margin: 0 auto;
  padding-top:5%; 
  
  /* background-color:pink; */
  text-align: center;
}

.service li>div{
  /* height: 60%; */
  width: 60%;
  margin: 0 auto 15%;
  position: relative;
}
.service li>div>img{
  height: 100%;
  width: 100%;
}
.filter{
  height: 55%;
  width: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0;
  text-align: center;
  padding-top: 44%;
  filter:alpha(opacity=0); 
  
}
.filter p{
  color: white;
  font-family: "微软雅黑";
}
.filter>p:nth-child(1){

  font-weight: 15px;
  font-size: 2vw;
  margin-bottom: 5px;
  margin-top: -15px;
}
.filter:hover{
  background-color: rgb(42, 148, 125);
  opacity: 0.8;
  filter:alpha(opacity=80);
}
.honor{
  width: 100%;
  background-color: rgb(249, 249, 249)
}
h1{

  padding-top: 5%;
  font-size: 2vw;
  font-family: "黑体";
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
.profiles-word{
  width: 50%;
  margin: 0 auto 0;
}
.profiles-row {
  width: 100%;
  padding: 5% 0 10%;
}
/* .profiles-row .profiles-img:nth-child(1){
  margin-right: 2.5%;
} */
/* .profiles-img:nth-child(2){
  margin-left: 2.5%;
} */
.profiles-img img{
  height: 100%;
  width: 96%;
  margin-bottom: 5%;
}
@media screen and (max-width: 850px){
  .el-carousel{
    margin-top: 50px;
  }
}
</style>
