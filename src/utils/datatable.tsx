import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'

export const DatatableUtils = {
  formatter: {
    date: (data: string) => {
      return dayjs(data).format('DD/MM/YYYY HH:mm')
    },
    link: (urls: string, key: string = ':id', data: string, cell: any) => {
      return <Link to={urls.replace(key, data)}> {cell} </Link>
    },
  },
  sortter: {
    defaultSort: (rowA: any, rowB: any, columnId: string) => {
      const a = rowA.values[columnId]
      const b = rowB.values[columnId]

      if (a === '' || a === null) {
        if (b === '' || b === null) {
          return 0 // Both empty/null
        }
        return -1 // Sort a to an index lower than b
      }

      if (b === '' || b === null) {
        if (a === '' || a === null) {
          return 0 // Both empty/null
        }
        return 1 // Sort b to an index lower than a
      }

      if (a > b) return 1
      if (b > a) return -1
      return 0
    },
  },
}
