import { useEffect, useState } from "react"
import { fetchEvents } from "@/components/blocks/admin-data/events/SupabaseTableFetch"
import { handleEdit, handleDeleteClick, handleInputChange } from "@/components/blocks/admin-data/events/HandleEdits"
import { handleSave } from "@/components/blocks/admin-data/events/HandleSave"
import { handleConfirmDelete } from "@/components/blocks/admin-data/events/HandleDelete"

export function useEvents() {
    const [events, setEvents] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deletingEventId, setDeletingEventId] = useState(null);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const data = await fetchEvents();
        if (data) setEvents(data);
    };

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
            edit: (event) => handleEdit(event, setEditingId, setEditData, setEditDialogOpen),
            deleteClick: (id) => handleDeleteClick(id, setDeletingEventId, setDeleteConfirmOpen),
            inputChange: (e) => handleInputChange(e, editData, setEditData),
            save: () => handleSave(editingId, editData, events, setEvents, setEditingId, setEditDialogOpen),
            confirmDelete: () => handleConfirmDelete(deletingEventId, events, setEvents, setDeleteConfirmOpen, setDeletingEventId),
        },
    };
}
