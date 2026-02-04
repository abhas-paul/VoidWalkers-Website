import SupaClient from "@/lib/supabase/createClient"

import type { Dispatch, SetStateAction } from "react"
import type { EventItem } from "@/components/blocks/LiveEventsCard/useEvents"

export async function handleSave(
    editingId: EventItem["id"] | null,
    editData: Partial<EventItem>,
    events: EventItem[],
    setEvents: Dispatch<SetStateAction<EventItem[]>>,
    setEditingId: Dispatch<SetStateAction<EventItem["id"] | null>>,
    setEditDialogOpen: Dispatch<SetStateAction<boolean>>,
) {
    if (!editingId) return

    const { error } = await SupaClient.from("new-event").update(editData).eq("id", editingId);

    if (!error) {
        setEvents(events.map((e) => (e.id === editingId ? { ...e, ...editData } : e)));
        setEditingId(null);
        setEditDialogOpen(false);
    } else {
        console.error("Failed to update event:", error);
    }
}
