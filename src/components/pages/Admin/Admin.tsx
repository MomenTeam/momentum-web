import React, { useEffect } from 'react'
import useFetch from 'use-http'

export interface IAdminProps {}

function Admin(props: IAdminProps) {
  const { get, response } = useFetch('http://18.158.138.59/v1')

  useEffect(() => {
    get('/needies')
  }, [])

  return (
    <>
      {response.data &&
        response.data.data.map((needy: any, index: number) => {
          return <>response.data.data.name</>
        })}
    </>
  )
}

export default Admin
