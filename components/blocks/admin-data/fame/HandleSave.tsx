import SupaClient from "@/lib/supabase/createClient"

import type { Dispatch, SetStateAction } from "react"
import type { HallOfFameItem } from "@/components/blocks/HallOfFameCard/useHallOfFame"

export async function handleSave(
    editingId: HallOfFameItem["id"] | null,
    editData: Partial<HallOfFameItem>,
    data: HallOfFameItem[],
    setData: Dispatch<SetStateAction<HallOfFameItem[]>>,
    setEditingId: Dispatch<SetStateAction<HallOfFameItem["id"] | null>>,
    setEditDialogOpen: Dispatch<SetStateAction<boolean>>,
) {
    if (!editingId) return

    const { error } = await SupaClient.from("hall-of-fame").update(editData).eq("id", editingId);

    if (!error) {
        setData(data.map((item) => (item.id === editingId ? { ...item, ...editData } : item)));
        setEditingId(null);
        setEditDialogOpen(false);
    } else {
        console.error("Failed to update Hall of Fame:", error);
    }
}
