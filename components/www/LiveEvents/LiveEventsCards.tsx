'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchEvents } from '@/components/www/SupabaseFetch';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


const LiveEventsCards = () => {
    const [LiveEvents, setLiveEvents] = useState<LiveEvents[]>([]);

    useEffect(() => {
        const LiveEvents = async () => {
            try {
                const data: LiveEvents[] = await fetchEvents();
                setLiveEvents(data);
            } catch (error) {
                console.error(error);
            }
        };

        LiveEvents();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {LiveEvents.length === 0 ? (
                <p className="col-span-full text-center text-purple-300">
                    No live events available
                </p>
            ) : (
                LiveEvents.map((LiveEvents) => (
                    <Card
                        key={LiveEvents.id}
                        className="bg-black/40 border border-purple-500/20 backdrop-blur-md text-white"
                    >
                        <CardHeader className="p-0">
                            {/* Thumbnail */}
                            <div className="relative w-full aspect-[16/9] border-b border-purple-400">
                                <Image
                                    src={LiveEvents.imguri}
                                    alt={LiveEvents.Topic}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Text content */}
                            <div className="p-4 text-center">
                                <CardTitle className="text-lg">
                                    {LiveEvents.Topic}
                                </CardTitle>
                                <p className="text-sm text-purple-300">
                                    @{LiveEvents.Mode}
                                </p>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-3 text-sm">
                            <div>
                                <span className="font-semibold text-purple-400">Venue:</span>
                                <p className="whitespace-pre-line">{LiveEvents.Venue}</p>
                            </div>

                            <div>
                                <span className="font-semibold text-purple-400">Sponsors:</span>
                                <p>{LiveEvents.Sponsors}</p>
                            </div>

                            <div>
                                <span className="font-semibold text-purple-400">Judges:</span>
                                <p>{LiveEvents.Judges}</p>
                            </div>

                            <div>
                                <span className="font-semibold text-purple-400">Requirement:</span>
                                <p>{LiveEvents.Requirement}</p>
                            </div>

                            <div>
                                <span className="font-semibold text-purple-400">Prizepool:</span>
                                <p>{LiveEvents.Prizepool}</p>
                            </div>

                            <div>
                                <span className="font-semibold text-purple-400">Description:</span>
                                <p className="italic text-purple-200">
                                    {LiveEvents.Description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default LiveEventsCards;
