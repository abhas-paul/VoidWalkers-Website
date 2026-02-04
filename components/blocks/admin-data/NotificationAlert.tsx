import { Button } from "@/components/ui/button"
import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

interface NotificationAlertProps {
    open: boolean;
    title: string;
    message: string;
    variant?: 'success' | 'error' | 'info';
    onClose: () => void;
}

export function NotificationAlert({ open, title, message, variant = 'info', onClose }: NotificationAlertProps) {
    if (!open) return null;

    const variantStyles = {
        success: 'border-green-500 bg-green-50 dark:bg-green-950',
        error: 'border-red-500 bg-red-50 dark:bg-red-950',
        info: 'border-blue-500 bg-blue-50 dark:bg-blue-950'
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] flex items-start justify-end p-6">
            <div className="pointer-events-auto">
                <Alert className={`max-w-md ${variantStyles[variant]}`}>
                    <AlertTitle>{title}</AlertTitle>
                    <AlertDescription>
                        {message}
                    </AlertDescription>
                    <AlertAction>
                        <div className="flex gap-2">
                            <Button size="sm" style={{ cursor: 'pointer' }} onClick={onClose}>
                                OK
                            </Button>
                        </div>
                    </AlertAction>
                </Alert>
            </div>
        </div>
    )
}
