import { Box, Flex, Grid, Image, Text, Menu, Divider, Icon } from 'bumbag'
import React from 'react'
import { Utils } from '../../../utils/utils'
import { FaColumns, FaUser, FaHashtag, FaLock, FaThumbtack, FaComment } from 'react-icons/fa'

export interface IQuestionListProps {}

function QuestionList(props: IQuestionListProps) {
  return (
    <>
      <Grid gridTemplateColumns="1fr 3fr" gap="16px">
        <Box backgroundColor="white" borderRadius="md" height="fit-content" position="sticky" top="80px">
          <Box backgroundColor="gray200" borderRadius="8px 8px 0px 0px" padding="lg">
            <Flex alignItems="center">
              <Box>
                <Image display="block" src="/assets/ezer.jpg" width="36px" height="36px" borderRadius="full" />
              </Box>
              <Flex flexDirection="column" marginLeft="md">
                <Text fontWeight="bold" fontSize="200" lineHeight="300" color="gray600">
                  Mustafa Ezer
                </Text>
                <Text fontSize="100" lineHeight="200" color="gray500">
                  @ezer
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box padding="lg">
            <Menu>
              <Menu.Group title="Me">
                <Menu.Item>Asked by me</Menu.Item>
                <Menu.Item>Answered by me</Menu.Item>
                <Menu.Item>Followed questions</Menu.Item>
              </Menu.Group>
              <Menu.Group title="Channels">
                <Menu.Item iconBefore={Utils.getReactIconMetadata(FaHashtag({}))}>general</Menu.Item>
                <Menu.Item iconBefore={Utils.getReactIconMetadata(FaLock({}))}>product-management</Menu.Item>
                <Menu.Item iconBefore={Utils.getReactIconMetadata(FaLock({}))}>turkcell</Menu.Item>
                <Menu.Item iconBefore={Utils.getReactIconMetadata(FaHashtag({}))}>design</Menu.Item>
              </Menu.Group>
              <Menu.Group title="Pinned Tags">
                <Menu.Item iconBefore={Utils.getReactIconMetadata(FaThumbtack({}))}>react</Menu.Item>
                <Menu.Item iconBefore={Utils.getReactIconMetadata(FaThumbtack({}))}>aws</Menu.Item>
              </Menu.Group>
            </Menu>
          </Box>
        </Box>
        <Box>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((index: number) => {
            return (
              <Box backgroundColor="white" borderRadius="md" marginBottom="md" key={index} padding="2xl">
                <Grid gridTemplateColumns="1fr 11fr">
                  <Box>vote</Box>
                  <Flex flexDirection="column">
                    <Text fontSize="200" lineHeight="300" fontWeight="Bold" color="gray700">
                      How to display an array/list of float into an array of ProgressBar in a ListView?
                    </Text>
                    <Text fontSize="200" lineHeight="300" color="gray500" marginTop="md">
                      In a WPF context, I'm trying to display an array of float into an array of ProgressBar (value \in
                      [0-100]), while respecting the MVVM pattern. On the VM side I have this property that will trigger
                      ...
                    </Text>
                    <Flex justifyContent="space-between" marginTop="lg">
                      <Flex alignItems="center">
                        <Flex backgroundColor="gray100" alignItems="center" borderRadius="sm">
                          <Box backgroundColor="gray300" borderRadius="4px 0px 0px 4px" paddingX="xs" paddingY="sm">
                            <Icon
                              display="block"
                              icon={Utils.getReactIconMetadata(FaComment({}))}
                              fontSize="8px"
                              color="gray500"
                            />
                          </Box>
                          <Text marginX="sm" fontSize="100" lineHeight="100" color="gray700" fontWeight="Bold">
                            3
                          </Text>
                        </Flex>
                        <Text marginLeft="sm" fontSize="100" lineHeight="100" color="gray500">
                          September 6, 17:16
                        </Text>
                      </Flex>
                      <Flex>
                        <Box>visual-studio</Box>
                        <Box>compilation</Box>
                        <Box>building</Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Grid>
              </Box>
            )
          })}
        </Box>
      </Grid>
    </>
  )
}

export default QuestionList
