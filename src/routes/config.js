import Main from 'views/Main'
import Content from 'views/one/components/Content'
import TopicalDetail from 'views/all/components/TopicalDetail'

const config = [
  {
    path: '/main/:page',
    exact: true,
    component: Main,
  },
  {
    path: '/main/one/content/:id',
    exact: true,
    component: Content,
  },
  {
    path: '/main/all/topical/:id',
    exact: true,
    component: TopicalDetail,
  },
]

export default config
