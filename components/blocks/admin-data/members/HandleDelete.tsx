import SupaClient from "@/lib/supabase/createClient"

export async function handleConfirmDelete(deletingMemberId, members, setMembers, setDeleteConfirmOpen, setDeletingMemberId) {
    if (deletingMemberId) {
        const { error } = await SupaClient.from('members').delete().eq('id', deletingMemberId);
        if (!error) {
            setMembers(members.filter(m => m.id !== deletingMemberId));
            setDeleteConfirmOpen(false);
            setDeletingMemberId(null);
        } else {
            console.error("Failed to delete member:", error);
        }
    }
}
