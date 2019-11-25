import * as React from 'react'

import './style/index.scss'

interface INavBar {
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
  centerComponent?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onLeftClick?: () => void
  onRightClick?: () => void
  onCenterClick?: () => void
}

const NavBar: React.FC<INavBar> = ({
  leftComponent,
  rightComponent,
  centerComponent,
  className,
  style,
  onLeftClick,
  onCenterClick,
  onRightClick,
}) => {
  return (
    <>
      <div className={`navbar ${className}`} style={style}>
        <div className="navbar-left" onClick={onLeftClick}>
          {leftComponent}
        </div>
        <div className="navbar-center" onClick={onCenterClick}>
          {centerComponent}
        </div>
        <div className="navbar-right" onClick={onRightClick}>
          {rightComponent}
        </div>
      </div>
      <div className="placehold"></div>
    </>
  )
}

export default NavBar
