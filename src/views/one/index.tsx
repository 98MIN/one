import * as React from 'react'

import { PullToRefresh } from 'antd-mobile'

import Find from 'components/find'

import useOneList from 'hooks/useOneList'
import useCurrentList, { Result } from 'hooks/useCurrentList'

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
        const { img_url, like_count, title, forward, words_info, item_id, pic_info } = v

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
              <Find
                picture={img_url}
                like_count={like_count}
                type={title}
                forward={forward}
                word_info={words_info}
                id={item_id}
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
