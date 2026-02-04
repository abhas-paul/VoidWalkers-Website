"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { useEvents } from "@/components/blocks/LiveEventsCard/useEvents"
import { LiveEventCard } from "@/components/blocks/LiveEventsCard/LiveEventCard"
import { EditEventDialog } from "@/components/blocks/LiveEventsCard/EditEventDialog"
import { DeleteConfirmation } from "@/components/blocks/admin-data/DeleteConfirmation"

export default function Page() {
  const {
    events,
    editingId,
    editData,
    editDialogOpen,
    setEditDialogOpen,
    deleteConfirmOpen,
    setDeleteConfirmOpen,
    deletingEventId,
    setDeletingEventId,
    handlers,
  } = useEvents();

  return (
    <>
      <div className="p-2 md:p-6 lg:p-10 max-w-full overflow-x-auto bg-background min-h-screen">
        <SidebarTrigger style={{ cursor: 'pointer' }} />

        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Live Events Dashboard</h1>
        <p className="mb-4 md:mb-6 text-base md:text-lg">
          Welcome to the live events dashboard. Here you can manage your events.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(events) && events.length > 0 ? (
            events.map((event) => (
              <LiveEventCard
                key={event.id}
                event={event}
                onEdit={handlers.edit}
                onDelete={handlers.deleteClick}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">No events found.</div>
          )}
        </div>

        {/* Delete Confirmation Alert */}
        <DeleteConfirmation
          open={deleteConfirmOpen}
          onConfirm={handlers.confirmDelete}
          onCancel={() => {
            setDeleteConfirmOpen(false);
            setDeletingEventId(null);
          }}
        />

        {/* Edit Dialog */}
        <EditEventDialog
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
