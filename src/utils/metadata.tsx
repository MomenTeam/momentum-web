class MetadataUtils {
  metadata: any

  public setMetadata(metadata: any) {
    this.metadata = metadata
  }
  public getKey(name: string) {
    return this.metadata.shipment.addressType.find((i: any) => i._id === name).name
  }
  public deliveryType(name: string) {
    return this.metadata.shipment.deliveryType.find((i: any) => i._id === name).name
  }
  public getShipmentStatus(name?: string) {
    if (name) {
      return this.metadata.shipment.status.find((i: any) => i._id === name).name
    }
    return this.metadata.shipment.status
  }
  public getCategory(name: string) {
    if (name) {
      return this.metadata.freight.category.find((i: any) => i._id === name).name
    }
    return this.metadata.freight.category
  }
  public getDeliveryType() {
    return [
      { label: 'Ekonomik Teslimat', value: 'ECONOMIC' },
      { label: 'Standart Teslimat', value: 'STANDARD' },
      { label: 'Yolda Express', value: 'SUPER_EXPRESS' },
    ]
  }
  public getPackage(name?: string) {
    if (name) {
      return this.metadata.freight.package.find((i: any) => i._id === name).name
    }
    return this.metadata.freight.package
  }
  public getCitys(id: string) {
    return this.metadata.city.main.city
  }
  public getDistricts(cityId: number | string) {
    return this.metadata.city.find((x: any) => x.district)
  }
  public getCity(cityId: number | string) {
    return this.metadata.city.main.city.find((i: any) => i._id === cityId)
  }
  public getDistrict(cityId: number | string, districtId: number | string) {
    return this.metadata.city[cityId].district.find((i: any) => i._id === districtId)
  }
  public getUserTitle(name: string) {
    return this.metadata.user.title.find((i: any) => i._id === name).name
  }
}

export default new MetadataUtils()
