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