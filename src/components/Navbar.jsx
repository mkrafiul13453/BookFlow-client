"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  BookOpen,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Home,
  Library,
  CircleHelp,
  Info,
  Mail,
  LayoutDashboard,
  User,
  ShieldCheck,
  LogOut,
  LogIn,
} from "lucide-react";

const Navbar = ({ user = null }) => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent dark/light mode hydration problem
  useEffect(() => {
    setMounted(true);
  }, []);

  // User role
  const role = user?.role || "user";

  // Main navigation
  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Browse Books",
      href: "/books",
      icon: Library,
    },
    {
      name: "How It Works",
      href: "/how-it-works",
      icon: CircleHelp,
    },
    {
      name: "About",
      href: "/about",
      icon: Info,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Mail,
    },
  ];

  // Dashboard links according to role
  const dashboardLinks = {
    user: [
      {
        name: "My Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "My Profile",
        href: "/dashboard/profile",
        icon: User,
      },
    ],

    admin: [
      {
        name: "Admin Dashboard",
        href: "/dashboard/admin",
        icon: ShieldCheck,
      },
      {
        name: "Manage Books",
        href: "/dashboard/admin/books",
        icon: Library,
      },
      {
        name: "Manage Users",
        href: "/dashboard/admin/users",
        icon: User,
      },
    ],

    librarian: [
      {
        name: "Librarian Dashboard",
        href: "/dashboard/librarian",
        icon: LayoutDashboard,
      },
      {
        name: "Manage Books",
        href: "/dashboard/librarian/books",
        icon: Library,
      },
    ],
  };

  const currentDashboardLinks =
    dashboardLinks[role] || dashboardLinks.user;

  // Active route
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDashboardOpen(false);
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">

      <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* =================================================
            LOGO
        ================================================== */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          {/* Logo Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition-transform duration-200 hover:scale-105">
            <BookOpen size={22} strokeWidth={2.5} />
          </div>

          {/* Logo Text */}
          <span className="text-[23px] font-bold tracking-tight">
            <span className="text-blue-600">Book</span>
            <span className="text-slate-800 dark:text-white">
              Flow
            </span>
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
            Only visible on XL screens
        ================================================== */}
        <div className="ml-auto hidden items-center xl:flex">

          {/* Main Links */}
          <div className="flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${active
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                    }`}
                >
                  <Icon
                    size={17}
                    strokeWidth={active ? 2.5 : 2}
                  />

                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* =================================================
                DASHBOARD
                ONLY SHOW WHEN USER IS LOGGED IN
            ================================================== */}
            {user && (
              <div className="relative ml-1">
                <button
                  type="button"
                  onClick={() =>
                    setDashboardOpen(!dashboardOpen)
                  }
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${pathname.startsWith("/dashboard")
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                    }`}
                >
                  <LayoutDashboard size={17} />

                  <span>Dashboard</span>

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${dashboardOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dashboard Dropdown */}
                {dashboardOpen && (
                  <div className="absolute right-0 top-[52px] w-60 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30">
                    {/* Role Badge */}
                    <div className="mb-1 border-b border-slate-100 px-3 py-2 dark:border-slate-800">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        {role} panel
                      </p>
                    </div>

                    {currentDashboardLinks.map((link) => {
                      const Icon = link.icon;

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() =>
                            setDashboardOpen(false)
                          }
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive(link.href)
                              ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                              : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                            }`}
                        >
                          <Icon size={17} />

                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div className="ml-5 flex items-center gap-2 border-l border-slate-200 pl-5 dark:border-slate-800">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {mounted && theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Login / Logout */}
            {user ? (
              <button
                type="button"
                onClick={() => {
                  // Replace this with your actual logout function
                  console.log("Logout clicked");
                }}
                className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
              >
                <LogOut size={17} />

                <span>Logout</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
              >
                <LogIn size={17} />

                <span>Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* =================================================
            MOBILE / TABLET ACTIONS
        ================================================== */}
        <div className="ml-auto flex items-center gap-2 xl:hidden">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
          >
            {mounted && theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================== */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 xl:hidden">

          <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">

            {/* Navigation Links */}
            <div className="space-y-1">

              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${active
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                  >
                    <Icon size={18} />

                    <span>{link.name}</span>
                  </Link>
                );
              })}

              {/* =================================================
                  MOBILE DASHBOARD
                  ONLY SHOW WHEN LOGGED IN
              ================================================== */}
              {user && (
                <div className="pt-1">

                  <button
                    type="button"
                    onClick={() =>
                      setDashboardOpen(!dashboardOpen)
                    }
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${pathname.startsWith("/dashboard")
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <LayoutDashboard size={18} />

                      Dashboard
                    </span>

                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-200 ${dashboardOpen
                          ? "rotate-180"
                          : ""
                        }`}
                    />
                  </button>

                  {/* Mobile Dashboard Items */}
                  {dashboardOpen && (
                    <div className="ml-5 mt-1 space-y-1 border-l-2 border-blue-100 pl-2 dark:border-blue-900">

                      {currentDashboardLinks.map(
                        (link) => {
                          const Icon = link.icon;

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMobileMenu}
                              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${isActive(link.href)
                                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                }`}
                            >
                              <Icon size={16} />

                              {link.name}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Login / Logout */}
            <div className="mt-3 border-t border-slate-200 pt-3 dark:border-slate-800">

              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    // Replace this with your actual logout function
                    console.log("Logout clicked");

                    closeMobileMenu();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <LogOut size={17} />

                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <LogIn size={17} />

                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;