import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"

export function EditMemberDialog({ open, onOpenChange, editData, onInputChange, onSave }) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-w-lg w-full">
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit Member</AlertDialogTitle>
                </AlertDialogHeader>
                <form onSubmit={e => { e.preventDefault(); onSave(); }} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input name="name" value={editData.name || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Nickname</label>
                            <input name="nickname" value={editData.nickname || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Special Message</label>
                            <input name="specialmessage" value={editData.specialmessage || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Fun Fact</label>
                            <input name="funfact" value={editData.funfact || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Hackathon Role</label>
                            <input name="hackathonRole" value={editData.hackathonRole || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">CTF Role</label>
                            <input name="ctfRole" value={editData.ctfRole || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Strengths</label>
                            <input name="Strengths" value={editData.Strengths || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">History</label>
                            <input name="history" value={editData.history || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Image URI</label>
                            <input name="imgUri" value={editData.imgUri || ''} onChange={onInputChange} className="w-full border rounded px-2 py-1" />
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
