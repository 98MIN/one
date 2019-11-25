import React, { FC } from 'react'
import { Badge } from 'antd-mobile'

import moment from 'moment'

import '../style/index.scss'

interface EssayProps {
  onClick?: () => void
  type: string
  title: string
  author: any
  picture: string
  forward: string
  date: string
  like: number
}

const Essay: FC<EssayProps> = ({ type, title, author, picture, forward, date, like, onClick }) => {
  return (
    <div className="essay" onClick={onClick}>
      <div className="essay_type">-{type}-</div>
      <div className="essay_title">{title}</div>
      <div className="essay_author">文 / {author.user_name}</div>
      <div className="essay_img">
        <img src={picture} style={{ height: 200, width: '100%' }} />
      </div>
      <div className="essay_forward">{forward}</div>
      <div className="essay_footer">
        <div className="essay_footer_left">
          <span>{moment(date).format('YYYY-MM-DD')}</span>
        </div>
        <div className="essay_footer_right">
          <Badge text={like} style={{ background: 'rgba(0,0,0,0.3)' }}>
            <span className="iconfont icon-xihuan"></span>
          </Badge>
          <span className="iconfont icon-fenxiang"></span>
        </div>
      </div>
    </div>
  )
}

export default Essay
