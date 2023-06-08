import mongoose from 'mongoose'
import Listing from '../3-models/Listing'
import { iDetails } from '../1-types/NewListing'

export const getAllListings = async () => {
  return await Listing.find({}).exec()
}

export const getOneListing = async (listingId: string) => {
  const matchedListing = await Listing.findById(listingId).exec()
  if (!matchedListing) {
    throw new Error('Listing not found')
  }
  return matchedListing
}

export const getNumberOfListings = async () => {
  return await Listing.countDocuments({})
}

// ----------------------- SORT BY ----------------------------//
export const sortByFeatured = async () => {
  // const all = await Listing.find({}).exec()
  // console.log('All is ', all)
  const query = Listing.find().sort({ featured: -1 })
  const sortedListings = await query.exec()
  return sortedListings
}
export const sortByHighestPrice = async () => {
  return await Listing.find().sort({ pricepw: -1 })
}
export const sortByLowestPrice = async () => {
  return await Listing.find().sort({ pricepw: 1 })
}
export const sortByNewest = async () => {
  return await Listing.find().sort({ date_created: 1 })
}
// export const sortByEarliestViewing = async () => {
//   return await Listing.find({}).sort({ details.viewing_dates_times.date: 1 })
// } // will need to use an aggregation pipeline for this

//

// ----------------------- DEV - CREATE ----------------------------//
// export const createOneListing = async ({
//   listing_no: number,
//   street_address: string,
//   pricepw: number,
//   bedrooms: number,
//   bathrooms: number,
//   carparks: number,
//   building_type: string,
//   featured: boolean,
//   details: iDetails,
//   image_urls?: Array<{ url: string }>
// }) => {

export const createOneListing = async (
  listing_no: number,
  street_address: string,
  pricepw: number,
  bedrooms: number,
  bathrooms: number,
  carparks: number,
  building_type: string,
  featured: boolean,
  details: iDetails,
  image_urls?: Array<{ url: string }>
) => {
  if (!image_urls) {
    image_urls = [
      { url: '/images/Rental Listing Page - Images/placeholder-house.png' },
    ]
  }

  const newListing = await Listing.create({
    _id: new mongoose.Types.ObjectId(),
    date_created: new Date(),
    // date_created: new Date().toUTCString,
    listing_no, // Need to make a function to make unique numbers
    street_address,
    pricepw,
    bedrooms,
    bathrooms,
    carparks,
    building_type,
    image_urls,
    liked: false,
    featured,
    details,
  })

  return newListing
}
