"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({ children }) {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const role = user?.role || "user";

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

            {/* ================================================
          DASHBOARD SIDEBAR
      ================================================= */}

            <DashboardSidebar role={role} />

            {/* ================================================
          PAGE CONTENT
      ================================================= */}

            <main className="min-h-screen lg:ml-[280px]">
                {children}
            </main>

        </div>
    );
}