import ResponseUtil from '../../util/response.js'
import AuthRepository from '../repository/auth.js'

class AuthMiddleware{
    verifyAuth = async (request, rep) =>{
        const token = request.headers.authorization?.split(' ')[1];

        if (!token) {
            ResponseUtil.error(rep, 401, 'Unauthorized', null)
            return;
        }

        const { data, error } = await AuthRepository.getUserByToken(token)

        if (error) {
            ResponseUtil.error(rep, 401, 'Unauthorized', null)
            return;
        }

        request.user = data.user; // Attach user info to request
    }
}

export default new AuthMiddleware();