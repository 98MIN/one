import * as React from 'react'

import { PullToRefresh } from 'antd-mobile'

import Find from 'components/find/Find'
import Essay from 'components/essay/Essay'

import useOneList from 'hooks/useOneList'
import useCurrentList, { Result } from 'hooks/useCurrentList'

import categoryFormat from 'utils/categoryFormat'

const One = () => {
  const [reload, setReload] = React.useState<number>(0)
  const data = useOneList(reload)
  const { content_list } = useCurrentList(reload, data[reload])
  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const [content, setContent] = React.useState<any>([])

  const handleRefresh = () => {
    setRefreshing(true)

    /**
     * 图文集合数组的长度
     */
    if (reload < 9) {
      setReload(reload + 1)
    }

    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  React.useEffect(() => {
    setContent((content) => content.concat(content_list))
  }, [JSON.stringify(content_list)])

  return (
    //@ts-ignore
    <PullToRefresh
      damping={60}
      style={{
        height: document.documentElement.clientHeight,
        overflow: 'auto',
      }}
      indicator={{ deactivate: '上拉可以刷新' }}
      direction="up"
      refreshing={refreshing}
      onRefresh={handleRefresh}
    >
      {content.map((v: any, index) => {
        const { img_url, like_count, title, forward, words_info, item_id, pic_info, content_type } = v

        return (
          <div key={index}>
            {index === 0 ? (
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
                date={'20'}
                forward={forward}
                // word_info={words_info}
                // id={item_id}
                author={pic_info}
              />
            )}
          </div>
        )
      })}
    </PullToRefresh>
  )
}
export default One
