import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

class AuthRepository{
    constructor(){
        const supabaseUrl = process.env.SUPABASE_AUTH_URL; // Replace with your Supabase URL
        const supabaseKey = process.env.SUPABASE_AUTH_KEY;
        this.supabase = createClient(supabaseUrl, supabaseKey);     
    }

    register = async (username, email, password) => {
        console.log('data ->', username, email, password)
        return await this.supabase.auth.signUp({username, email, password})
    }

    signIn = async (email, password) => {
        return await this.supabase.auth.signInWithPassword({email, password})
    }

    getUserByToken = async (token) => {
        return await this.supabase.auth.getUser(token)
    }

}

export default new AuthRepository();