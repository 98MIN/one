import * as React from 'react'

interface IndexProps {
  page: string
}

const Index: React.FC<IndexProps> = ({ page }) => {
  return <div>{page}</div>
}

export default Index
