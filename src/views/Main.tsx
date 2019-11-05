import * as React from 'react'

import One from 'views/one/One'
import Me from 'views/me'
import All from 'views/all'

interface IndexProps {
  page: string
}

const Index: React.FC<IndexProps> = ({ page }) => {
  const renderTab = (page: string) => {
    switch (page) {
      case 'ONE':
        return <One />
      case 'ALL':
        return <All />
      case 'ME':
        return <Me />
    }
  }

  return <div>{renderTab(page)}</div>
}

export default Index
