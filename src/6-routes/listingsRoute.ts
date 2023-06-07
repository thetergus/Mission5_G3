import express from 'express'
import * as listingsControllers from '../5-controllers/listingsController'

const router = express.Router()

router.get('/', listingsControllers.getAllListings)
router.get('/:id', listingsControllers.getOneListing)
router.get('/sort-by-featured', listingsControllers.sortByFeatured)
router.get('/sort-by-highest-price', listingsControllers.sortByHighestPrice)
router.get('/sort-by-lowest-price', listingsControllers.sortByLowestPrice)
router.get('/sort-by-newest', listingsControllers.sortByNewest)
// router.get('/sort-by-earliest-viewing', listingsControllers.sortByEarliestViewing)
router.post('/', listingsControllers.createOneListing)

export default router
