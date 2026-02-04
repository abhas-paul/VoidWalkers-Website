import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function LiveEventCard({ event, onEdit, onDelete }) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{event.Topic}</CardTitle>
                        <CardDescription className="text-xs mt-1">ID: {event.id}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow pb-3 space-y-2 text-sm">
                <div><span className="font-semibold">Description:</span> {event.Description}</div>
                <div><span className="font-semibold">Judges:</span> {event.Judges}</div>
                <div><span className="font-semibold">Mode:</span> {event.Mode}</div>
                <div><span className="font-semibold">Prizepool:</span> {event.Prizepool}</div>
                <div><span className="font-semibold">Requirement:</span> {event.Requirement}</div>
                <div><span className="font-semibold">Sponsors:</span> {event.Sponsors}</div>
                <div><span className="font-semibold">Venue:</span> {event.Venue}</div>
                <div className="text-xs truncate"><span className="font-semibold">Image:</span> {event.imguri}</div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-3 border-t">
                <Button variant="outline" size="sm" style={{ cursor: 'pointer' }} className="flex-1" onClick={() => onEdit(event)}>Edit</Button>
                <Button variant="destructive" style={{ cursor: 'pointer' }} size="sm" className="flex-1" onClick={() => onDelete(event.id)}>Delete</Button>
            </CardFooter>
        </Card>
    )
}
