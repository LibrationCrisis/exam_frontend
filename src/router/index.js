import Vue from "vue"
import VueRouter from 'vue-router'

const Login = () => import('@/components/common/Login')
const StudentIndex = () => import('@/components/student/index')
const MyExam = () => import('@/components/student/myExam')
const ExamMsg = () => import('@/components/student/examMsg')
const StudentScore = () => import("@/components/student/answerScore")
const ScoreTable = () => import("@/components/student/scoreTable")
const Answer = () => import("@/components/student/answer")
const TeacherIndex = () => import("@/components/teacher/index")
const Grade = () => import('@/components/charts/grade')
const selectExamToPart = () => import('@/components/teacher/selectExamToPart')
const scorePart = () => import('@/components/charts/scorePart')

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
                component: MyExam
            },
            {
                path: '/examMsg',
                component: ExamMsg
            },
            {
                path: '/StudentScore',
                component: StudentScore
            },
            {
                path: '/scoreTable',
                component: ScoreTable
            }
        ]
    },{
        path: '/answer',
        component: Answer
    },{
        path: '/teacher',
        component: TeacherIndex,
        children:[
            {
                path: '/grade',
                component: Grade
            },
            {
                path: '/selectExamToPart', //学生分数段
                component: selectExamToPart
            },
            {
                path: '/scorePart',
                component: scorePart
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
