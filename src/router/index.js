import Vue from "vue"
import VueRouter from 'vue-router'

const Login = () => import('@/components/common/Login')
const StudentIndex = () => import('@/components/student/index')
const myExam = () => import('@/components/student/myExam')

// 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    }, {
        path: '/student',
        component: StudentIndex,
        children:[
            {
                path: '/',
                component: myExam
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 导出
export default router
