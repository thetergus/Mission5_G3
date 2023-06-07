import mongoose, { Document, Schema } from 'mongoose' // Document lets us use the inbuilt id's
import { IListing } from '../1-types/Listing'

export interface IListingsModel extends IListing, Document {}

const listingSchema: Schema = new mongoose.Schema({
  listing_no: { type: Number, required: true },
  street_address: { type: String, required: true },
  pricepw: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  carparks: { type: Number, required: true },
  building_type: { type: String, required: true },
  image_urls: [{ url: String }],
  liked: { type: Boolean, required: true },
  details: {
    available_starting: { type: Date, required: true },
    bond: { type: Number, required: true },
    property_details: { type: String, required: true },
    property_features: [{ feature: { type: String, required: true } }],
    viewing_dates_times: [{ date: Date, start_time: Date, end_time: Date }],
  },
})

const Listing = mongoose.model<IListingsModel>('Listing', listingSchema)
export default Listing
