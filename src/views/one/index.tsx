import * as React from 'react'

import Find from 'components/find'

import useOneList from 'hooks/useOneList'
import useCurrentList from 'hooks/useCurrentList'

const One = () => {
  const [reload, setReload] = React.useState<number>(0)
  const data = useOneList(reload)
  const { content_list } = useCurrentList(reload, data[0])

  return (
    <>
      {content_list.map((v, index) => {
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
    </>
  )
}
export default One
