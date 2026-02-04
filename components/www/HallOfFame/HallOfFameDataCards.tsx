'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchHallOfFame } from '@/components/www/SupabaseFetch';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type HallOfFame = {
    id: number | string;
    Topic: string;
    Fametype: string;
    Date: string;
    Bio: string;
    imguri: string;
};

const HallOfFameDataCards = () => {
    const [HallofFame, setHallofFame] = useState<HallOfFame[]>([]);

    useEffect(() => {
        const loadHallofFame = async () => {
            try {
                const data = await fetchHallOfFame() as HallOfFame[] | null;
                if (data) {
                    setHallofFame(data);
                }
                console.log('Fetched Hall of Fame data:', data);
            } catch (error) {
                console.error(error);
            }
        };

        void loadHallofFame();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {HallofFame.length === 0 ? (
                <p className="col-span-full text-center text-purple-300">
                    No Hall of Fame data available
                </p>
            ) : (
                HallofFame.map((HallofFame) => (
                    <Card
                        key={HallofFame.id}
                        className="bg-black/40 border border-purple-500/20 backdrop-blur-md text-white"
                    >
                        <CardHeader className="items-center text-center">
                            <Image
                                src={HallofFame.imguri}
                                alt={HallofFame.Topic}
                                width={400}
                                height={200}
                                className="w-full h-40 object-cover rounded-t-xl border-b border-purple-400"
                                unoptimized
                            />

                            <CardTitle className="text-lg">
                                {HallofFame.Topic}
                            </CardTitle>

                            <p className="text-sm text-purple-300">
                                @{HallofFame.Fametype}
                            </p>
                        </CardHeader>

                        <CardContent className="space-y-3 text-sm">
                            <div>
                                <span className="font-semibold text-purple-400">
                                    Date
                                </span>
                                <p>{HallofFame.Date}</p>
                            </div>

                            <div>
                                <span className="italic text-purple-400">
                                    Description:
                                </span>
                                <p>{HallofFame.Bio}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default HallOfFameDataCards;
