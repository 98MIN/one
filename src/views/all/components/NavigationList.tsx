import * as React from 'react'
import moment from 'moment'
import * as H from 'history'
import { match } from 'react-router'

import { List, DatePicker } from 'antd-mobile'

import useNavigationList from 'hooks/useNavigationList'

interface INavigationList {
  history?: H.History
  match?: match<{ type: string }>
}

const NavigationList: React.FC<INavigationList> = ({
  history,
  match: {
    params: { type },
  },
}) => {
  const [date, setDate] = React.useState(moment().format('YYYY-MM'))
  const [showDatePicker, setShowDatePicker] = React.useState(false)
  const data = useNavigationList(type, date)

  if (!data.length) {
    return null
  }

  const handleDetail = (uuid: string) => {
    history.push('/')
  }

  const handleTimeChange = (date) => {
    setDate(moment(date).format('YYYY-MM'))
    setShowDatePicker(false)
  }

  const handleDatePickerShow = () => {
    setShowDatePicker(true)
  }

  return (
    <>
      <div style={{ padding: '10px 0', color: '#ccc' }} onClick={handleDatePickerShow}>
        {date}
      </div>
      <DatePicker
        value={new Date('2019-10')}
        onOk={handleTimeChange}
        onDismiss={() => setShowDatePicker(false)}
        mode="month"
        visible={showDatePicker}
      />
      <List>
        {data.map(({ author_list, uuid, question_title }) => (
          <React.Fragment key={uuid}>
            <List.Item
              thumb={author_list[0].web_url}
              onClick={() => handleDetail(uuid)}
              style={{ padding: 10, borderBottom: '1px solid #ccc' }}
            >
              {question_title}
            </List.Item>
          </React.Fragment>
        ))}
      </List>
    </>
  )
}

export default NavigationList
