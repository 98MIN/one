import React from 'react'

import Index from './views'

import { TabBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import 'assets/iconfont.css'

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('ONE')

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" prerenderingSiblingsNumber={0}>
        <TabBar.Item
          title="ONE"
          key="ONE"
          icon={<span className="iconfont icon-fasong"></span>}
          selectedIcon={<span className="iconfont icon-fasong"></span>}
          selected={selectedTab === 'ONE'}
          onPress={() => {
            setSelectedTab('ONE')
          }}
        >
          <Index page="ONE" />
        </TabBar.Item>
        <TabBar.Item
          icon={<span className="iconfont icon-fenlei"></span>}
          selectedIcon={<span className="iconfont icon-fenlei"></span>}
          title="ALL"
          key="ALL"
          selected={selectedTab === 'ALL'}
          onPress={() => {
            setSelectedTab('ALL')
          }}
        >
          <Index page="ALL" />
        </TabBar.Item>
        <TabBar.Item
          icon={<span className="iconfont icon-wode"></span>}
          selectedIcon={<span className="iconfont icon-wode"></span>}
          title="ME"
          key="ME"
          selected={selectedTab === 'ME'}
          onPress={() => {
            setSelectedTab('ME')
          }}
        >
          <Index page="ME" />
        </TabBar.Item>
      </TabBar>
    </div>
  )
}

export default App
