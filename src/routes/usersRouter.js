import { Router } from 'express';
//import { usersController } from '../controller/usersController.js';
import {customAuth} from '../middleware/auth.js'
import { config } from '../config/config.js';
import { UsersManagerMongo as UsersManager } from '../dao/usersManagerMONGO.js';
import { usersService } from '../services/usersService.js';

let usersManager = new UsersManager()

export const router=Router();

router.get('/', customAuth(["public"]), async(req,res)=>{    
    //const allUsers = await usersManager.getAllUsers()
    const allUsers = await usersService.getUsers()

    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({payload:allUsers})
})

router.get('/:uid', customAuth(["public"]), async(req,res)=>{
    const { uid } = req.params
    //const singleUser = await usersManager.getUserByFilter({_id:uid})
    const singleUser= await usersService.getUserById({_id:uid})
    
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({payload:singleUser})
})


//AJUSTADOS-     //FALTA TESTEAR POST CREACION DE DAO + SERVICE 
//TMB FALTA VALORAR SI hace sentido que existan o si no es necesario que existan via CLIENT sino unicamente como subservicio de las funciones que los ocupan (ej purchasetickes para este put, y productPost para el put de product owner)
//OJO TMB despues de testear estas rutas ... toca sustituir los usersManager en productPosting y en finalizePurchase -- pues estan usando manager y ahora deben utilizar el service + testear q operan OK
router.put('/:uid/:orderTicket',customAuth(["user"]),async(req,res)=>{
    const {uid,orderTicket} =req.params   
    //const updatedUser = await usersManager.addTicketToUser(uid,orderTicket)

    const updatedUser = await usersService.addTicketToUser(uid,orderTicket)

    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({payload:updatedUser})    
})


router.put('/:uid/:productOwned',customAuth(["user"]),async(req,res)=>{
    const {uid,productOwned} =req.params   
    //const updatedUser = await usersManager.addTicketToUser(uid,orderTicket)
    //FALTA TESTEAR
    const updatedUser = await usersService.addProductToOwner(uid,productOwned)

    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({payload:updatedUser})    
})