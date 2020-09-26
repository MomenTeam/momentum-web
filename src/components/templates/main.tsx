import { Button, Image, PageContent, PageWithHeader, TopNav, usePage } from 'bumbag'
import React, { PropsWithChildren, useState } from 'react'
import { FaPlus, FaPaperPlane } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import useGlobal from '../../state/globalStore'
import useResource from '../../state/resource'
import { Utils } from '../../utils/utils'

export function Main(props: PropsWithChildren<any>) {
  const history = useHistory()
  const [state, action] = useGlobal()
  const [userInfo, setUserInfo] = useState<any>()
  const page = usePage()
  const [stateResource, actionResource] = useResource()

  return (
    <>
      <PageWithHeader
        sticky
        header={
          <TopNav marginX="7xl">
            <TopNav.Section>
              <TopNav.Item href="https://bumbag.style" fontWeight="semibold">
                <Image src="/assets/logo.svg" height="26px" />
              </TopNav.Item>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
              <TopNav.Item marginRight="sm">
                <Button
                  palette="secondary100"
                  size="small"
                  color="secondary500"
                  iconBefore={Utils.getReactIconMetadata(FaPaperPlane({}))}
                  _hover={{
                    backgroundColor: 'secondary500',
                    color: 'white',
                  }}
                >
                  Invite someone
                </Button>
              </TopNav.Item>
              <TopNav.Item>
                <Button palette="primary" iconBefore={Utils.getReactIconMetadata(FaPlus({}))} size="small">
                  Ask question
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
