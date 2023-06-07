export interface IListing {
  date_created: Date
  listing_no: number
  street_address: string
  pricepw: number
  bedrooms: number
  bathrooms: number
  carparks: number
  building_type: string
  image_urls?: [{ url: string }]
  liked: boolean
  featured: boolean
  details: {
    available_starting: string
    bond: number
    property_details: string
    property_features?: [{ feature: string }]
    viewing_dates_times?: [{ start_date_time: string; end_date_time: string }]
  }
}
