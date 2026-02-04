import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function MemberCard({ member, onEdit, onDelete }) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="text-xs mt-1">ID: {member.id}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow pb-3 space-y-2 text-sm">
                <div><span className="font-semibold">Nickname:</span> {member.nickname}</div>
                <div><span className="font-semibold">Message:</span> {member.specialmessage}</div>
                <div><span className="font-semibold">Fun Fact:</span> {member.funfact}</div>
                <div><span className="font-semibold">Hackathon:</span> {member.hackathonRole}</div>
                <div><span className="font-semibold">CTF:</span> {member.ctfRole}</div>
                <div><span className="font-semibold">Strengths:</span> {member.Strengths}</div>
                <div><span className="font-semibold">History:</span> {member.history}</div>
                <div className="text-xs truncate"><span className="font-semibold">Image:</span> {member.imgUri}</div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-3 border-t">
                <Button variant="outline" size="sm" style={{ cursor: 'pointer' }} className="flex-1" onClick={() => onEdit(member)}>Edit</Button>
                <Button variant="destructive" style={{ cursor: 'pointer' }} size="sm" className="flex-1" onClick={() => onDelete(member.id)}>Delete</Button>
            </CardFooter>
        </Card>
    )
}
