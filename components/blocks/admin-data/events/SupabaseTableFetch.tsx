import SupaClient from "@/lib/supabase/createClient"

export async function fetchEvents() {
    const { data, error } = await SupaClient
        .from('new-event')
        .select('*');
    if (error) {
        console.error('Error fetching events:', error);
        return null;
    } else {
        return data;
    }
}
