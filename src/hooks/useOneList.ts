import * as React from 'react'


import { BASE_URL } from 'apis/apis'

const useOnelist = () => {
  const [data, setData] = React.useState<string[]>([])

  React.useEffect(() => {
    console.log(BASE_URL)
  })

  return data
}

export default useOnelist
