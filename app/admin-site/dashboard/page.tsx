import { SidebarTrigger } from "@/components/ui/sidebar"
import { SectionCards } from "@/components/layout/header-cards"
import { MemberData } from "@/components/layout/MemberData"
import { LiveEventsData } from "@/components/layout/LiveEventsData"
import { HallOfFameData } from "@/components/layout/HallOfFameData"

export default function Page() {
    return (

        <div className="p-6 md:p-10">
            <SidebarTrigger style={{ cursor: 'pointer' }} />

            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <p className="mb-6">
                Welcome to the admin dashboard. Here you can manage your application.
            </p>

            <div className="@container/main">
                <div className="py-4 md:py-6">
                    <SectionCards />
                </div>

                <div className="py-4 md:py-6 px-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="min-w-0 w-full max-w-none">
                            <MemberData />
                        </div>
                        <div className="min-w-0 w-full max-w-none">
                            <HallOfFameData />
                        </div>
                        <div className="min-w-0 w-full max-w-none">
                            <LiveEventsData />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
