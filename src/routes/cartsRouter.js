import { Router } from 'express';
import { CartsController } from '../controller/cartsController.js';
import {customAuth} from '../middleware/auth.js'
import { config } from '../config/config.js';

export const router=Router();

//PROD MODE
if(config.ENVIRONMENT==='prod'){
    router.get('/',customAuth(["admin"]),CartsController.getCarts)
    router.get('/:cid',customAuth(["user"]),CartsController.getCartById)
    router.post('/',customAuth(["user"]),CartsController.postNewCart)
    router.put('/:cid',customAuth(["user"]),CartsController.replaceCartContent)
    router.put('/:cid/products/:pid',customAuth(["user"]),CartsController.updateProductInCart)
    router.delete('/:cid',customAuth(["user"]), CartsController.deleteAllProductsInCart)
    router.delete('/:cid/products/:pid',customAuth(["user"]),CartsController.deleteSingleProductInCart )
    router.post('/:cid/purchase',customAuth(["user"]),CartsController.completePurchase)
    router.get('/:cid/purchase/:tid',customAuth(["user","admin"]),CartsController.getPurchaseTicket)
}

//DEV MODE
router.get('/',customAuth(["public","admin"]),CartsController.getCarts)
router.get('/:cid',customAuth(["public","user"]),CartsController.getCartById)
router.post('/',customAuth(["public","user"]),CartsController.postNewCart)
router.put('/:cid',customAuth(["public","user"]),CartsController.replaceCartContent)
router.put('/:cid/products/:pid',customAuth(["public","user"]),CartsController.updateProductInCart)
router.delete('/:cid',customAuth(["public","user"]), CartsController.deleteAllProductsInCart)
router.delete('/:cid/products/:pid',customAuth(["public","user"]),CartsController.deleteSingleProductInCart )
router.post('/:cid/purchase',customAuth(["public","user"]),CartsController.completePurchase)
router.get('/:cid/purchase/:tid',customAuth(["public","user","admin"]),CartsController.getPurchaseTicket)

