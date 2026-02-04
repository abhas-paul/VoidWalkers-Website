import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function HallofFameCard({ fame, onEdit, onDelete }) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{fame.Topic}</CardTitle>
                        <CardDescription className="text-xs mt-1">ID: {fame.id}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow pb-3 space-y-2 text-sm">
                <div><span className="font-semibold">Fametype:</span> {fame.Fametype}</div>
                <div><span className="font-semibold">Date:</span> {fame.Date}</div>
                <div><span className="font-semibold">Bio:</span> {fame.Bio}</div>
                <div className="text-xs truncate"><span className="font-semibold">Image:</span> {fame.imguri}</div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-3 border-t">
                <Button variant="outline" size="sm" style={{ cursor: 'pointer' }} className="flex-1" onClick={() => onEdit(fame)}>Edit</Button>
                <Button variant="destructive" style={{ cursor: 'pointer' }} size="sm" className="flex-1" onClick={() => onDelete(fame.id)}>Delete</Button>
            </CardFooter>
        </Card>
    )
}

