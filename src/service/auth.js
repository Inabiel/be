import 'dotenv/config'
import * as argon2 from 'argon2'
import AuthRepository from '../repository/auth.js'
import {error} from 'console';

class AuthService{
    constructor(){}

    register = async (request) => {
        try{
            let {username, email, password} = request.body;
            let addUser = await AuthRepository.register(username, email, password)
            if(!addUser.error){
                return addUser
            } else{
                throw new Error('Cannot Register with the following error: ' + addUser.error.message)
            }
        } catch(error){
            throw error;
        }

    }
}

export default new AuthService();