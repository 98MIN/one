import React, { FC } from 'react'
import { Badge } from 'antd-mobile'

import './styles/index.scss'

interface EssayProps {
  type: string
  title: string
  author: string
  picture: string
  forward: string
  date: string
  like: number
}

const Essay: FC<EssayProps> = ({ type, title, author, picture, forward, date, like }) => {
  return (
    <div className="essay">
      <div className="essay_type">-{type}-</div>
      <div className="essay_title">{title}</div>
      <div className="essay_author">{author}</div>
      <div className="essay_img">
        <img src={picture} style={{ height: 200, width: '100%' }}/>
      </div>
      <div className="essay_forward">{forward}</div>
      <div className="essay_footer">
        <div className="essay_footer_left">
          <span>{date}</span>
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
