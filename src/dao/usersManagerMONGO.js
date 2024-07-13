import { usersModel } from './models/usersModel.js'

export class UsersManagerMongo{
    async getAllUsers(){
       return await usersModel.find().populate("cart").populate("tickets").lean()
    }
    async getUserByFilter(filter={}){
        return await usersModel.findOne(filter).populate("cart").populate("tickets.orderTicket").populate("productsOwned.ownedProduct").lean()
    }   
    async createUser(newUser){
        let newUserCreated= await usersModel.create(newUser)
        return newUserCreated.toJSON()
    }  

    //para el product service estos dos se pueden abstraer y unificar pq es misma ruta.. solo requiere un ternario inicial como hicimos en carts
    async addTicketToUser(uid,orderTicket){
        return await usersModel.findByIdAndUpdate(
            uid,
            {$push:{tickets:{orderTicket}}},
            {runValidators:true, returnDocument:'after'}
        )       
    }

    async addProductToOwner(uid,ownedProduct){
        return await usersModel.findByIdAndUpdate(
            uid,
            {$push:{productsOwned:{ownedProduct}}},
            {runValidators:true, returnDocument:'after'}
        )
    }
}