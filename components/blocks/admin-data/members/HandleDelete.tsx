import SupaClient from "@/lib/supabase/createClient"

import type { Dispatch, SetStateAction } from "react"
import type { MemberItem } from "@/components/blocks/MemberCard/useMembers"

export async function handleConfirmDelete(
    deletingMemberId: MemberItem["id"] | null,
    members: MemberItem[],
    setMembers: Dispatch<SetStateAction<MemberItem[]>>,
    setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>,
    setDeletingMemberId: Dispatch<SetStateAction<MemberItem["id"] | null>>,
) {
    if (!deletingMemberId) return

    const { error } = await SupaClient.from("members").delete().eq("id", deletingMemberId);

    if (!error) {
        setMembers(members.filter((m) => m.id !== deletingMemberId));
        setDeleteConfirmOpen(false);
        setDeletingMemberId(null);
    } else {
        console.error("Failed to delete member:", error);
    }
}
