import { Button, Flex, Grid, Icon, Text } from 'bumbag'
import React, { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import useFetch from 'use-http'
import { Utils } from '../../../utils/utils'

export interface IAdminProps {}

function Admin(props: IAdminProps) {
  const { get, response, loading } = useFetch('http://18.158.138.59/v1')
  const [transactions, setTransactions] = React.useState<any>(undefined)
  const [selectedTransaction, setSelectedTransaction] = React.useState<any>(undefined)
  const [updateStatusResource, setUpdateStatusResource] = React.useState<any>(undefined)

  const getTransactions = async () => {
    await get('/needs/getAllDetails')
    setTransactions(response.data.data)
  }

  const updateStatus = async (needId: any) => {
    await get(`/needs/setFulfilled/${needId}`)
    setUpdateStatusResource(response.data.data)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  const getStatus = (statusNumber: number): React.ReactNode => {
    let status = ''
    if (statusNumber === 0) {
      status = 'Oluşturuldu'
    } else if (statusNumber === 1) {
      status = 'Teslimat sürecinde'
    } else if (statusNumber === 2) {
      status = 'Tamamlandı'
    } else {
      status = 'İptal edildi'
    }
    return <Text fontWeight="Medium">{status}</Text>
  }

  return (
    <>
      {transactions &&
        transactions.map((transaction: any, i: number) => {
          return (
            <Grid
              gridTemplateColumns="1fr 3fr 3fr 3fr 3fr 3fr 3fr"
              key={i}
              backgroundColor="white"
              padding="2xl"
              marginBottom="lg"
              borderRadius="md"
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                width="32px"
                height="32px"
                backgroundColor="gray100"
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                key={transaction.id}
              >
                <Text color="gray500">{i + 1}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Text>Hane Bilgisi</Text>
                <Text fontWeight="Medium">{transaction.fullName ? transaction.fullName : '-'}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Text>Adres</Text>
                <Text fontWeight="Medium">{transaction.fullAddress}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Text>Destekçi Bilgisi</Text>
                <Text fontWeight="Medium">{transaction.payerName}</Text>
                <Text fontWeight="Medium">{transaction.payerEmail}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Text>Destek Paketi Bilgisi</Text>
                <Text fontWeight="Medium">{transaction.name}</Text>
                <Text fontWeight="Medium">120 ₺</Text>
              </Flex>
              <Flex flexDirection="column">
                <Text>Durum</Text>
                {getStatus(transaction.status)}
              </Flex>
              <Flex flexDirection="column" justifyContent="center" alignItems="center">
                {transaction.status === 1 && (
                  <Button
                    size="small"
                    palette="info"
                    variant="primary"
                    height="fit-content"
                    width="fit-content"
                    isLoading={selectedTransaction === transaction.id ? loading : false}
                    disabled={selectedTransaction === transaction.id ? loading : false}
                    onClick={async () => {
                      setSelectedTransaction(transaction.id)
                      updateStatus(transaction.id)
                      setTimeout(() => {
                        window.location.reload()
                      }, 1000)
                    }}
                  >
                    Teslim edildi olarak işaretle
                  </Button>
                )}
                {transaction.status !== 1 && (
                  <Flex
                    backgroundColor="success100"
                    padding="xs"
                    width="fit-content"
                    borderRadius="md"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon
                      icon={Utils.getReactIconMetadata(FaCheckCircle({}))}
                      color="success"
                      marginRight="xs"
                    />
                    <Text fontSize="100" fontWeight="Medium" color="success">
                      Teslim edildi
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Grid>
          )
        })}
    </>
  )
}

export default Admin
