import type { Dispatch, SetStateAction, ChangeEvent } from "react"
import type { MemberItem } from "@/components/blocks/MemberCard/useMembers"

export function handleEdit(
    member: MemberItem,
    setEditingId: Dispatch<SetStateAction<MemberItem["id"] | null>>,
    setEditData: Dispatch<SetStateAction<Partial<MemberItem>>>,
    setEditDialogOpen: Dispatch<SetStateAction<boolean>>,
) {
    setEditingId(member.id);
    setEditData({ ...member });
    setEditDialogOpen(true);
}

export function handleDeleteClick(
    id: MemberItem["id"],
    setDeletingMemberId: Dispatch<SetStateAction<MemberItem["id"] | null>>,
    setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>,
) {
    setDeletingMemberId(id);
    setDeleteConfirmOpen(true);
}

export function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    editData: Partial<MemberItem>,
    setEditData: Dispatch<SetStateAction<Partial<MemberItem>>>,
) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
}
