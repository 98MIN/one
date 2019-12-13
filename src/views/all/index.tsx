import * as React from 'react'
import { match } from 'react-router'
import * as H from 'history'

import NavBar from 'components/navBar'

import { Icon, Card } from 'antd-mobile'

import './style/index.scss'

import useClassification, { IClassification } from 'hooks/useClassification'
import { Link } from 'react-router-dom'

interface IAll {
  history?: H.History
  match?: match
}

const All: React.FC<IAll> = ({ history, match }) => {
  const [reload, setReload] = React.useState(0)

  const list = useClassification(reload)

  const handleClick = (uuid: string) => {
    history.push(`${match.url}/topical/${uuid}`)
  }

  const items = [
    { weburl: './img.jpg', content: '连载', type: 'serialcontent' },
    { weburl: './img.jpg', content: '音乐', type: 'music' },
    { weburl: './img.jpg', content: '问答', type: 'question' },
    { weburl: './img.jpg', content: '图文', type: 'hp' },
  ]

  return (
    <div>
      <NavBar
        centerComponent={
          <div>
            ONE<span className="all_header">IS</span>ALL
          </div>
        }
        rightComponent={<Icon type="search" />}
      />
      <Card>
        <Card.Body className="all_nav_card">
          {items.map(({ type, content, weburl }, index) => {
            const _url = require(`${weburl}`)

            return (
              <Link to={`${match.url}/navigation/${type}`} key={index}>
                <Card style={{ background: `url(${_url}) center center no-repeat` }}>
                  <Card.Body className="all_nav_card_body">
                    <div className="all_nav_card_body_content">{content}</div>
                  </Card.Body>
                </Card>
              </Link>
            )
          })}
        </Card.Body>
      </Card>
      {list.map(({ id, content_id, title, cover }: IClassification) => (
        <div key={id} style={{ marginTop: 10 }}>
          <Card>
            <Card.Body onClick={() => handleClick(content_id)}>
              <img src={cover} style={{ height: 150, width: '100%' }} />
            </Card.Body>
            <Card.Footer content={<span className="all_content_card_footer">{title}</span>} />
          </Card>
        </div>
      ))}
    </div>
  )
}
export default All
