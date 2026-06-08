import express from 'express'
import { productRoutes } from './productRoute.js'

export const indexRoutes = express.Router()

indexRoutes.use('/api/product', productRoutes)