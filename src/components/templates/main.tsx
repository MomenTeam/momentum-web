import { Button, PageContent, PageWithHeader, Text, TopNav, Flex, Image } from 'bumbag'
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
                <Flex>
                  <Image src="/assets/logo.png" display="block" maxWidth="24px" />
                  <Text marginLeft="lg">Derin Yoksulluk Ağı</Text>
                </Flex>
              </TopNav.Item>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
              <TopNav.Item>
                <Button
                  palette="info"
                  variant="outlined"
                  size="small"
                  onClick={() => history.push(urls.Homepage)}
                >
                  Anasayfaya git
                </Button>
              </TopNav.Item>
              <TopNav.Item>
                <Button palette="info" size="small" onClick={() => history.push(urls.Admin)}>
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
