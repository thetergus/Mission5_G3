import express from 'express'
import * as listingsControllers from '../5-controllers/listingsController'

const router = express.Router()

router.get('/', listingsControllers.getAllListings)
router.get('/sortby-featured', listingsControllers.sortByFeatured)
router.get('/sortby-highest-price', listingsControllers.sortByHighestPrice)
router.get('/sortby-lowest-price', listingsControllers.sortByLowestPrice)
router.get('/sortby-newest', listingsControllers.sortByNewest)
// router.get('/sort-by-earliest-viewing', listingsControllers.sortByEarliestViewing)
router.post('/', listingsControllers.createOneListing)
router.get('/:id', listingsControllers.getOneListing)

export default router
