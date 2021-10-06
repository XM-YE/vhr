import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import FriendChat from './views/chat/FriendChat.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
            hidden:true
        }, {
            path: '/home',
            name: 'Home',
            component: Home,
            // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面
            hidden: true,
            // 设置该路由进入的权限，支持多个权限叠加
            meta:{
                roles:['admin','user']
            },
            children:[
                {
                    path: '/chat',
                    name: '在线聊天',
                    component: FriendChat,
                    hidden: true
                }
            ]
        }
    ]
})


