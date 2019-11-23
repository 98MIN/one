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
  const { hp_title, hp_content } = useContent(id)

  return (
    <>   
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.push('/')}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          <span style={{color: '#545454', fontSize: 16}}>{hp_title}</span>
        </NavBar>
      
      <div style={{ padding: 10 }}>
        <p>{hp_title}</p>
        <p></p>
        <span dangerouslySetInnerHTML={{ __html: hp_content }}></span>
      </div>
    </>
  )
}

export default Content
