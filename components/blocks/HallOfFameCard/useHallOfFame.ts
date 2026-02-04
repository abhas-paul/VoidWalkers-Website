import { useEffect, useState } from "react"
import { fetchHallOfFame } from "@/components/blocks/admin-data/fame/SupabaseTableFetch"
import { handleEdit, handleDeleteClick, handleInputChange } from "@/components/blocks/admin-data/fame/HandleEdits"
import { handleSave } from "@/components/blocks/admin-data/fame/HandleSave"
import { handleConfirmDelete } from "@/components/blocks/admin-data/fame/HandleDelete"

export function useHallofFame() {
    const [hallofame, setHallofame] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deletinghallofameId, setDeletinghallofameId] = useState(null);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        const data = await fetchHallOfFame();
        if (data) setHallofame(data);
    };

    return {
        hallofame,
        setHallofame,
        editingId,
        setEditingId,
        editData,
        setEditData,
        editDialogOpen,
        setEditDialogOpen,
        deleteConfirmOpen,
        setDeleteConfirmOpen,
        deletinghallofameId,
        setDeletinghallofameId,
        handlers: {
            edit: (item) => handleEdit(item, setEditingId, setEditData, setEditDialogOpen),
            deleteClick: (id) => handleDeleteClick(id, setDeletinghallofameId, setDeleteConfirmOpen),
            inputChange: (e) => handleInputChange(e, editData, setEditData),
            save: () => handleSave(editingId, editData, hallofame, setHallofame, setEditingId, setEditDialogOpen),
            confirmDelete: () => handleConfirmDelete(deletinghallofameId, hallofame, setHallofame, setDeleteConfirmOpen, setDeletinghallofameId),
        },
    };
}
