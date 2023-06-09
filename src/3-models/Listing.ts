import mongoose, { Document, Schema } from 'mongoose' // Document lets us use the inbuilt id's
import { IListing } from '../1-types/Listing'

export interface IListingsModel extends IListing, Document {}

const listingSchema: Schema = new mongoose.Schema({
  date_created: { type: Date, required: true },
  listing_no: { type: Number, required: true },
  street_address: { type: String, required: true },
  pricepw: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  carparks: { type: Number, required: true },
  building_type: { type: String, required: true },
  image_urls: [{ url: String }],
  liked: { type: Boolean, required: true },
  featured: { type: Boolean, required: true },
  details: {
    available_starting: { type: String, required: true },
    bond: { type: Number, required: true },
    property_details: { type: String, required: true },
    property_features: [{ feature: String }],
    viewing_dates_times: [{ start_date_time: String, end_date_time: String }],
  },
})

const Listing = mongoose.model<IListingsModel>('Listing', listingSchema)
export default Listing
