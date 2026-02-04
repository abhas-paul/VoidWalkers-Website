import {  createClient } from '@supabase/supabase-js'


const apiuri = `${process.env.NEXT_PUBLIC_SUPABASE_URI}`
const apikey = `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`

const SupaClient = createClient(apiuri, apikey)

export default SupaClient;