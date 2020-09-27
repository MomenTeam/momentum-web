import { Box, Button, Flex, Grid, Image, Text } from 'bumbag'
import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import useFetch from 'use-http'
import urls from '../../../routers/urls'
import { Utils } from '../../../utils/utils'

export interface IHomepageProps {}

function Homepage(props: IHomepageProps) {
  const history = useHistory()
  const { get, response } = useFetch('http://18.158.138.59/v1')

  useEffect(() => {
    get('/needies/informations')
  }, [])

  return (
    <>
      <Grid
        gridTemplateColumns="1fr 1fr"
        height="calc(100vh - 60px)"
        backgroundColor="white"
        marginBottom="2xl"
        borderRadius="md"
        padding="8xl"
        justifyItems="center"
        alignItems="center"
      >
        <Flex flexDirection="column">
          <Text fontSize="600" fontWeight="Medium">
            Biz kimiz?
          </Text>
          <Text fontSize="200" fontWeight="Regular">
            Biz Çimenev merkezi gönüllüleri Aralık 2019 tarihinde Açık Alan Derneği bünyesinde
            toplanarak kent yoksulluğu alanında onlarca yoksul mahalleye en temel hak ve ihtiyaci
            olan gıda gereksinimlerini destekçiler aracılıgğyla saglamak amacıyla kurulmuş bir
            topluluğuz. Pandemi sürecinde bu gereksinimlerin artması ile birlikte Derin Yoksulluk
            Ağı’na olan gereksinim de artmıştır. Herhangi bir bağış toplama, nakdi para akışı
            sağlanmamaktadır.
          </Text>
        </Flex>
        <Image src="/assets/hero.jpg" display="block" width="720px" />
      </Grid>
      <Text fontSize="200" fontWeight="Medium">
        Destekleyebileceğiniz Haneler
      </Text>
      <Grid
        gridTemplateColumns={{ default: '1fr 1fr 1fr', 'max-tablet': '1fr' }}
        gap="16px"
        marginTop="xl"
      >
        {response.data &&
          response.data.data.map((needy: any, index: number) => {
            return (
              <Box backgroundColor="white" borderRadius="md" marginBottom="md" key={index}>
                <Grid
                  key={needy.id}
                  gridTemplateColumns="1fr"
                  justifyItems="center"
                  alignItems="center"
                  padding="2xl"
                >
                  <Flex
                    backgroundColor="info100"
                    borderRadius="full"
                    height="44px"
                    width="44px"
                    marginTop="md"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="info400" fontWeight="Bold">
                      {needy.shortName}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="200"
                    lineHeight="300"
                    fontWeight="Medium"
                    color="gray700"
                    marginTop="lg"
                  >
                    {needy.fullName}
                  </Text>
                  <Text
                    fontSize="200"
                    lineHeight="300"
                    fontWeight="Medium"
                    color="gray400"
                    marginTop="xs"
                  >
                    {needy.address}
                  </Text>
                  <Flex marginTop="xs" marginBottom="md">
                    {needy.needyCategories.map((category: any, i: number) => {
                      return (
                        <>
                          {category !== 0 && (
                            <Box
                              key={i}
                              padding="xs"
                              backgroundColor="gray100"
                              borderRadius="md"
                              marginRight="xs"
                            >
                              <Text
                                fontSize="100"
                                color="gray500"
                                fontWeight="Medium"
                                marginRight="xs"
                              >
                                {category === 1 ? 'Çocuklu aile' : '+65 Yaş'}
                              </Text>
                            </Box>
                          )}
                        </>
                      )
                    })}
                  </Flex>
                  <Text
                    fontSize="200"
                    lineHeight="200"
                    fontWeight="Medium"
                    color="gray500"
                    textAlign="center"
                  >
                    {needy.summary}
                  </Text>
                  <Button
                    variant="ghost"
                    palette="info"
                    marginTop="2xl"
                    size="small"
                    marginBottom="lg"
                    onClick={() => history.push(urls.NeedyDetail.replace(':id', needy.id))}
                    iconAfter={Utils.getReactIconMetadata(FaArrowRight({}))}
                  >
                    Hanenin ihtiyaçlarını görüntüle
                  </Button>
                </Grid>
              </Box>
            )
          })}
      </Grid>
    </>
  )
}

export default Homepage
