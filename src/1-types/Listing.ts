export interface IListing {
  listing_no: number
  street_address: string
  pricepw: number
  bedrooms: number
  bathrooms: number
  carparks: number
  building_type: string
  image_urls: [{ url: string }]
  liked: boolean
  details: {
    available_starting: Date
    bond: number
    property_details: string
    property_features: [{ feature: string }]
    viewing_dates_times: [{ date: Date; start_time: Date; end_time: Date }]
  }
}
