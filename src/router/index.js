import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ProductDetil from '@/components/pages/productdetil'
import Advertise from '@/components/pages/advertise'
import NewsDetil from '@/components/pages/newsdetil'
import Connection from '@/components/pages/connection'
import News from '@/components/pages/news'
import Profile from '@/components/pages/profile'
import Honor from '@/components/pages/honor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path:'/productdetil',
      name:'产品和方案',
      component: ProductDetil,

    },
    {
      path:'/advertise',
      name:'关于我们',
      component: Advertise
    },
    {
      path:'/newsdetil',
      name:'新闻中心',
      component:NewsDetil
    },
    {
      path:'/connection',
      name:'联系我们',
      component:Connection
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/honor',
      component:Honor
    }
  ]
})
