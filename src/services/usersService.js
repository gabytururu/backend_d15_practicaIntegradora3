import { UsersMongoDAO as UsersDAO } from '../dao/usersMongoDAO.js'

class UsersService{
    constructor(dao){
        this.dao=dao
    }

    getUsers=async()=>{
        return await this.dao.getAll()
    }

    getUserById= async(uid)=>{
        return await this.dao.getOneBy(uid)
    }

    createUser= async(newUser)=>{
        return await this.dao.create(newUser)
    }

    addTicketToUser=async(uid,orderTicket)=>{
        return await this.dao.update(uid,orderTicket)
    }

    addProductToOwner=async(uid,ownedProduct)=>{
        return await this.dao.update(uid,ownedProduct)
    }
}

 
export const usersService= new UsersService(new UsersDAO())