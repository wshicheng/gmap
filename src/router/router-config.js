import login from '../pages/login/index.vue'
import index from '../pages/index/index.vue'
import pageIndex from '../pages/inner/pageIndex/index.vue'

// [ ====== partnerManager ====== ]
import carManager from '../pages/inner/carManager/index.vue'
import carUseDetail from '../pages/inner/carUseDetail/index.vue'

// [ ====== consumeData ====== ]
import consumeData from '../pages/inner/consumeData/index.vue'
import queryCharts from '../pages/inner/queryCharts/index.vue'
import queryLists from '../pages/inner/queryLists/index.vue'

import allDaysData from '../pages/inner/alldaysData/index.vue'
import hotMap from '../pages/inner/hotMap/index.vue'
import abnormalData from '../pages/inner/abnormalData/index.vue'

// [ ====== partnerManager ====== ]
import partnerManager from '../pages/inner/partnerManager/index.vue'
import addpartner from '../pages/inner/partnerManager/addpartner.vue'
import checkpartner from '../pages/inner/partnerManager/checkpartner.vue'

import earningsDetail from '../pages/inner/earningsDetail/index.vue'
import settlementRecord from '../pages/inner/settlementRecord/index.vue'

// [ ====== accountManager ====== ]
import accountManager from '../pages/inner/accountManager/index.vue'
import addaccount from '../pages/inner/accountManager/addaccount.vue'

import memberCenter from '../pages/inner/memberCenter/index.vue'

import NotFoundPage from '../pages/404/index.vue'

export default [
  { path: '*', component: NotFoundPage },
  {
    path: '/',
    name: '登录',
    component: login
  },
  {
    path: '/index',
    component: index,
    children: [
      {
        path: '/',
        name: '首页',
        component: pageIndex
      },
      {
        path: '/index/carManager',
        name: '车辆管理',
        component: carManager
      },
      {
        path: '/index/carUseDetail',
        name: '车辆明细',
        component: carUseDetail
      },
      {
        path: '/index/consumeData',
        name: '报表管理',
        component: consumeData,
        children: [
          {
            path: '/',
            name: '查看列表',
            component: queryLists
          },
          {
            path: '/index/consumeData/queryCharts',
            name: '查看统计图',
            component: queryCharts
          }
        ]
      },
      {
        path: '/index/allDaysData',
        name: '24小时数据走势',
        component: allDaysData
      },
      {
        path: '/index/hotMap',
        name: '热力图',
        component: hotMap
      },
      {
        path: '/index/abnormalData',
        name: '异常数据',
        component: abnormalData
      },
      {
        path: '/index/partnerManager',
        name: '合伙人管理',
        component: partnerManager
      },
      {
        path: '/index/addpartner',
        name: '添加合伙人',
        component: addpartner
      },
      {
        path: '/index/checkpartner',
        name: '查看合伙人信息',
        component: checkpartner
      },
      {
        path: '/index/earningsDetail',
        name: '收入明细',
        component: earningsDetail
      },
      {
        path: '/index/settlementRecord',
        name: '结算记录',
        component: settlementRecord
      },
      {
        path: '/index/accountManager',
        name: '账号管理',
        component: accountManager
      },
      {
        path: '/index/addaccount',
        name: '添加账号',
        component: addaccount
      },
      {
        path: '/index/memberCenter',
        name: '个人中心',
        component: memberCenter
      }
    ]
  }
]
