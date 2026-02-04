import { useEffect, useState, type ChangeEvent } from "react"
import { fetchHallOfFame } from "@/components/blocks/admin-data/fame/SupabaseTableFetch"
import { handleEdit, handleDeleteClick, handleInputChange } from "@/components/blocks/admin-data/fame/HandleEdits"
import { handleSave } from "@/components/blocks/admin-data/fame/HandleSave"
import { handleConfirmDelete } from "@/components/blocks/admin-data/fame/HandleDelete"

export type HallOfFameItem = {
    id: number | string
    Topic: string
    Fametype: string
    Date: string
    Bio: string
    imguri: string
}

export function useHallofFame() {
    const [hallofame, setHallofame] = useState<HallOfFameItem[]>([])
    const [editingId, setEditingId] = useState<HallOfFameItem["id"] | null>(null)
    const [editData, setEditData] = useState<Partial<HallOfFameItem>>({})
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
    const [deletinghallofameId, setDeletinghallofameId] = useState<HallOfFameItem["id"] | null>(null)

    const loadMembers = async () => {
        const data = await fetchHallOfFame()
        if (data) setHallofame(data)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            void loadMembers()
        }, 0)

        return () => clearTimeout(timeoutId)
    }, [])

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
            edit: (item: HallOfFameItem) => handleEdit(item, setEditingId, setEditData, setEditDialogOpen),
            deleteClick: (id: HallOfFameItem["id"]) => handleDeleteClick(id, setDeletinghallofameId, setDeleteConfirmOpen),
            inputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleInputChange(e, editData, setEditData),
            save: () => handleSave(editingId, editData, hallofame, setHallofame, setEditingId, setEditDialogOpen),
            confirmDelete: () => handleConfirmDelete(deletinghallofameId, hallofame, setHallofame, setDeleteConfirmOpen, setDeletinghallofameId),
        },
    }
}
