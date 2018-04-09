<template>
  <div>
      <div class="header">
          <img src="@/assets/4.jpg" alt="">
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >案例</el-breadcrumb-item>
      </el-breadcrumb>
      <hr>
      <div class="content">
          <template>
              <h2>案例介绍</h2>
  <el-tabs tab-position="left" >
    <el-tab-pane label="福州第四中学">
        <h4>福州第四中学</h4>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp福建省福州第四中学系福建省省重点中学、福建省一级达标校、福州市首批特色学校。现有39个教学班，学生数近2000人。福建宇邦科技为福州第四中学提供强有力的校园信息化整体解决方案和技术支撑。为福州第四中学的校园信息化建设及保障信息化教学、教学及教务管理秩序做出了卓越的贡献。</p>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp产品应用：校园信息化技术支撑平台、办公及教学设备</p>
        <img src="@/assets/image006.jpg" alt="">
    </el-tab-pane>
    <el-tab-pane label="仓山实验小学">
        <h4>仓山实验小学</h4>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp学校占地面积19314平方米，建筑面积10238平方米，绿化面积1800平方米。学校教育教学设施配套齐全，重视德育环境建设，积极营造动静相宜、文明优美的育人乐园。学校现有36个教学班，近2000名学生，教职工98人。先进的办学理念，过硬的师资队伍，仓山区实验小学成为仓山区颇具影响力的素质教育窗口，教师进修培训的试验田，福建师范大学基础教育课程改革中心的实验基地，福建儿童发展职业学校教育实践基地。</p>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp福建宇邦科技为仓山实验小学量身打造了智慧课堂解决方案，进一步提升了教育信息化水平，充分利用先进的教育技术促进学习方式的改革，带给学生更多个性化学习体验，使学生学习更自主，交互更充分，减轻了教师的工作压力，调动了学生的学习积极性。</p>
        <img src="@/assets/image007.jpg" alt="">
    </el-tab-pane>
    <el-tab-pane label="福州第二中学">
        <h4>福州第二中学</h4>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp福州第二中学是国家首批中小学现代教育技术实验学校、福建省青少年道德建设研究试验学校，也是福建省一级达标校。占地面积33917平方米，建筑面积3万平方米；共有班级60余个，在校生近2000人，教职工153人。</p>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp为响应国家“全民阅读”的号召，落实党的十六大关于建设学习型社会的要求，进一步提高全体师生的阅读量和阅读水平，福州二中引进了“书香校园”读书运动，师生通过宇邦科技云屏借阅机可以直接在触摸屏上进行阅读，也可以通过扫一扫图书二维码，即可将图书下载到手机、ipad等手持移动终端设备上，享受“手机扫一扫，把书带回家”的服务体验。使广大师生的课外阅读变得更加方便更加高效，最大化得利用碎片化的空闲时间充实自身知识。</p>
        <img src="@/assets/image008.jpg" alt="">
    </el-tab-pane>
    <el-tab-pane label="宁德市蕉城区教育云平台">
        <h4>宁德市蕉城区教育云平台</h4>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp宁德市蕉城区教育云平台是宁德市首个区域级教育云平台。该平台打破了传统数字校园的建设模式，建立了一个集教务管理、教学资源共享、教学应用、课程社区、名师工作室等重点业务体系构成的云计算中心。该平台解决了宁德市蕉城区区属校园的教育资源分布不均、教学信息化应用不深、智慧校园建设盲目、信息孤岛等问题。为智慧校园的建设提供了实际可行的思路，建立了典范。</p>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp通过该平台，教师、学生、家长都能拥有自己的在线空间。教师实现在线备课、免费获取教学资源、授课助手、名师互动等实用功能。学生可以在线反馈学习中的问题，及时提升学习薄弱点。家长可以实现在线的家校互动、获取学生在校学习情况等。学校可以实现在线的校务管理、电子化办公流程等，提高办公效率，为教育工作者大大减轻了工作压力和工作量。</p>
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp蕉城区教育云平台充分利用云计算、大数据先进技术，实现一站式全托管服务。教育局和学校无需投入任何人力物力，即可享受到智慧教育的全方位服务。所有数据和应用均可在云端自动完成计算，超高等级的互联网安全防护措施使平台的使用更加省时省力省心。</p>
        <img src="@/assets/image009.png" alt="">
    </el-tab-pane>
    <el-tab-pane label="其他案例">
        <h4>其他案例</h4>
        <p>福州华侨中学</p>
        <img src="@/assets/image010.jpg" alt="">
        <p>福州教育学院附属第一小学</p>
        <img src="@/assets/image011.jpg" alt="">
        <p>仓山区第六小学</p>
        <img src="@/assets/image012.jpg" alt="">
        <p>福州第十六中学</p>
        <img src="@/assets/image013.jpg" alt="">
        <p>福州屏东中学</p>
        <img src="@/assets/image014.jpg" alt="">
        <p>福州第十五中学</p>
        <img src="@/assets/image015.jpg" alt="">
        <p>福州教育学院附属第四小学</p>
        <img src="@/assets/image016.jpg" alt="">
        <p>福州金山小学</p>
        <img src="@/assets/image017.jpg" alt="">
    </el-tab-pane>
  </el-tabs>
</template>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
.header{
    margin-top: 100px;
    width: 100%;
    height: 150px;
}
@media screen and (max-width: 850px){
    .header{
        height: 50px;
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
p{
    text-align: left;
}
h2{
    clear: both;
    font-size: 2vw;
}


.el-tab-pane img{
    width: 100%;
    height: 100%;
}
</style>


