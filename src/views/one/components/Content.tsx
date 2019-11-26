import * as React from 'react'
import { match } from 'react-router'
import * as H from 'history'

import { Icon } from 'antd-mobile'

import NavBar from 'components/navBar'

import useContent from 'hooks/useContent'

import '../style/index.scss'

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
  const { hp_title, hp_content, author } = useContent(id)

  return (
    <div className="content">
      <NavBar
        leftComponent={<Icon type="left" />}
        onLeftClick={() => history.push('/main/one')}
        rightComponent={<Icon key="1" type="ellipsis" />}
        centerComponent={<span className="content-navbar-center">{hp_title}</span>}
      ></NavBar>

      <div className="content-container">
        <p className="content-container-title">{hp_title}</p>
        {author && <p className="content-container-author">文 / {author[0].user_name}</p>}
        <span dangerouslySetInnerHTML={{ __html: hp_content }}></span>
      </div>
    </div>
  )
}

export default Content
