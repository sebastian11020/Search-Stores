"use client";
import "@/styles/globals.css";
import AuthLayout from "@/components/layout/authLayout";
import {usePathname} from "next/navigation";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const excludePaths =["/", "/dashboard"];
    return (
        <html lang="es">
        <body>
        {!excludePaths.includes(pathname)&&<AuthLayout>{children}</AuthLayout>}
        {children}
        </body>
        </html>
    );
}
