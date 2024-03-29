/**
 * 类型标识符
 * @param category
 */
export default function categoryFormat(category: string): string {
  switch (category) {
    case '0':
      return '图文'
    case '1':
      return '阅读'
    case '2':
      return '连载'
    case '3':
      return '问答'
    case '4':
      return '音乐'
    case '5':
      return '影视'
    case '8':
      return '电台'
    default:
      return '未知'
  }
}
