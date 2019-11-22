import * as React from 'react'
import { match } from 'react-router'
import * as H from 'history'

import { NavBar, Icon } from 'antd-mobile'

import useContent from 'hooks/useContent'

interface IContentProps {
  match: match<{ id: string }>
  history: H.History
}

const Content: React.FC<IContentProps> = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const ret = useContent(id)

  return (
    <>
      <div style={{ position: 'fixed', width: '100%' }}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.push('/')}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          QFusion
        </NavBar>
      </div>
      <div style={{ padding: 10 }}>
        <span dangerouslySetInnerHTML={{ __html: ret.hp_content }}></span>
      </div>
    </>
  )
}

export default Content
