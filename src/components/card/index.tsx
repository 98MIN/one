import * as React from 'react'

import _ from 'classnames'

import './style/index.scss'

interface ICard {
  onClick?: () => void
  className?: string
  headStyle?: React.CSSProperties
  bodyStyle?: React.CSSProperties
  bordered?: boolean
  cover?: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
  style?: React.CSSProperties
}

const Card: React.FC<ICard> = ({
  className,
  headStyle,
  bodyStyle,
  bordered,
  cover,
  title,
  content,
  style,
  ...rest
}) => {
  const _className = _('card', className, { 'card-border': bordered })
  const cover_dom = cover ? <div className="card-cover">{cover}</div> : null

  return (
    <div className={_className} style={style} {...rest}>
      {cover_dom}
      {title && (
        <div className="card-warp" style={headStyle}>
          <span>{title}</span>
        </div>
      )}
      {content && (
        <div className="card-body" style={bodyStyle}>
          {content}
        </div>
      )}
    </div>
  )
}

Card.defaultProps = {
  bordered: true,
}

export default Card
