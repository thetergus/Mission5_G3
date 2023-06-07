import express from 'express'
import * as helloWorldServices from '../5-controllers/helloWorldController'

const router = express.Router()

router.get('/', helloWorldServices.helloWorld)
// router.post('/', helloWorldServices.helloWorld)
// router.get('/other-api', helloWorldServices.helloWorld)
router.get('/tasks', helloWorldServices.getAllTasks)
router.get('/tasks/:id', helloWorldServices.getOneTask)
router.post('/tasks', helloWorldServices.createOneTask)
router.delete('/tasks/:id', helloWorldServices.deleteTask)

export default router
