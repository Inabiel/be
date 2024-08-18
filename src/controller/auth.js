import ResponseUtil from "../../util/response.js";
import AuthService from "../service/auth.js";

class AuthController{
    register = async(request, reply) =>{
        try {
            const user = await AuthService.register(request);
            if (user) {
                ResponseUtil.success(reply, 200, user, "successfully adding user");
            } else {
                ResponseUtil.error(reply, 404, 'User not found', null);
            }
        } catch (error) {
            ResponseUtil.error(reply, 500, error.message, null);
        }
    }
}

export default new AuthController();