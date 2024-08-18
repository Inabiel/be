import ResponseUtil from "../../util/response.js";
import RegisterService from "../service/auth/RegisterService.js";
import SignInService from '../service/auth/SignInService.js'

class AuthController{
    register = async(request, reply) =>{
        try {
            const user = await (new RegisterService(request)).call();
            ResponseUtil.success(reply, 200, null, "successfully adding user");
        } catch (error) {
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }

    signIn = async(request, reply) => {
        try {
            const user = await (new SignInService(request)).call();
            ResponseUtil.success(reply, 200, user, "succesfully signed in.");
        } catch (error) {
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }
}

export default new AuthController();