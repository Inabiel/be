import 'dotenv/config'
import AuthRepository from '../../repository/auth.js'

class RegisterService{
    constructor(request){
        this.request = request
    }

    call = async () => {
        try{
            let {username, email, password} = this.request.body;
            let addUser = await AuthRepository.register(username, email, password)
            if(!addUser.error){
                return addUser
            } else{
                const err = new Error(addUser.error.message)
                err.code = addUser.error.status
                throw err;
            }
        } catch(error){
            throw error;
        }

    }
}

export default RegisterService; 
