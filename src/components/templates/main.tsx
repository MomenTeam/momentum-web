import { Button, PageContent, PageWithHeader, Text, TopNav } from 'bumbag'
import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import urls from '../../routers/urls'
import useGlobal from '../../state/globalStore'
import { Utils } from '../../utils/utils'
import { FaPlus } from 'react-icons/fa'

export function Main(props: PropsWithChildren<any>) {
  const history = useHistory()
  const [globalState, globalAction] = useGlobal()

  return (
    <>
      <PageWithHeader
        sticky
        header={
          <TopNav marginX="7xl">
            <TopNav.Section>
              <TopNav.Item onClick={() => history.push(urls.Homepage)} fontWeight="semibold">
                <Text>Derin Yoksulluk Ağı</Text>
              </TopNav.Item>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
              <TopNav.Item>
                <Button palette="primary" size="small" onClick={() => history.push(urls.Admin)}>
                  Kontrol paneline git
                </Button>
              </TopNav.Item>
            </TopNav.Section>
          </TopNav>
        }
      >
        <PageContent isFluid paddingX="9xl" paddingTop="xl">
          {props.children}
        </PageContent>
      </PageWithHeader>
    </>
  )
}
