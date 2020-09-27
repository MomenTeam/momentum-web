import { Box, Button, Card, Flex, Grid, Image, Modal, Text } from 'bumbag'
import React, { useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import useFetch from 'use-http'
import urls from '../../../routers/urls'
import { Utils } from '../../../utils/utils'

export interface INeedyDetail {}

function NeedyDetail(props: INeedyDetail) {
  const history = useHistory()
  const [visible, setVisible] = React.useState(false)
  const [isPaying, setIsPaying] = React.useState(false)

  const { get, response } = useFetch('http://18.158.138.59/v1')
  const location = useLocation()
  const data = {
    data: {
      id: '312da393-31a8-4108-93d3-2c32ba5e127d',
      firstName: 'string',
      lastName: 'string',
      phoneNumber: 'string',
      summary: 'string',
      priority: 0,
      address: {
        firstName: 'string',
        lastName: 'string',
        firstLine: 'string',
        secondLine: 'string',
        phoneNumber: 'string',
        postalCode: 'string',
        district: 'string',
        city: 'string',
      },
      needyCategories: [0, 1],
      needs: [
        {
          id: 'a3bebc1c-ce06-43b8-aea9-f63b5b32ee7b',
          name: 'Gida',
          description: 'Deneme',
          lineItems: [
            {
              description: 'string',
              amount: 0,
              good: {
                name: 'string',
                price: 0,
                photoLink: 'string',
                isAvailable: true,
                goodCategory: 0,
              },
            },
          ],
          isFulfilled: false,
          priority: 1,
          fulfilledBy: '',
          fulfilledAt: '0001-01-01T00:00:00Z',
          isCancelled: false,
          cancelledAt: '0001-01-01T00:00:00Z',
          cancelledBy: '',
          createdAt: '2020-09-27T09:01:03.737Z',
        },
      ],
      createdBy: '',
      createdAt: '2020-09-27T08:00:38.822Z',
    },
    message: 'Get needy detail',
    status: 200,
  }

  useEffect(() => {
    get(`/needies/getNeedyDetail/${location.pathname.split('/')[2]}`)
  }, [])

  return (
    <>
      {!isPaying ? (
        <>
          <Button
            palette="info"
            variant="outlined"
            size="small"
            onClick={() => history.push(urls.Homepage)}
            marginBottom="lg"
            iconBefore={Utils.getReactIconMetadata(FaChevronLeft({}))}
          >
            Haneleri görüntülemeye dön
          </Button>
          {response.data && (
            <Grid gridTemplateColumns="1fr 2fr" gap="16px">
              <Box backgroundColor="white" borderRadius="md" elevation="100" height="fit-content">
                <Grid
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
                      {response.data.data.firstName} {response.data.data.lastName}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="200"
                    lineHeight="300"
                    fontWeight="Medium"
                    color="gray700"
                    marginTop="lg"
                  >
                    {response.data.data.firstName} {response.data.data.lastName}
                  </Text>
                  <Text
                    fontSize="200"
                    lineHeight="300"
                    fontWeight="Medium"
                    color="gray400"
                    marginTop="xs"
                  >
                    {response.data.data.address.district} - {response.data.data.address.city},{' '}
                    {response.data.data.address.postalCode}
                  </Text>
                  <Flex marginTop="xs" marginBottom="md">
                    {response.data.data.needyCategories.map((category: any, i: number) => {
                      return (
                        <Box
                          key={i}
                          padding="xs"
                          backgroundColor="gray100"
                          borderRadius="md"
                          marginRight="xs"
                        >
                          <Text fontSize="100" color="gray500" fontWeight="Medium" marginRight="xs">
                            {category === 0 ? 'Çocuklu aile' : '+65 Yaş'}
                          </Text>
                        </Box>
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
                    {response.data.data.summary}
                  </Text>
                </Grid>
              </Box>
              <Grid gridTemplateColumns="1fr" gap="16px">
                {response.data.data.needs &&
                  response.data.data.needs.map((need: any, i: number) => {
                    return (
                      <Box
                        backgroundColor="white"
                        borderRadius="md"
                        marginBottom="md"
                        key={i}
                        height="fit-content"
                      >
                        <Grid gridTemplateColumns="8fr 2fr 2fr" padding="2xl" gap="16px">
                          <Flex flexDirection="column">
                            <Text
                              fontSize="200"
                              lineHeight="300"
                              fontWeight="Medium"
                              color="gray700"
                            >
                              {need.name}
                            </Text>
                            <Text
                              fontSize="200"
                              lineHeight="300"
                              fontWeight="Medium"
                              color="gray400"
                              marginTop="xs"
                            >
                              {need.description}
                            </Text>

                            <Button
                              height="fit-content"
                              size="small"
                              variant="outlined"
                              palette="info"
                              marginTop="lg"
                              width="fit-content"
                              onClick={() => {
                                setVisible(true)
                              }}
                            >
                              İhtiyaç listesini görüntüle
                            </Button>
                          </Flex>
                          <Flex justifyContent="center" alignItems="center">
                            <Box
                              backgroundColor="gray100"
                              height="fit-content"
                              width="fit-content"
                              borderRadius="md"
                            >
                              <Text
                                fontSize="150"
                                lineHeight="200"
                                fontWeight="Medium"
                                marginTop="xs"
                                color="gray500"
                                textAlign="center"
                                padding="xs"
                              >
                                350 ₺ değerinde
                              </Text>
                            </Box>
                          </Flex>
                          <Flex justifyContent="center" alignItems="center">
                            <Button
                              height="fit-content"
                              size="small"
                              variant="primary"
                              palette="info"
                              onClick={() => setIsPaying(true)}
                            >
                              Destek ol
                            </Button>
                          </Flex>
                        </Grid>
                      </Box>
                    )
                  })}
              </Grid>
              <Modal visible={visible} padding="2xl" width="520px">
                <Card>
                  <Flex flexDirection="column">
                    {[
                      {
                        name: 'SEK Sut',
                        price: 3.75,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11012010/11012010-a18da1.jpg',
                        isAvailable: true,
                        category: 'Sut',
                        from: 'MIGROS',
                      },
                      {
                        name: 'Tukas Domates Salcasi',
                        price: 8.95,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09010276/tukas-domates-salcasi-830-gr-0df078.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Migros Nohut',
                        price: 6.5,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01049977/01049977-16269d.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Eriş Un',
                        price: 5.97,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05016854/05016854-14bd04.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Torku Toz Seker',
                        price: 18.75,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03312735/torku-toz-seker-3-kg-3230a0.jpg',
                        isAvailable: true,
                        from: 'MIGROS',
                      },
                      {
                        name: 'Zertum Sele Siyah Zeytin',
                        price: 29.9,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16011303/16011303-4988b4.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Caykur Filiz Cay',
                        price: 21.3,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03111307/03111307-4ce14c.jpg',
                        isAvailable: true,
                        from: 'MIGROS',
                      },
                    ].map((item: any, i: number) => (
                      <Grid
                        backgroundColor="gray100"
                        elevation="100"
                        borderRadius="md"
                        key={i}
                        justifyContent="center"
                        alignItems="center"
                        gridTemplateColumns="1fr 3fr 1fr 1fr"
                        marginBottom="md"
                        paddingY="sm"
                      >
                        <Box marginX="md" elevation="400">
                          <Image
                            src={item.photoUrl}
                            maxWidth="44px"
                            borderRadius="md"
                            display="block"
                          />
                        </Box>
                        <Text>{item.name}</Text>
                        <Text>{item.price} ₺</Text>
                        <Box marginX="md" elevation="400">
                          <Image
                            src={`/assets/${item.from}.png`}
                            maxWidth="32px"
                            borderRadius="md"
                            display="block"
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Flex>
                  <Button
                    onClick={() => {
                      setVisible(false)
                    }}
                  >
                    Kapat
                  </Button>
                </Card>
              </Modal>
            </Grid>
          )}
        </>
      ) : (
        <>
          <Button
            palette="info"
            variant="outlined"
            size="small"
            onClick={() => setIsPaying(false)}
            marginBottom="lg"
            iconBefore={Utils.getReactIconMetadata(FaChevronLeft({}))}
          >
            Haneyi görüntüle
          </Button>
          <Grid gridTemplateColumns="1fr 2fr" gap="16px">
            <Grid gridTemplateColumns="1fr" gap="16px">
              <Box backgroundColor="white" borderRadius="md" marginBottom="md">
                <Grid gridTemplateColumns="1fr" padding="2xl" gap="16px">
                  <Flex flexDirection="column">
                    <Text fontSize="200" lineHeight="300" fontWeight="Medium" color="gray700">
                      Gıda Paketi
                    </Text>
                    <Text
                      fontSize="200"
                      lineHeight="300"
                      fontWeight="Medium"
                      color="gray400"
                      marginTop="xs"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste, eveniet
                      quaerat ipsa doloribus nulla perferendis. Cum unde eaque incidunt corporis est
                      eum esse temporibus mollitia. Consequuntur quae perspiciatis molestias.
                    </Text>
                  </Flex>
                  <Flex flexDirection="column">
                    {[
                      {
                        name: 'SEK Sut',
                        price: 3.75,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11012010/11012010-a18da1.jpg',
                        isAvailable: true,
                        category: 'Sut',
                        from: 'MIGROS',
                      },
                      {
                        name: 'Tukas Domates Salcasi',
                        price: 8.95,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09010276/tukas-domates-salcasi-830-gr-0df078.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Migros Nohut',
                        price: 6.5,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01049977/01049977-16269d.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Eriş Un',
                        price: 5.97,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05016854/05016854-14bd04.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Torku Toz Seker',
                        price: 18.75,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03312735/torku-toz-seker-3-kg-3230a0.jpg',
                        isAvailable: true,
                        from: 'MIGROS',
                      },
                      {
                        name: 'Zertum Sele Siyah Zeytin',
                        price: 29.9,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16011303/16011303-4988b4.jpg',
                        isAvailable: true,
                        from: 'A101',
                      },
                      {
                        name: 'Caykur Filiz Cay',
                        price: 21.3,
                        photoUrl:
                          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03111307/03111307-4ce14c.jpg',
                        isAvailable: true,
                        from: 'MIGROS',
                      },
                    ].map((item: any, i: number) => (
                      <Grid
                        backgroundColor="gray100"
                        elevation="100"
                        borderRadius="md"
                        key={i}
                        justifyContent="center"
                        alignItems="center"
                        gridTemplateColumns="1fr 3fr 1fr 1fr"
                        marginBottom="md"
                        paddingY="sm"
                      >
                        <Box marginX="md" elevation="400">
                          <Image
                            src={item.photoUrl}
                            maxWidth="44px"
                            borderRadius="md"
                            display="block"
                          />
                        </Box>
                        <Text>{item.name}</Text>
                        <Text>{item.price} ₺</Text>
                        <Box marginX="md" elevation="400">
                          <Image
                            src={`/assets/${item.from}.png`}
                            maxWidth="32px"
                            borderRadius="md"
                            display="block"
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Flex>
                </Grid>
              </Box>
            </Grid>
            <Box backgroundColor="white" borderRadius="md" elevation="100" height="fit-content">
              <Grid gridTemplateColumns="1fr" padding="2xl">
                <Text color="info400" fontWeight="Bold">
                  Ödeme Bilgileri
                </Text>
              </Grid>
            </Box>
          </Grid>
        </>
      )}
    </>
  )
}

export default NeedyDetail
