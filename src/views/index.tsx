import * as React from 'react'

import useOneList from '../hooks/useOneList'

interface IndexProps {
  page: string
}

const Index: React.FC<IndexProps> = ({ page }) => {
  const a = useOneList()
  return <div>{page}</div>
}

export default Index
