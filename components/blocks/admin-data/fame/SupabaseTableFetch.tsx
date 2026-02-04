import SupaClient from "@/lib/supabase/createClient"

export async function fetchHallOfFame() {
    const { data, error } = await SupaClient
        .from('hall-of-fame')
        .select('*');
    if (error) {
        console.error('Error fetching Hall of Fame:', error);
        return null;
    } else {
        return data;
    }
}
