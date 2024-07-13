import { Router } from 'express';
import { VistasController } from '../controller/vistasController.js';
import { customAuth } from '../middleware/auth.js';
import { config } from '../config/config.js';

export const router=Router();

if(config.ENVIRONMENT==='prod'){
    //logger test endpoint
    router.get('/loggerTest',customAuth(["public"]),VistasController.getLoggerTest)

    //mocking proucts endpoint
    router.get('/mockingProducts',customAuth(["public"]),VistasController.getMockingProducts)

    //real ecommerce API endpoints
    router.get('/',customAuth(["public"]),VistasController.renderHome)
    router.get('/products',customAuth(["public"]),VistasController.renderProducts)
    router.get('/products/:pid',customAuth(["public"]),VistasController.renderProductById)
    router.get('/carts',customAuth(["admin"]),VistasController.renderCarts)
    router.get('/carts/:cid',customAuth(["user","admin"]),VistasController.renderCartById)
    router.get('/chat',customAuth(["user"]),VistasController.renderChat)
    router.get('/registro', customAuth(["public"]),VistasController.renderRegistro)
    router.get('/login',customAuth(["public"]),VistasController.renderLogin)
    router.get('/perfil',customAuth(["user","admin"]),VistasController.renderPerfil)
    router.get('/logout',customAuth(["public"]),VistasController.renderLogout)
    router.get('/purchase/:tid',customAuth(["user","admin"]),VistasController.renderTicket)
}


//logger test endpoint
router.get('/loggerTest',customAuth(["public"]),VistasController.getLoggerTest)

//mocking proucts endpoint
router.get('/mockingProducts',customAuth(["public"]),VistasController.getMockingProducts)

//real ecommerce API endpoints
router.get('/',customAuth(["public"]),VistasController.renderHome)
router.get('/products',customAuth(["public"]),VistasController.renderProducts)
router.get('/products/:pid',customAuth(["public"]),VistasController.renderProductById)
router.get('/carts',customAuth(["public","admin"]),VistasController.renderCarts)
router.get('/carts/:cid',customAuth(["public","user","admin"]),VistasController.renderCartById)
router.get('/chat',customAuth(["public","user"]),VistasController.renderChat)
router.get('/registro', customAuth(["public"]),VistasController.renderRegistro)
router.get('/login',customAuth(["public"]),VistasController.renderLogin)
router.get('/perfil',customAuth(["public","user","admin"]),VistasController.renderPerfil)
router.get('/logout',customAuth(["public"]),VistasController.renderLogout)
router.get('/purchase/:tid',customAuth("public",["user","admin"]),VistasController.renderTicket)



