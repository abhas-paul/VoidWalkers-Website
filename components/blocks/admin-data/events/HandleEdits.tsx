export function handleEdit(event, setEditingId, setEditData, setEditDialogOpen) {
    setEditingId(event.id);
    setEditData({ ...event });
    setEditDialogOpen(true);
}

export function handleDeleteClick(id, setDeletingEventId, setDeleteConfirmOpen) {
    setDeletingEventId(id);
    setDeleteConfirmOpen(true);
}

export function handleInputChange(e, editData, setEditData) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
}
