import * as React from 'react'

import Main from 'views/Main'
import Content from 'views/one/components/Content'

const config = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/content/:id',
    exact: true,
    component: Content,
  },
]

export default config
