export function handleEdit(member, setEditingId, setEditData, setEditDialogOpen) {
    setEditingId(member.id);
    setEditData({ ...member });
    setEditDialogOpen(true);
}

export function handleDeleteClick(id, setDeletingMemberId, setDeleteConfirmOpen) {
    setDeletingMemberId(id);
    setDeleteConfirmOpen(true);
}

export function handleInputChange(e, editData, setEditData) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
}
