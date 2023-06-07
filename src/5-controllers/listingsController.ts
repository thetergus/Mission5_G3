import { Request, Response } from 'express'
import * as listingsServices from '../4-services/listingsServices'
import { iDetails } from '../1-types/NewListing'

export const getAllListings = async (req: Request, res: Response) => {
  const listings = await listingsServices.getAllListings()
  res.json(listings)
}

export const getOneListing = async (req: Request, res: Response) => {
  const listingId = req.params.id
  try {
    const matchedListing = await listingsServices.getOneListing(listingId)
    res.json(matchedListing)
  } catch (e) {
    res.status(404).send(e)
  }
}

// ----------------------- SORT BY ----------------------------//
export const sortByFeatured = async (req: Request, res: Response) => {
  const listingsByFeatured = await listingsServices.sortByFeatured()
  res.json(listingsByFeatured)
}
export const sortByHighestPrice = async (req: Request, res: Response) => {
  const listingsByHighestPrice = await listingsServices.sortByHighestPrice()
  res.json(listingsByHighestPrice)
}
export const sortByLowestPrice = async (req: Request, res: Response) => {
  const listingsByLowestPrice = await listingsServices.sortByLowestPrice()
  res.json(listingsByLowestPrice)
}
export const sortByNewest = async (req: Request, res: Response) => {
  const listingsByNewest = await listingsServices.sortByNewest()
  res.json(listingsByNewest)
}
// export const sortByEarliestViewing = async (req: Request, res: Response) => {
//   const listingsByEarliestView = await listingsServices.sortByEarliestViewing()
//   res.json(listingsByEarliestView)
// }

//
// ----------------------- DEV - CREATE ----------------------------//

export const createOneListing = async (req: Request, res: Response) => {
  const listing_no: number = req.body.listing_no // Need to make a function for this - then we won't need to include it here.
  const street_address: string = req.body.street_address
  const pricepw: number = req.body.pricepw
  const bedrooms: number = req.body.bedrooms
  const bathrooms: number = req.body.bathrooms
  const carparks: number = req.body.carparks
  const building_type: string = req.body.building_type
  const image_urls: [{ url: string }] = req.body.image_urls
  const featured: boolean = req.body.featured
  const details: iDetails = req.body.details

  const newListing = await listingsServices.createOneListing(
    listing_no,
    street_address,
    pricepw,
    bedrooms,
    bathrooms,
    carparks,
    building_type,
    featured,
    details,
    image_urls
  )

  res.status(201).json(newListing)
}
