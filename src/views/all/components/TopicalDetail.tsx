import * as React from 'react'
import * as H from 'history'
import { match } from 'react-router'

import { Icon, Toast } from 'antd-mobile'
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

  React.useEffect(() => {
    if (title) {
      Toast.fail(`Load Failed !!!`, 5, () => history.push('/main/all'))
    }
  }, [title])

  return (
    <>
      <NavBar
        leftComponent={<Icon type="left" />}
        onLeftClick={() => history.push('/main/all')}
        rightComponent={<Icon key="1" type="ellipsis" />}
        centerComponent={<span>{title}</span>}
      />
      {/* 数据问题，页面暂不开放 */}
      {/* <div dangerouslySetInnerHTML={{ __html: html_content }}></div> */}
    </>
  )
}
export default TopicalDetail
