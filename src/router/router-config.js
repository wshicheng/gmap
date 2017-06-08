import activePublic from '../pages/activePublic/index.vue'
import activeManage from '../pages/activeManage/index.vue'
import step1 from '../pages/activePublic/step1.vue'
export default [
  {
    path: '/activePublic',
    component: activePublic,
    children: [
      {
        path: '',
        component: step1
      }
    ]
  },
  {
    path: '/activeManage',
    component: activeManage
  }
]
