import SupaClient from "@/lib/supabase/createClient"

import type { Dispatch, SetStateAction } from "react"
import type { EventItem } from "@/components/blocks/LiveEventsCard/useEvents"

export async function handleConfirmDelete(
    deletingEventId: EventItem["id"] | null,
    events: EventItem[],
    setEvents: Dispatch<SetStateAction<EventItem[]>>,
    setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>,
    setDeletingEventId: Dispatch<SetStateAction<EventItem["id"] | null>>,
) {
    if (!deletingEventId) return

    const { error } = await SupaClient.from("new-event").delete().eq("id", deletingEventId)

    if (!error) {
        setEvents(events.filter((e) => e.id !== deletingEventId))
        setDeleteConfirmOpen(false)
        setDeletingEventId(null)
    } else {
        console.error("Failed to delete event:", error)
    }
}
