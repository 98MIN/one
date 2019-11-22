import * as React from 'react'

import useContent from 'hooks/useContent'

interface IContent {
  match?: any
}

const Content: React.FC<IContent> = ({
  match: {
    params: { id },
  },
}) => {
  const ret = useContent(id)

  return <div>134</div>
}

export default Content
