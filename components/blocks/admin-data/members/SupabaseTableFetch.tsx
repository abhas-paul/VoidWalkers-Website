import SupaClient from "@/lib/supabase/createClient"

export async function fetchMembers() {
    const { data, error } = await SupaClient
        .from('members')
        .select('*');
    if (error) {
        console.error('Error fetching members:', error);
        return null;
    } else {
        return data;
    }
}
