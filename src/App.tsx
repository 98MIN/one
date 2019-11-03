import React from 'react'

import Index from './views'

import { TabBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('ONE')

  return (
    <div style={{ background: 'white' }}>
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" prerenderingSiblingsNumber={0}>
        <TabBar.Item
          title="ONE"
          key="ONE"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={selectedTab === 'ONE'}
          onPress={() => {
            setSelectedTab('ONE')
          }}
          data-seed="logId"
        >
          <Index page="ONE" />
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
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
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
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
