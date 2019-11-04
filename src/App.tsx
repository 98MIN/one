import React from 'react'

import Index from './views'

import { TabBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import 'assets/iconfont.css'

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('ONE')

  const items = [
    { title: 'ONE', icon: 'icon-fasong' },
    { title: 'ALL', icon: 'icon-fenlei' },
    { title: 'ME', icon: 'icon-wode' },
  ]

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" prerenderingSiblingsNumber={0}>
        {items.map((v) => {
          const { title, icon } = v

          return (
            <TabBar.Item
              title={title}
              key={title}
              icon={<span className={`iconfont ${icon}`}></span>}
              selectedIcon={<span className={`iconfont ${icon}`}></span>}
              selected={selectedTab === title}
              onPress={() => {
                setSelectedTab(title)
              }}
            >
              <Index page={title} />
            </TabBar.Item>
          )
        })}
      </TabBar>
    </div>
  )
}

export default App
