import * as React from 'react'

import './styles/index.scss'

const Find: React.FC<any> = ({ picture, type, author, forward, word_info, id, like_count }) => {
  return (
    <div className="find_card">
      <img src={picture} style={{ height: 200, width: '100%' }} />
      <div className="find_card_author">
        <div>{type}</div><div>{author}</div>
      </div>
    </div>
  )
}
export default Find
