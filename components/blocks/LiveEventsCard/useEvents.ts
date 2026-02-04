import { useEffect, useState, type ChangeEvent } from "react"
import { fetchEvents } from "@/components/blocks/admin-data/events/SupabaseTableFetch"
import { handleEdit, handleDeleteClick, handleInputChange } from "@/components/blocks/admin-data/events/HandleEdits"
import { handleSave } from "@/components/blocks/admin-data/events/HandleSave"
import { handleConfirmDelete } from "@/components/blocks/admin-data/events/HandleDelete"

export type EventItem = {
    id: number | string
    Topic: string
    Description: string
    Judges: string
    Mode: string
    Prizepool: string
    Requirement: string
    Sponsors: string
    Venue: string
    imguri: string
}

export function useEvents() {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [editingId, setEditingId] = useState<EventItem["id"] | null>(null);
    const [editData, setEditData] = useState<Partial<EventItem>>({});
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deletingEventId, setDeletingEventId] = useState<EventItem["id"] | null>(null);

    const loadEvents = async () => {
        const data = await fetchEvents();
        if (data) setEvents(data);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            void loadEvents();
        }, 0);

        return () => clearTimeout(timeoutId);
    }, []);

    return {
        events,
        setEvents,
        editingId,
        setEditingId,
        editData,
        setEditData,
        editDialogOpen,
        setEditDialogOpen,
        deleteConfirmOpen,
        setDeleteConfirmOpen,
        deletingEventId,
        setDeletingEventId,
        handlers: {
            edit: (event: EventItem) => handleEdit(event, setEditingId, setEditData, setEditDialogOpen),
            deleteClick: (id: EventItem["id"]) => handleDeleteClick(id, setDeletingEventId, setDeleteConfirmOpen),
            inputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleInputChange(e, editData, setEditData),
            save: () => handleSave(editingId, editData, events, setEvents, setEditingId, setEditDialogOpen),
            confirmDelete: () => handleConfirmDelete(deletingEventId, events, setEvents, setDeleteConfirmOpen, setDeletingEventId),
        },
    };
}
