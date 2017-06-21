import login from '../pages/login/index.vue'
import index from '../pages/index/index.vue'
import pageIndex from '../pages/inner/pageIndex/index.vue'
import carManager from '../pages/inner/carManager/index.vue'
import consumeData from '../pages/inner/consumeData/index.vue'
import allDaysData from '../pages/inner/alldaysData/index.vue'
import hotMap from '../pages/inner/hotMap/index.vue'
import abnormalData from '../pages/inner/abnormalData/index.vue'
import partnerManager from '../pages/inner/partnerManager/index.vue'
import earningsDetail from '../pages/inner/earningsDetail/index.vue'
import settlementRecord from '../pages/inner/settlementRecord/index.vue'
import accountManager from '../pages/inner/accountManager/index.vue'
import memberCenter from '../pages/inner/memberCenter/index.vue'
import queryCharts from '../pages/inner/queryCharts/index.vue'
import queryLists from '../pages/inner/queryLists/index.vue'
import carUseDetail from '../pages/inner/carUseDetail/index.vue'
export default [
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
        path: '/index/memberCenter',
        name: '个人中心',
        component: memberCenter
      }
    ]
  }
]
