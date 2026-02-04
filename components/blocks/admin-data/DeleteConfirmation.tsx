import { Button } from "@/components/ui/button"
import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

type DeleteConfirmationProps = {
    open: boolean
    onConfirm: () => void
    onCancel: () => void
}

export function DeleteConfirmation({ open, onConfirm, onCancel }: DeleteConfirmationProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] flex items-start justify-end p-6">
            <div className="pointer-events-auto">
                <Alert className="max-w-md">
                    <AlertTitle>Delete?</AlertTitle>
                    <AlertDescription>
                        Are you sure you want to delete this data? This action cannot be undone.
                    </AlertDescription>
                    <AlertAction>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" style={{ cursor: 'pointer' }} onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button size="sm" style={{ cursor: 'pointer' }} variant="destructive" onClick={onConfirm}>
                                Delete
                            </Button>
                        </div>
                    </AlertAction>
                </Alert>
            </div>
        </div>
    )
}
