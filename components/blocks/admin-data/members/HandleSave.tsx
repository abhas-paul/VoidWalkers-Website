import SupaClient from "@/lib/supabase/createClient"

import type { Dispatch, SetStateAction } from "react"
import type { MemberItem } from "@/components/blocks/MemberCard/useMembers"

export async function handleSave(
    editingId: MemberItem["id"] | null,
    editData: Partial<MemberItem>,
    members: MemberItem[],
    setMembers: Dispatch<SetStateAction<MemberItem[]>>,
    setEditingId: Dispatch<SetStateAction<MemberItem["id"] | null>>,
    setEditDialogOpen: Dispatch<SetStateAction<boolean>>,
) {
    if (!editingId) return

    const { error } = await SupaClient.from("members").update(editData).eq("id", editingId);

    if (!error) {
        setMembers(members.map((m) => (m.id === editingId ? { ...m, ...editData } : m)));
        setEditingId(null);
        setEditDialogOpen(false);
    } else {
        console.error("Failed to update member:", error);
    }
}
