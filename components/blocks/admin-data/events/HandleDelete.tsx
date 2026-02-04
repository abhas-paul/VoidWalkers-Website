import SupaClient from "@/lib/supabase/createClient"

export async function handleConfirmDelete(deletingEventId, events, setEvents, setDeleteConfirmOpen, setDeletingEventId) {
    if (deletingEventId) {
        const { error } = await SupaClient.from('new-event').delete().eq('id', deletingEventId);
        if (!error) {
            setEvents(events.filter(e => e.id !== deletingEventId));
            setDeleteConfirmOpen(false);
            setDeletingEventId(null);
        } else {
            console.error("Failed to delete event:", error);
        }
    }
}
