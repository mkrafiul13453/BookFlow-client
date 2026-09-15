"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  BookOpen,
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Library,
  CircleHelp,
  Info,
  Mail,
  LogOut,
  LogIn,
} from "lucide-react";

import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { authClient } from "@/lib/auth-client";

import {
  Avatar,
  Dropdown,
  Label,
} from "@heroui/react";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  // console.log(user);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Logout
  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      closeMobileMenu();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const role = user?.role || "user";

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

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] font-medium whitespace-nowrap transition-all duration-200`}
                >
                  <Icon size={17} />

                  <span>{link.name}</span>
                </Link>
              );
            })}

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="ml-5 flex items-center gap-2 border-l border-slate-200 pl-5 dark:border-slate-800">
            {/* Cart Icon */}
            <CartIcon cartCount={3} />

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

            {/* =================================================
                LOGIN / USER DROPDOWN
            ================================================== */}

            {user ? (
              <Dropdown>

                <Dropdown.Trigger className="rounded-full">
                  <Avatar
                    size="sm"
                    aria-label="Menu"
                  >
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name || "User"}
                      src={user?.image}
                    />

                    <Avatar.Fallback>
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>

                <Dropdown.Popover>

                  <div className="px-3 pt-3 pb-1">

                    <div className="flex items-center gap-2">

                      <Avatar size="sm">

                        <Avatar.Image
                          alt={user?.name}
                          src={user?.image}
                        />

                        <Avatar.Fallback delayMs={600}>
                          {user?.name?.charAt(0)}
                        </Avatar.Fallback>

                      </Avatar>

                      <div className="flex flex-col gap-0">

                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>

                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>

                      </div>

                    </div>

                  </div>

                  <Dropdown.Menu
                    onAction={(key) =>
                      console.log(`Selected: ${key}`)
                    }
                  >

                    <Dropdown.Item
                      id="new-file"
                      textValue="New file"
                    >

                      <Link
                        className="flex items-center gap-2"
                        href={`/dashboard/${role}`}
                      >
                        <MdDashboard />

                        <Label>
                          Dashboard
                        </Label>
                      </Link>

                    </Dropdown.Item>

                    <Dropdown.Item
                      id="copy-link"
                      textValue="Copy link"
                    >
                      <CgProfile />

                      <Label>
                        Profile
                      </Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="delete-file"
                      textValue="Delete file"
                      variant="danger"
                      onClick={handleSignOut}
                    >
                      <LogOut size={17} />

                      <Label>
                        Logout
                      </Label>
                    </Dropdown.Item>

                  </Dropdown.Menu>

                </Dropdown.Popover>

              </Dropdown>
            ) : (
              <Link
                href="/login"
                className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
              >
                <LogIn size={17} />

                <span>
                  Login
                </span>
              </Link>
            )}

          </div>

        </div>

        {/* =================================================
            MOBILE / TABLET ACTIONS
        ================================================== */}

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          {/* Cart Icon */}
          <CartIcon cartCount={3} />

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

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition`}
                  >
                    <Icon size={18} />

                    <span>
                      {link.name}
                    </span>
                  </Link>
                );
              })}

            </div>

            {/* Mobile Login / Logout */}

            <div className="mt-3 border-t border-slate-200 pt-3 dark:border-slate-800">

              {user ? (
                <div className="flex flex-col gap-2">

                  {/* Mobile Dashboard */}

                  <Link
                    href={`/dashboard/${role}`}
                    onClick={closeMobileMenu}
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <MdDashboard size={18} />

                    Dashboard
                  </Link>

                  {/* Mobile Profile */}

                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <CgProfile size={18} />

                    Profile
                  </Link>

                  {/* Mobile Logout */}

                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <LogOut size={17} />

                    Logout
                  </button>

                </div>
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