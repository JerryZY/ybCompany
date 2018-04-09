<template>
    <el-row :gutter="40"  >
        <el-col :span="8" :offset="2">
            <div class="slide-left" @mouseover="clearInv" @mouseout="runInv">
                <div class="slide-content">
                    <h1>案例</h1>
                    <h4>{{sildes[nowIndex].title}}</h4>
                    <p>{{sildes[nowIndex].content}}</p>
                    <div class="circle-box">
                        <div class="circle"  v-for="(item,index) in sildes" :key="index" @click="goto(index)" :class="{on: index === nowIndex}"></div>
                    </div>
                </div>   
            </div>
        </el-col>
        <el-col :span="14">
            <div class="slide-right" @mouseover="clearInv" @mouseout="runInv">
            <img :src="sildes[nowIndex].src" alt="">
        </div>
        </el-col>
    </el-row>
</template>


<script>
export default {
    props: {
        sildes: {
            type: Array,
            default: []
        },
        inv:{
            type:Number,
            default:1000
        }
    },
  data () {
    return {
      nowIndex: 0,
    }
  },
    methods:{
        goto(index){
            this.nowIndex=index;
        },
        runInv(){
            this.invId=setInterval(()=>{
                if(this.nowIndex<this.sildes.length-1){
                    this.nowIndex++;
                }else{
                    this.nowIndex=0;
                }
            },this.inv)
        },
        clearInv(){
            clearInterval(this.invId)
        }
    },
    mounted(){
        this.runInv();
    }
}
</script>


<style scoped>
.el-row{
    width: 100%;
    height: 450px;
}
.el-col{
    height: 100%;
}
@media screen and (max-width: 850px){
    .el-row{
        height: 300px;
    }
}
@media screen and (max-width: 400px){
    .el-row{
        height: 150px;
    }
}
.slide-left{
    text-align: left;
    
}

.circle-box{
    width: 30%;
    position: absolute;
    bottom: 15%;
    
}
.circle{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(125, 125, 125);    
    float: left;
    margin-right:1%;  
}
.on{
    background-color: rgb(43, 194, 163);
}
.active{
    color: rgb(43, 194, 163)
}
.slide-right{
    height: 80%;
    width: 90%;
    margin: 5% 0 5% 0; 
}
.slide-right img{
    height: 100%;
    width: 100%;
    
}
h1{
    font-size: 2vw;
    padding-top:5%; 
    font-family: "黑体";
}
h4{
    font-family: "黑体";
    padding: 0;
}
p{
    font-family: "微软雅黑";
    color: gray;
}
</style>
