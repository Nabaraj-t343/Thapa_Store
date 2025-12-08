import { Router } from 'express'
import auth from '../middleware/auth.js'
import { addAddressController, deleteAddresscontroller, getAddressController, updateAddressController } from '../controllers/address.controller.js'

const addressRouter = Router()