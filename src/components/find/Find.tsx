import * as React from 'react'

import { Badge } from 'antd-mobile'

import './styles/index.scss'

export interface FindProps {
  picture: string
  forward: string
  type: string
  author: string
  word_info: string
  like_count: number
  id?: string
}

const Find: React.FC<FindProps> = ({ picture, type, author, forward, word_info, id, like_count }) => {
  return (
    <div className="find_card">
      <img src={picture} style={{ height: 200, width: '100%' }} />
      <div className="find_card_author">
        <div>
          {type}
          <span className="find_card_author_span">|</span>
          {author}
        </div>
      </div>
      <div className="find_card_forward">{forward}</div>
      <div className="find_card_info">
        <div>{word_info}</div>
      </div>
      <div className="find_card_footer">
        <div className="find_card_footer_left">
          <span className="iconfont icon-faxian"></span>
          <span style={{ paddingLeft: 10, fontSize: 14 }}>发现</span>
        </div>
        <div className="find_card_footer_right">
          <span className="iconfont icon-dianzan"></span>
          <span className="iconfont icon-shoucang"></span>
          <span className="iconfont icon-fenxiang"></span>
          <Badge text={like_count} style={{ background: 'rgba(0,0,0,0.3)' }}>
            <span className="iconfont icon-xihuan"></span>
          </Badge>
        </div>
      </div>
    </div>
  )
}
export default Find
