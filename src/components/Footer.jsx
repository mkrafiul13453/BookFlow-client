"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";

export default function Footer() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto px-4">

        {/* Main Footer */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Book<span className="text-primary">Flow</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Discover your next favorite book with BookFlow.
              Browse, explore, and enjoy a seamless online
              book experience.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">

              <Link
                href="#"
                aria-label="Facebook"
                className="rounded-full border p-2.5 transition hover:bg-muted"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="rounded-full border p-2.5 transition hover:bg-muted"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="X"
                className="rounded-full border p-2.5 transition hover:bg-muted"
              >
                <FaXTwitter className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="rounded-full border p-2.5 transition hover:bg-muted"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-foreground"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-foreground"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-foreground"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition hover:text-foreground"
                >
                  Browse Books
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition hover:text-foreground"
                >
                  Categories
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h3>

            <p className="mb-4 text-sm leading-6 text-muted-foreground">
              Subscribe to receive the latest books, updates,
              and special offers.
            </p>

            {/* Frontend Only */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">

                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="email"
                  placeholder="Your email"
                  className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                />

              </div>

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:opacity-90"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-3 border-t py-6 text-center text-sm text-muted-foreground md:flex-row">

          <p>
            © {new Date().getFullYear()} BookFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              href="/about"
              className="transition hover:text-foreground"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-foreground"
            >
              Contact
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-foreground"
            >
              Privacy Policy
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}
