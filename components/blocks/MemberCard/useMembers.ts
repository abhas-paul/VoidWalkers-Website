import { useEffect, useState, type ChangeEvent } from "react"
import { fetchMembers } from "@/components/blocks/admin-data/members/SupabaseTableFetch"
import { handleEdit, handleDeleteClick, handleInputChange } from "@/components/blocks/admin-data/members/HandleEdits"
import { handleSave } from "@/components/blocks/admin-data/members/HandleSave"
import { handleConfirmDelete } from "@/components/blocks/admin-data/members/HandleDelete"

export type MemberItem = {
    id: number | string
    name: string
    nickname: string
    specialmessage: string
    funfact: string
    hackathonRole: string
    ctfRole: string
    Strengths: string
    history: string
    imgUri: string
}

export function useMembers() {
    const [members, setMembers] = useState<MemberItem[]>([]);
    const [editingId, setEditingId] = useState<MemberItem["id"] | null>(null);
    const [editData, setEditData] = useState<Partial<MemberItem>>({});
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deletingMemberId, setDeletingMemberId] = useState<MemberItem["id"] | null>(null);

    const loadMembers = async () => {
        const data = await fetchMembers();
        if (data) setMembers(data);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            void loadMembers();
        }, 0);

        return () => clearTimeout(timeoutId);
    }, []);

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
            edit: (member: MemberItem) => handleEdit(member, setEditingId, setEditData, setEditDialogOpen),
            deleteClick: (id: MemberItem["id"]) => handleDeleteClick(id, setDeletingMemberId, setDeleteConfirmOpen),
            inputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleInputChange(e, editData, setEditData),
            save: () => handleSave(editingId, editData, members, setMembers, setEditingId, setEditDialogOpen),
            confirmDelete: () => handleConfirmDelete(deletingMemberId, members, setMembers, setDeleteConfirmOpen, setDeletingMemberId),
        },
    };
}
