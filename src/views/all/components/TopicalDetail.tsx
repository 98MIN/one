import * as React from 'react'
import * as H from 'history'
import { match } from 'react-router'

import { Icon } from 'antd-mobile'
import NavBar from 'components/navBar'

import useTopical, { ITopical } from 'hooks/useTopical'

interface ITopicalDetail {
  match?: match<{ id: string }>
  history?: H.History
}

const TopicalDetail: React.FC<ITopicalDetail> = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const { title, font_color, bg_color, html_content }: ITopical = useTopical(id)

  return (
    <>
      <NavBar
        leftComponent={<Icon type="left" />}
        onLeftClick={() => history.push('/main/all')}
        rightComponent={<Icon key="1" type="ellipsis" />}
        centerComponent={<span className="content-navbar-center">{title}</span>}
      />
      <div style={{ color: font_color, background: bg_color }} dangerouslySetInnerHTML={{ __html: html_content }}></div>
    </>
  )
}
export default TopicalDetail
