'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchMembers } from '@/components/www/SupabaseFetch';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


const MemberDataCards = () => {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        const getMembers = async () => {
            try {
                const data: Member[] = await fetchMembers();
                setMembers(data);
            } catch (error) {
                console.error(error);
            }
        };

        getMembers();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {members.map((member) => (
                <Card
                    key={member.id}
                    className="bg-black/40 border border-purple-500/20 backdrop-blur-md text-white"
                >
                    <CardHeader className="items-center text-center">
                        <Image
                            src={member.imgUri}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-24 h-24 rounded-full object-cover border border-purple-400 mb-3"
                            unoptimized
                        />

                        <CardTitle className="text-lg">
                            {member.name}
                        </CardTitle>

                        <p className="text-sm text-purple-300">
                            @{member.nickname}
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-3 text-sm">
                        <div>
                            <span className="font-semibold text-purple-400">
                                Strengths:
                            </span>
                            <p className="whitespace-pre-line">
                                {member.Strengths}
                            </p>
                        </div>

                        <div>
                            <span className="font-semibold text-purple-400">
                                Hackathon Role:
                            </span>
                            <p>{member.hackathonRole}</p>
                        </div>

                        <div>
                            <span className="font-semibold text-purple-400">
                                CTF Role:
                            </span>
                            <p>{member.ctfRole}</p>
                        </div>

                        <div>
                            <span className="font-semibold text-purple-400">
                                History:
                            </span>
                            <p>{member.history}</p>
                        </div>

                        <div>
                            <span className="font-semibold text-purple-400">
                                Fun Fact:
                            </span>
                            <p>{member.funfact}</p>
                        </div>

                        <div>
                            <span className="font-semibold text-purple-400">
                                Special Message:
                            </span>
                            <p className="italic text-purple-200">
                                “{member.specialmessage}”
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default MemberDataCards;
