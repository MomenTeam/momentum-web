import { ParsedIcon } from 'bumbag'
import dayjs from 'dayjs'

export const Utils = {
  getCognitoAttrData: (originalRow: any, key: string) => {
    let id = -1
    if (originalRow.Attributes) {
      id = originalRow.Attributes.findIndex((row: any) => row.Name === key)
      if (id === -1) {
        return ''
      }
      return originalRow.Attributes[id].Value
    }
    id = originalRow.UserAttributes.findIndex((row: any) => row.Name === key)
    if (id === -1) {
      return ''
    }
    return originalRow.UserAttributes[id].Value
  },
  formatDate: (date: any, format: string = 'DD/MM/YYYY HH:mm') => {
    return dayjs(date).format(format)
  },
  getArrayFind: (data: any[], key: any, value: any) => {
    return data.find((i: any) => i[key] === value)
  },
  getReactIconMetadata: (icon: any): ParsedIcon => {
    return {
      viewBoxWidth: icon.props.attr.viewBox.split(' ')[2],
      viewBoxHeight: icon.props.attr.viewBox.split(' ')[3],
      paths: [icon.props.children[0].props.d],
    }
  },
}
