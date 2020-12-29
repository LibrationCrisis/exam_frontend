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
const SelectExamToPart = () => import('@/components/teacher/selectExamToPart')
const ScorePart = () => import('@/components/charts/scorePart')
const AllStudentsGrade = () => import('@/components/teacher/allStudentsGrade')
const ExamDescription = () => import('@/components/teacher/examDescription')
const SelectExam = () => import('@/components/teacher/selectExam')
const AddExam = () => import('@/components/teacher/addExam')
const AnswerDescription = () => import('@/components/teacher/answerDescription')
const AddAnswer = () => import('@/components/teacher/addAnswer')
const AddAnswerChildren = () => import('@/components/teacher/addAnswerChildren')
const MultiQuestion = () => import('@/components/teacher/multiQuestion')
const FillQuestion = () => import('@/components/teacher/fillQuestion')
const JudgeQuestion = () => import('@/components/teacher/judgeQuestion')

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
    },
    {
        path: '/student',
        component: StudentIndex,
        children: [
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
    },
    {
        path: '/answer',
        component: Answer
    },
    {
        path: '/teacher',
        component: TeacherIndex,
        children: [
            {
                path: '/grade',
                component: Grade
            },
            {
                path: '/selectExamToPart', //学生分数段
                component: SelectExamToPart
            },
            {
                path: '/scorePart',
                component: ScorePart
            },
            {
                path: '/allStudentsGrade', //所有学生成绩统计
                component: AllStudentsGrade
            },
            {
                path: '/examDescription', //考试管理功能描述
                component: ExamDescription
            },
            {
                path: '/selectExam', //查询所有考试
                component: SelectExam
            },
            {
                path: '/addExam', //添加考试
                component: AddExam
            },
            {
                path: '/answerDescription', //题库管理功能介绍
                component: AnswerDescription
            },
            {
                path: '/multiQuestion', //查询选择题
                component: MultiQuestion
            },
            {
                path: '/fillQuestion',
                component: FillQuestion
            },
            {
                path: '/judgeQuestion',
                component: JudgeQuestion
            },
            {
                path: '/addAnswer', //增加题库主界面
                component: AddAnswer
            },
            {
                path: '/addAnswerChildren', //点击试卷跳转到添加题库页面
                component: AddAnswerChildren
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 解决路由重复点击
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

// 导出
export default router
