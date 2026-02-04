"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { useHallofFame } from "@/components/blocks/HallOfFameCard/useHallOfFame"
import { HallofFameCard } from "@/components/blocks/HallOfFameCard/HallOfFameCard"
import { EditHallOfFameDialog } from "@/components/blocks/HallOfFameCard/EditHallOFFameDialog"
import { DeleteConfirmation } from "@/components/blocks/admin-data/DeleteConfirmation"

export default function Page() {
    const {
        hallofame,
        editingId,
        editData,
        editDialogOpen,
        setEditDialogOpen,
        deleteConfirmOpen,
        setDeleteConfirmOpen,
        deletinghallofameId,
        setDeletinghallofameId,
        handlers,
    } = useHallofFame();

    return (
        <>
            <div className="p-2 md:p-6 lg:p-10 max-w-full overflow-x-auto bg-background min-h-screen">
                <SidebarTrigger style={{ cursor: 'pointer' }} />

                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Hall Of Fame Dashboard</h1>
                <p className="mb-4 md:mb-6 text-base md:text-lg">
                    Welcome to the admin dashboard. Here you can manage your application.
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.isArray(hallofame) && hallofame.length > 0 ? (
                        hallofame.map((hallofame) => (
                            <HallofFameCard
                                key={hallofame.id}
                                fame={hallofame}
                                onEdit={handlers.edit}
                                onDelete={handlers.deleteClick}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500 py-8">No members found.</div>
                    )}
                </div>

                {/* Delete Confirmation Alert */}
                <DeleteConfirmation
                    open={deleteConfirmOpen}
                    onConfirm={handlers.confirmDelete}
                    onCancel={() => {
                        setDeleteConfirmOpen(false);
                        setDeletinghallofameId(null);
                    }}
                />

                {/* Edit Dialog */}
                <EditHallOfFameDialog
                    open={editDialogOpen}
                    onOpenChange={setEditDialogOpen}
                    editData={editData}
                    onInputChange={handlers.inputChange}
                    onSave={handlers.save}
                />
            </div>
        </>
    )
}
