import type { Dispatch, SetStateAction, ChangeEvent } from "react"
import type { EventItem } from "@/components/blocks/LiveEventsCard/useEvents"

export function handleEdit(
    event: EventItem,
    setEditingId: Dispatch<SetStateAction<EventItem["id"] | null>>,
    setEditData: Dispatch<SetStateAction<Partial<EventItem>>>,
    setEditDialogOpen: Dispatch<SetStateAction<boolean>>,
) {
    setEditingId(event.id);
    setEditData({ ...event });
    setEditDialogOpen(true);
}

export function handleDeleteClick(
    id: EventItem["id"],
    setDeletingEventId: Dispatch<SetStateAction<EventItem["id"] | null>>,
    setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>,
) {
    setDeletingEventId(id);
    setDeleteConfirmOpen(true);
}

export function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    editData: Partial<EventItem>,
    setEditData: Dispatch<SetStateAction<Partial<EventItem>>>,
) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
}
