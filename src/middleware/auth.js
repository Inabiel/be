import ResponseUtil from '../../util/response'

class AuthMiddleware{
    verifyAuth = async (req, rep) =>{
        const token = request.headers.authorization?.split(' ')[1];

        if (!token) {
            ResponseUtil.error(rep, 401, 'Unauthorized', null)
            return;
        }

        const { data, error } = await supabase.auth.getUser(token);

        if (error) {
            ResponseUtil.error(rep, 401, 'Unauthorized', null)
            return;
        }

        request.user = data.user; // Attach user info to request
    }
}