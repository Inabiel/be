import 'dotenv/config'
import AuthRepository from '../../repository/auth.js'

class SignInService{
    constructor(request){
        this.request = request
    }

    call = async () => {
        try{
            let {email, password} = this.request.body;
            let signIn = await AuthRepository.signIn(email, password)
            if(!signIn.error){
                return signIn.data.session
            } else{
                const err = new Error(signIn.error.message)
                err.code = signIn.error.status
                throw err;
            }
        } catch(error){
            throw error;
        }

    }
}

export default SignInService; 