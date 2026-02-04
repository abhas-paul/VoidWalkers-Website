import SupaClient from "@/lib/supabase/createClient"

export async function handleSave(editingId, editData, members, setMembers, setEditingId, setEditDialogOpen) {
    const { error } = await SupaClient.from('members').update(editData).eq('id', editingId);
    if (!error) {
        setMembers(members.map(m => m.id === editingId ? editData : m));
        setEditingId(null);
        setEditDialogOpen(false);
    } else {
        console.error("Failed to update member:", error);
    }
}
