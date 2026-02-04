import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import type { ChangeEvent } from "react"
import type { EventItem } from "@/components/blocks/LiveEventsCard/useEvents"

type EditEventDialogProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    editData: Partial<EventItem>
    onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onSave: () => void
}

export function EditEventDialog({ open, onOpenChange, editData, onInputChange, onSave }: EditEventDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-w-lg w-full">
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit Event</AlertDialogTitle>
                </AlertDialogHeader>
                <form onSubmit={e => { e.preventDefault(); onSave(); }} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Topic</label>
                            <input name="Topic" value={editData.Topic || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <input name="Description" value={editData.Description || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Judges</label>
                            <input name="Judges" value={editData.Judges || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Mode</label>
                            <input name="Mode" value={editData.Mode || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Prizepool</label>
                            <input name="Prizepool" value={editData.Prizepool || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Requirement</label>
                            <input name="Requirement" value={editData.Requirement || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Sponsors</label>
                            <input name="Sponsors" value={editData.Sponsors || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Venue</label>
                            <input name="Venue" value={editData.Venue || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Image URI</label>
                            <input name="imguri" value={editData.imguri || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                    </div>
                    <AlertDialogFooter className="pt-4 flex flex-row gap-2 justify-end">
                        <AlertDialogCancel style={{ cursor: 'pointer' }} type="button" onClick={() => onOpenChange(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction style={{ cursor: 'pointer' }} type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Save</AlertDialogAction>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}
