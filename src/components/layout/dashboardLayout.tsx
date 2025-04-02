"use client";
import Header from "@/components/ui/header";
import Verticalmenu from "@/components/ui/verticalmenu";
export default function DashboardLayout({children}:{children:React.ReactNode}){
    return (
        <div className="flex flex-col h-screen">
            <header>
                <Header />
            </header>
            <div className="flex flex-1">
                <aside className="w-64 h-full min-h-screen p-4">
                    <Verticalmenu/>
                </aside>
                {children}
            </div>
        </div>
    )
}
