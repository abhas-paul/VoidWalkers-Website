import SupaClient from "@/lib/supabase/createClient"

export async function handleSave(editingId, editData, events, setEvents, setEditingId, setEditDialogOpen) {
    const { error } = await SupaClient.from('new-event').update(editData).eq('id', editingId);
    if (!error) {
        setEvents(events.map(e => e.id === editingId ? editData : e));
        setEditingId(null);
        setEditDialogOpen(false);
    } else {
        console.error("Failed to update event:", error);
    }
}
