import type { Dispatch, SetStateAction, ChangeEvent } from "react"
import type { HallOfFameItem } from "@/components/blocks/HallOfFameCard/useHallOfFame"

export function handleEdit(
    item: HallOfFameItem,
    setEditingId: Dispatch<SetStateAction<HallOfFameItem["id"] | null>>,
    setEditData: Dispatch<SetStateAction<Partial<HallOfFameItem>>>,
    setEditDialogOpen: Dispatch<SetStateAction<boolean>>,
) {
    setEditingId(item.id);
    setEditData({ ...item });
    setEditDialogOpen(true);
}

export function handleDeleteClick(
    id: HallOfFameItem["id"],
    setDeletingId: Dispatch<SetStateAction<HallOfFameItem["id"] | null>>,
    setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>,
) {
    setDeletingId(id);
    setDeleteConfirmOpen(true);
}

export function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    editData: Partial<HallOfFameItem>,
    setEditData: Dispatch<SetStateAction<Partial<HallOfFameItem>>>,
) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
}
