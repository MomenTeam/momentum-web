import { AxiosRequestConfig } from 'axios'
import dayjs from 'dayjs'
import { HttpMethod } from './HttpInstance'

export interface IPutPricingInputDTO {
  shipmentId: string
  deliveryDate?: Date | number
  deliveryType?: string
  price?: string | number
}

export default {
  getAllActiveShipment: (): AxiosRequestConfig => {
    return {
      url: '/shipment/v1?status=ACTIVE',
      method: HttpMethod.GET,
    }
  },
  getAllDeliveryShipment: (): AxiosRequestConfig => {
    return {
      url: '/shipment/v1?status=DELIVERED',
      method: HttpMethod.GET,
    }
  },
  getShipment: ({ id }: { id: string }): AxiosRequestConfig => {
    return {
      url: `/shipment/v1/${id}`,
      method: HttpMethod.GET,
    }
  },
  postShipmentStatus: ({ notification = false, shipmentId, deliveryType }: any): AxiosRequestConfig => {
    return {
      url: `/shipment/v1/status`,
      method: HttpMethod.POST,
      data: {
        notification,
        shipmentId: [shipmentId],
        _id: deliveryType,
      },
    }
  },
  postShipment: ({ dropoff, paymentOption, pricingId }: any): AxiosRequestConfig => {
    return {
      url: `/shipment/v1/`,
      method: HttpMethod.POST,
      data: {
        dropoff: [{ sourceId: 1 }],
        paymentOption,
        pricingId,
      },
    }
  },
  deleteShipmentStatus: ({ shipmentId, type }: any): AxiosRequestConfig => {
    return {
      url: `/shipment/v1/${shipmentId}/status/${type}`,
      method: HttpMethod.DELETE,
    }
  },
  putPricing: ({ shipmentId, data }: any): AxiosRequestConfig => {
    if (data.price && data.price !== '') {
      data.price = Number(data.price)
    } else {
      delete data.price
    }
    if (data.deliveryDate) {
      data.deliveryDate = dayjs(data.deliveryDate).valueOf()
    }
    if (data.deliveryType === '') {
      delete data.deliveryType
    }
    console.log(data)

    return {
      url: `/shipment/v1/${shipmentId}/pricing`,
      method: HttpMethod.PUT,
      data,
    }
  },
}
