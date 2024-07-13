import { usersModel } from './models/usersModel.js'

export class UsersMongoDAO{
    //async getAllUsers(){
    async getAll(){
       return await usersModel.find().populate("cart").populate("tickets").lean()
    }

    async getOneBy(propFilter={}){
    //async getUserByFilter(filter={}){
        return await usersModel.findOne(propFilter).populate("cart").populate("tickets.orderTicket").populate("productsOwned.ownedProduct").lean()
    }   

    async create(newUser){
    //async createUser(newUser){
        let newUserCreated= await usersModel.create(newUser)
        return newUserCreated.toJSON()
    }  

    //para el product service estos dos se pueden abstraer y unificar pq es misma ruta.. solo requiere un ternario inicial como hicimos en carts
    async update(uid,itemToUpdate){
        const query = itemToUpdate.hasOwnProperty('purchaser')?{$push:{tickets:{orderTicket}}}:{$push:{productsOwned:{ownedProduct}}}
        return await usersModel.findByIdAndUpdate(
            uid,
            query,
            {runValidators:true, returnDocument:'after'}
        )
    }


    // async addTicketToUser(uid,orderTicket){
    //     return await usersModel.findByIdAndUpdate(
    //         uid,
    //         {$push:{tickets:{orderTicket}}},
    //         {runValidators:true, returnDocument:'after'}
    //     )       
    // }

    // async addProductToOwner(uid,ownedProduct){
    //     return await usersModel.findByIdAndUpdate(
    //         uid,
    //         {$push:{productsOwned:{ownedProduct}}},
    //         {runValidators:true, returnDocument:'after'}
    //     )
    // }
}