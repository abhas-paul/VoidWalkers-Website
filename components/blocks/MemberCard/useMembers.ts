import { useEffect, useState } from "react"
import { fetchMembers } from "@/components/blocks/admin-data/members/SupabaseTableFetch"
import { handleEdit, handleDeleteClick, handleInputChange } from "@/components/blocks/admin-data/members/HandleEdits"
import { handleSave } from "@/components/blocks/admin-data/members/HandleSave"
import { handleConfirmDelete } from "@/components/blocks/admin-data/members/HandleDelete"

export function useMembers() {
    const [members, setMembers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deletingMemberId, setDeletingMemberId] = useState(null);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        const data = await fetchMembers();
        if (data) setMembers(data);
    };

    return {
        members,
        setMembers,
        editingId,
        setEditingId,
        editData,
        setEditData,
        editDialogOpen,
        setEditDialogOpen,
        deleteConfirmOpen,
        setDeleteConfirmOpen,
        deletingMemberId,
        setDeletingMemberId,
        handlers: {
            edit: (member) => handleEdit(member, setEditingId, setEditData, setEditDialogOpen),
            deleteClick: (id) => handleDeleteClick(id, setDeletingMemberId, setDeleteConfirmOpen),
            inputChange: (e) => handleInputChange(e, editData, setEditData),
            save: () => handleSave(editingId, editData, members, setMembers, setEditingId, setEditDialogOpen),
            confirmDelete: () => handleConfirmDelete(deletingMemberId, members, setMembers, setDeleteConfirmOpen, setDeletingMemberId),
        },
    };
}
