import SupaClient from "@/lib/supabase/createClient"

export async function handleSave(editingId, editData, data, setData, setEditingId, setEditDialogOpen) {
    const { error } = await SupaClient.from('hall-of-fame').update(editData).eq('id', editingId);
    if (!error) {
        setData(data.map(item => item.id === editingId ? editData : item));
        setEditingId(null);
        setEditDialogOpen(false);
    } else {
        console.error("Failed to update Hall of Fame:", error);
    }
}
