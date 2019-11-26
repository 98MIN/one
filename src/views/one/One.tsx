import * as React from 'react'
import { match } from 'react-router'
import * as H from 'history'

import { PullToRefresh } from 'antd-mobile'

import Find from './components/Find'
import Essay from './components/Essay'

import useOneList from 'hooks/useOneList'
import useCurrentList, { Content } from 'hooks/useCurrentList'

import categoryFormat from 'utils/categoryFormat'
import NavBar from 'components/navBar'

interface IOneProps {
  match: match
  history: H.History
}

interface IIndicator {
  activate: string
  deactivate: string
  release: string
  finish: string
}

const One: React.FC<IOneProps> = ({ match, history }) => {
  const [reload, setReload] = React.useState<number>(0)
  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const [content, setContent] = React.useState<Content[]>([])
  const [indicator, setIndicator] = React.useState<IIndicator>({
    activate: '释放立即刷新',
    deactivate: '下拉刷新',
    release: '刷新成功',
    finish: '请开始您的表演吧',
  })

  const data = useOneList(reload)
  const { content_list } = useCurrentList(reload, data[reload])

  const handleRefresh = () => {
    setRefreshing(true)

    /**
     * 图文集合数组的长度
     */
    if (reload > 9) {
      setIndicator({
        activate: '释放立即刷新',
        deactivate: '下拉刷新',
        release: '到底了',
        finish: '表演结束',
      })
    } else {
      setReload(reload + 1)
    }

    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  const handlePathChange = (uuid: string) => {
    history.push(`${match.url}/content/${uuid}`)
  }

  React.useEffect(() => {
    setContent((content) => content.concat(content_list))
  }, [JSON.stringify(content_list)])

  return (
    <div>
      <NavBar centerComponent={<span>ONE · 一个</span>} />
      <PullToRefresh
        getScrollContainer={() => ''}
        damping={100}
        style={{
          height: document.documentElement.clientHeight,
          overflow: 'auto',
        }}
        indicator={indicator}
        direction="up"
        refreshing={refreshing}
        onRefresh={handleRefresh}
        distanceToRefresh={window.devicePixelRatio * 25}
      >
        {content.map((v: Content, index: number) => {
          const {
            img_url,
            like_count,
            title,
            forward,
            words_info,
            item_id,
            pic_info,
            content_type,
            post_date,
            author,
          } = v

          return (
            <div key={index}>
              {content_type === '0' ? (
                <Find
                  picture={img_url}
                  like_count={like_count}
                  type={title}
                  forward={forward}
                  word_info={words_info}
                  id={item_id}
                  author={pic_info}
                />
              ) : (
                <Essay
                  picture={img_url}
                  like={like_count}
                  type={categoryFormat(content_type)}
                  title={title}
                  date={post_date}
                  forward={forward}
                  onClick={() => handlePathChange(item_id)}
                  author={author}
                />
              )}
            </div>
          )
        })}
      </PullToRefresh>
    </div>
  )
}
export default One
