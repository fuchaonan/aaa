import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FirstPage from './views/index.vue'
import Video from './views/video.vue'
import Subscribe from './views/subscribe.vue'
import User from './views/user.vue'
import search from './views/search.vue'
import news from './views/news.vue'
import typenews from './views/typenews.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{"name":'home'},
    },
    {
      path: '/search',
      component:search
    },
    {
        path:'/home',
        name:'home',//路由的名字，命名路由
        component:Home,
        redirect:{"name":'index'},
        children:[{//底部导航栏对应的页面是一个组件，是第二级路由path:'/home/firstPage',
            path:'/home/firstPage',
            name:'index',
            redirect:{"name":"news"},
            component:FirstPage,
        children:[{
            path:'/home/firstPage/news',
            name:'news',
            component:news,
            meta:{
                keepAlive:true,
            }
         },
         {
             path:'/home/firstPage/:type',
             name:'typenews',
             component:typenews
         }]
          },
          {
                path:'/home/video',
                name:'video',
                component:Video
          },
          {
                path:'/home/sub',
                name:'sub',
                component:Subscribe
          },
          {
                path:'/home/user',
                name:'user',
                component:User
          }
        ]
      }
  ]
})
