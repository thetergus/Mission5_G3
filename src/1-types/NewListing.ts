export interface iDetails {
  available_starting: string
  bond: number
  property_details: string
  property_features?: Array<{ feature: string }>
  viewing_dates_times?: Array<{
    start_date_time: string
    end_date_time: string
  }>
}
