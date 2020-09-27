import { Box, Button, Flex, Grid, Image, Text } from 'bumbag'
import { FieldStack } from 'bumbag/ts/FieldStack/styles'
import React, { useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useHistory, useLocation } from 'react-router-dom'
import useFetch from 'use-http'
import urls from '../../../routers/urls'
import { Utils } from '../../../utils/utils'
import { Form, FormattedInput, Input } from '../../molecules/Forms'

export interface INeedyDetail {}

export const Migros = [
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
]

function NeedyDetail(props: INeedyDetail) {
  const history = useHistory()
  const [visible, setVisible] = React.useState(false)
  const [isPaying, setIsPaying] = React.useState(false)
  const [packageIndex, setPackageIndex] = React.useState(0)

  const { get, response, post } = useFetch('http://18.158.138.59/v1')
  const location = useLocation()

  const addTodo = async (needyId: string, values: any) => {
    await post(`/payment/${needyId}`, values)
  }

  useEffect(() => {
    get(`/needies/getNeedyDetail/${location.pathname.split('/')[2]}`)
  }, [])

  useEffect(() => {
    if (response.ok) history.push(urls.Homepage)
  }, [response])

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
                      {response.data.data.shortName}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="200"
                    lineHeight="300"
                    fontWeight="Medium"
                    color="gray700"
                    marginTop="lg"
                  >
                    {response.data.data.maskedName}
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
                    {response.data.data.needyCategories !== null &&
                      response.data.data.needyCategories.length > 0 &&
                      response.data.data.needyCategories.map((category: any, i: number) => {
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
                    {response.data.data.summary}
                  </Text>
                </Grid>
              </Box>
              <Grid gridTemplateColumns="1fr" gap="16px">
                {response.data.data.needs !== null &&
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
                                {/* //TODO */}
                                {/* {response.data.data.needs[i].lineItems.reduce(
                                  (acc: any, cur: any) => {
                                    if (
                                      Migros.length > acc.good.goodId &&
                                      Migros.length > cur.good.goodId
                                    ) {
                                      return (
                                        Migros[acc.good.goodId].price +
                                        Migros[cur.good.goodId].price * cur.amount
                                      )
                                    }
                                  }
                                )} */}
                                ₺
                              </Text>
                            </Box>
                          </Flex>
                          <Flex justifyContent="center" alignItems="center">
                            <Button
                              height="fit-content"
                              size="small"
                              variant="primary"
                              palette="info"
                              onClick={() => {
                                setIsPaying(true)
                                setPackageIndex(i)
                              }}
                            >
                              Destek ol
                            </Button>
                          </Flex>
                        </Grid>
                        <Flex flexDirection="column" padding="2xl">
                          {need.lineItems.map((lineItem: any) => {
                            return (
                              <>
                                {Migros.length > lineItem.good.goodId && (
                                  <Grid
                                    backgroundColor="gray100"
                                    elevation="100"
                                    borderRadius="md"
                                    key={i}
                                    justifyContent="center"
                                    alignItems="center"
                                    gridTemplateColumns="1fr 3fr 1fr 1fr 1fr"
                                    marginBottom="md"
                                    paddingY="sm"
                                  >
                                    <Box marginX="md" elevation="400">
                                      <Image
                                        src={Migros[lineItem.good.goodId].photoUrl}
                                        maxWidth="44px"
                                        borderRadius="md"
                                        display="block"
                                      />
                                    </Box>
                                    <Text>{Migros[lineItem.good.goodId].name}</Text>
                                    <Text>{Migros[lineItem.good.goodId].price} ₺</Text>
                                    <Text>x {lineItem.amount}</Text>
                                    <Box marginX="md" elevation="400">
                                      <Image
                                        src={`/assets/${Migros[lineItem.good.goodId].from}.png`}
                                        maxWidth="32px"
                                        borderRadius="md"
                                        display="block"
                                      />
                                    </Box>
                                  </Grid>
                                )}
                              </>
                            )
                          })}
                        </Flex>
                      </Box>
                    )
                  })}
              </Grid>
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
            Geri
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
                    {response.data.data.needs[packageIndex].lineItems.map((lineItem: any) => {
                      return (
                        <>
                          {Migros.length > lineItem.good.goodId && (
                            <Grid
                              backgroundColor="gray100"
                              elevation="100"
                              borderRadius="md"
                              justifyContent="center"
                              alignItems="center"
                              gridTemplateColumns="1fr 3fr 1fr 1fr 1fr"
                              marginBottom="md"
                              paddingY="sm"
                            >
                              <Box marginX="md" elevation="400">
                                <Image
                                  src={Migros[lineItem.good.goodId].photoUrl}
                                  maxWidth="24px"
                                  borderRadius="md"
                                  display="block"
                                />
                              </Box>
                              <Text>{Migros[lineItem.good.goodId].name}</Text>
                              <Text>{Migros[lineItem.good.goodId].price} ₺</Text>
                              <Text>x {lineItem.amount}</Text>
                              <Box marginX="md" elevation="400">
                                <Image
                                  src={`/assets/${Migros[lineItem.good.goodId].from}.png`}
                                  maxWidth="24px"
                                  borderRadius="md"
                                  display="block"
                                />
                              </Box>
                            </Grid>
                          )}
                        </>
                      )
                    })}
                  </Flex>
                </Grid>
              </Box>
            </Grid>
            <Box backgroundColor="white" borderRadius="md" elevation="100" height="fit-content">
              <Grid gridTemplateColumns="1fr" padding="2xl">
                <Text color="info400" fontWeight="Bold">
                  Ödeme Bilgileri
                </Text>
                <Form
                  initialValues={{ cardNo: '' }}
                  onSubmit={(values: any) => {
                    addTodo(response.data.data.needs[packageIndex].id, values)
                  }}
                >
                  <Grid gridTemplateColumns="1fr 1fr" marginTop="xl" gap="16px">
                    <Input name="fullName" fieldWrapper={{ label: 'Ad soyad' }} />
                    <Input name="email" fieldWrapper={{ label: 'E-posta adresi' }} />
                  </Grid>
                  <Grid gridTemplateColumns="1fr 1fr" marginTop="xl" gap="16px">
                    <FormattedInput
                      name="creditCardNumber"
                      size="small"
                      format="####-####-####-####"
                      fieldWrapper={{ label: 'Kart numarası' }}
                      allowEmptyFormatting
                      mask=" "
                    />
                    <FormattedInput
                      size="small"
                      name="expireDate"
                      format="##/##"
                      mask=" "
                      fieldWrapper={{ label: 'Son kullanma tarihi' }}
                      allowEmptyFormatting
                    />
                  </Grid>
                  <Grid gridTemplateColumns="1fr 1fr" marginTop="xl" gap="16px">
                    <FormattedInput
                      name="cvv"
                      size="small"
                      format="###"
                      mask="*"
                      fieldWrapper={{ label: 'CVC' }}
                      allowEmptyFormatting
                    />
                  </Grid>
                  <Flex float="right" marginTop="lg">
                    <Button
                      size="small"
                      palette="info"
                      variant="primary"
                      height="fit-content"
                      width="fit-content"
                      type="submit"
                    >
                      Ödemeyi gerçekleştir
                    </Button>
                  </Flex>
                </Form>
              </Grid>
            </Box>
          </Grid>
        </>
      )}
    </>
  )
}

export default NeedyDetail
