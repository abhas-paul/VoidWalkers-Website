import SupaClient from "@/lib/supabase/createClient"

export async function handleConfirmDelete(id, data, setData, setDeleteConfirmOpen, setDeletingId) {
    if (id) {
        const { error } = await SupaClient.from('hall-of-fame').delete().eq('id', id);
        if (!error) {
            setData(data.filter(item => item.id !== id));
            setDeleteConfirmOpen(false);
            setDeletingId(null);
        } else {
            console.error("Failed to delete from Hall of Fame:", error);
        }
    }
}
