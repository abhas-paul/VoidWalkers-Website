import SupaClient from "@/lib/supabase/createClient"

import type { Dispatch, SetStateAction } from "react"
import type { HallOfFameItem } from "@/components/blocks/HallOfFameCard/useHallOfFame"

export async function handleConfirmDelete(
    id: HallOfFameItem["id"] | null,
    data: HallOfFameItem[],
    setData: Dispatch<SetStateAction<HallOfFameItem[]>>,
    setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>,
    setDeletingId: Dispatch<SetStateAction<HallOfFameItem["id"] | null>>,
) {
    if (!id) return

    const { error } = await SupaClient.from("hall-of-fame").delete().eq("id", id);

    if (!error) {
        setData(data.filter((item) => item.id !== id));
        setDeleteConfirmOpen(false);
        setDeletingId(null);
    } else {
        console.error("Failed to delete from Hall of Fame:", error);
    }
}
