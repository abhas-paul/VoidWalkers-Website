export function handleEdit(item, setEditingId, setEditData, setEditDialogOpen) {
    setEditingId(item.id);
    setEditData({ ...item });
    setEditDialogOpen(true);
}

export function handleDeleteClick(id, setDeletingId, setDeleteConfirmOpen) {
    setDeletingId(id);
    setDeleteConfirmOpen(true);
}

export function handleInputChange(e, editData, setEditData) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
}
