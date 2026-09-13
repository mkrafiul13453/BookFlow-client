"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    Menu,
    X,
    LayoutDashboard,
    Plus,
    Boxes,
    Truck,
    History,
    BookMarked,
    Star,
    ClipboardCheck,
    Users,
    BookOpen,
    Receipt,
    ChevronLeft,
} from "lucide-react";

const DashboardSidebar = ({ role = "user" }) => {
    const pathname = usePathname();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Role based sidebar menu
    const sidebarMenus = {
        librarian: [
            {
                name: "Overview",
                href: "/dashboard/librarian",
                icon: LayoutDashboard,
            },
            {
                name: "Add Book",
                href: "/dashboard/librarian/add-book",
                icon: Plus,
            },
            {
                name: "Manage Inventory",
                href: "/dashboard/librarian/inventory",
                icon: Boxes,
            },
            {
                name: "Manage Deliveries",
                href: "/dashboard/librarian/deliveries",
                icon: Truck,
            },
        ],

        user: [
            {
                name: "Overview",
                href: "/dashboard/user",
                icon: LayoutDashboard,
            },
            {
                name: "Delivery History",
                href: "/dashboard/user/delivery-history",
                icon: History,
            },
            {
                name: "My Reading List",
                href: "/dashboard/user/reading-list",
                icon: BookMarked,
            },
            {
                name: "My Reviews",
                href: "/dashboard/user/reviews",
                icon: Star,
            },
        ],

        admin: [
            {
                name: "Overview",
                href: "/dashboard/admin",
                icon: LayoutDashboard,
            },
            {
                name: "Book Approval Queue",
                href: "/dashboard/admin/book-approval",
                icon: ClipboardCheck,
            },
            {
                name: "Manage Users",
                href: "/dashboard/admin/users",
                icon: Users,
            },
            {
                name: "Manage All Books",
                href: "/dashboard/admin/books",
                icon: BookOpen,
            },
            {
                name: "View All Transactions",
                href: "/dashboard/admin/transactions",
                icon: Receipt,
            },
        ],
    };

    const menuItems = sidebarMenus[role] || sidebarMenus.user;

    // Check active route
    const isActive = (href) => {
        if (href === `/dashboard/${role}`) {
            return pathname === href;
        }

        return pathname.startsWith(href);
    };

    // Close sidebar on mobile
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            {/* =================================================
          MOBILE MENU BUTTON
      ================================================== */}

            <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open dashboard menu"
                className="fixed top-[88px] left-4 z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
            >
                <Menu size={21} />
            </button>

            {/* =================================================
          MOBILE OVERLAY
      ================================================== */}

            {sidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
                />
            )}

            {/* =================================================
          SIDEBAR
      ================================================== */}

            <aside
                className={`fixed top-0 left-0 z-50 flex h-screen w-[280px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }`}
            >

                {/* =================================================
            SIDEBAR HEADER
        ================================================== */}

                <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 px-5 dark:border-slate-800">

                    <Link
                        href="/"
                        onClick={closeSidebar}
                        className="flex items-center gap-2.5"
                    >

                        {/* Logo */}

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                            <BookOpen
                                size={20}
                                strokeWidth={2.5}
                            />
                        </div>

                        {/* Logo Text */}

                        <span className="text-[21px] font-bold tracking-tight">
                            <span className="text-blue-600">
                                Book
                            </span>

                            <span className="text-slate-800 dark:text-white">
                                Flow
                            </span>
                        </span>

                    </Link>

                    {/* Mobile Close Button */}

                    <button
                        type="button"
                        onClick={closeSidebar}
                        aria-label="Close dashboard menu"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white lg:hidden"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* =================================================
            ROLE INFORMATION
        ================================================== */}

                <div className="px-4 pt-5">

                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">

                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Dashboard
                        </p>

                        <p className="mt-1 text-sm font-semibold capitalize text-slate-800 dark:text-white">
                            {role} Panel
                        </p>

                    </div>

                </div>

                {/* =================================================
            NAVIGATION
        ================================================== */}

                <nav className="flex-1 overflow-y-auto px-4 py-5">

                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Menu
                    </p>

                    <div className="space-y-1.5">

                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeSidebar}
                                    className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${active
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                                        }`}
                                >

                                    <Icon
                                        size={19}
                                        strokeWidth={active ? 2.3 : 2}
                                        className="shrink-0"
                                    />

                                    <span>
                                        {item.name}
                                    </span>

                                </Link>
                            );
                        })}

                    </div>

                </nav>

                {/* =================================================
            BACK TO HOME
        ================================================== */}

                <div className="shrink-0 border-t border-slate-200 p-4 dark:border-slate-800">

                    <Link
                        href="/"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                    >

                        <ChevronLeft size={19} />

                        <span>
                            Back to Home
                        </span>

                    </Link>

                </div>

            </aside>
        </>
    );
};

export default DashboardSidebar;