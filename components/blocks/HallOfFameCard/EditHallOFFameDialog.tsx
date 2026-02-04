import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"

export function EditHallOfFameDialog({ open, onOpenChange, editData, onInputChange, onSave }) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-w-lg w-full">
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit Fame</AlertDialogTitle>
                </AlertDialogHeader>
                <form onSubmit={e => { e.preventDefault(); onSave(); }} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Topic</label>
                            <input name="Topic" value={editData.Topic || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Fametype</label>
                            <input name="Fametype" value={editData.Fametype || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Date</label>
                            <input name="Date" value={editData.Date || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Bio</label>
                            <input name="Bio" value={editData.Bio || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
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
