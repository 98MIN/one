/**
 * 类型标识符
 * @param category
 */
export default function categoryFormat(category: string): string {
  switch (category) {
    case '0':
      return '摄影'
    case '1':
      return '阅读'
    case '2':
      return ''
    case '3':
      return '问答'
    case '4':
      return '音乐'
  }
}
