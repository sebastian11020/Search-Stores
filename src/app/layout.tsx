"use client";
import "@/styles/globals.css";
import AuthLayout from "@/components/layout/authLayout";
import DashboardLayout from "@/components/layout/dashboardLayout";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const authPaths = ["/login", "/register", "/forgot-password"];
    const isAuthPage = authPaths.includes(pathname);

    const isDashboardPage = pathname.startsWith("/dashboard");

    if (pathname === "/") {
        return null;
    }

    return (
        <html lang="es">
        <body>
        {isAuthPage ? (
            <AuthLayout>{children}</AuthLayout>
        ) : isDashboardPage ? (
            <DashboardLayout>{children}</DashboardLayout>
        ) : (
            children
        )}
        </body>
        </html>
    );
}
