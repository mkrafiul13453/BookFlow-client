"use client";

import Link from "next/link";
import { Button, Form, Label, ListBox ,Select} from "@heroui/react";
import {
  BookOpen,
  Loader2,
  ArrowRight,
  NotebookPen,
} from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { imageUpload } from "@/lib/imageUpload";

export default function SignUpPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // =========================================
  // EMAIL SIGN UP
  // =========================================
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());
      const image = await imageUpload(user?.image);
      
      // console.log(user);
      // return;

      await authClient.signUp.email({
        ...user,
        plan: "free",
        image,
      });

      // console.log("Signup successful:", result);

    toast.success("Successfully signed up!");
      router.push("/");
      router.refresh();
   
  };

  // =========================================
  // GOOGLE SIGN UP
  // =========================================
  const handleGoogleSignup = async () => {
    setGoogleLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google signup error:", error);

      setGoogleLoading(false);
    }
  };

  return (
    
    <main
      className="min-h-[calc(100vh-72px)] bg-slate-50 px-4 py-8 transition-colors duration-300 sm:px-6 sm:py-10 md:py-12 dark:bg-slate-950"
    >
      <div
        className="mx-auto flex w-full max-w-md flex-col items-center"
      >

        {/* =========================================
            BOOKFLOW BRAND
        ========================================== */}

        <Link
          href="/"
          className="mb-7 flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md"
          >
            <NotebookPen
              size={24}
              strokeWidth={2.5}
            />
          </div>

          <span
            className="
              text-2xl
              font-bold
              tracking-tight
            "
          >
            <span className="text-blue-600">
              Book
            </span>

            <span className="text-slate-800 dark:text-white">
              Flow
            </span>
          </span>
        </Link>

        {/* =========================================
            SIGN UP CARD
        ========================================== */}

        <div
          className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40 transition-colors duration-300 sm:p-7 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
        >

          {/* =========================================
              HEADING
          ========================================== */}

          <div className="mb-7 text-center">
            <h1
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
            >
              Create an account
            </h1>

            <p
              className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400"
            >
              Join BookFlow and start your reading
              journey.
            </p>
          </div>

          {/* =========================================
              GOOGLE SIGN UP
          ========================================== */}

          {/* <Button
            type="button"
            variant="secondary"
            className="h-11 w-full rounded-xl border border-slate-300 bg-white font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            onPress={handleGoogleSignup}
            isDisabled={googleLoading || loading}
          >
            {googleLoading ? (
              <Loader2
                size={18}
                className="animate-spin"
              />
            ) : (
              <GoogleIcon />
            )}

            <span>
              {googleLoading
                ? "Connecting..."
                : "Continue with Google"}
            </span>
          </Button> */}

          {/* =========================================
              DIVIDER
          ========================================== */}

          <div
            className="my-7 flex items-center gap-3"
          >
            <div
              className="h-px flex-1 bg-slate-200 dark:bg-slate-700"
            />

            <span
              className="text-xs font-medium uppercase tracking-wider text-slate-400"
            >
              OR
            </span>

            <div
              className="h-px flex-1 bg-slate-200 dark:bg-slate-700"
            />
          </div>

          {/* =========================================
              SIGN UP FORM
          ========================================== */}

          <Form
            onSubmit={onSubmit}
            className="w-full"
          >

            {/* =====================================
                FULL NAME
            ====================================== */}

            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="John Doe"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
              />
            </div>

            {/* =====================================
                PROFILE IMAGE URL
            ====================================== */}

            <div className="mb-5">
              <label
                
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                Profile Image 

                <span
                  className="
                    ml-1
                    font-normal
                    text-slate-400
                  "
                >
                  (Optional)
                </span>
              </label>

              <input
                id="image"
                name="image"
                type="file"
                autoComplete="url"
                placeholder="https://example.com/photo.jpg"
               className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
              />
            </div>

            {/* =====================================
                EMAIL
            ====================================== */}

            <div className="mb-5">
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
              />
            </div>

            {/* =====================================
                PASSWORD
            ====================================== */}

            <div className="mb-1">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="Create a password"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
              />

              <p
                className="
                  mt-2
                  text-xs
                  text-slate-400
                  dark:text-slate-500
                "
              >
                Password must be at least 8
                characters.
              </p>
            </div>
            {/* =====================================
                SIGNUP AS
            ====================================== */}
            <div className="mb-1">
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Signup As
              </label>

              <Select
                isRequired
                name="role"
                placeholder="Select one"
              >
                <Select.Trigger
                  id="role"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                >
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="librarian" textValue="librarian">
                      Librarian
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="user" textValue="user">
                      User
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
            {/* =====================================
                CREATE ACCOUNT BUTTON
            ====================================== */}

            <Button
              type="submit"
              className="mt-5 h-11 w-full rounded-xl bg-blue-600 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
              isDisabled={
                loading || googleLoading
              }
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />

                  Creating account...
                </>
              ) : (
                <>
                  Create Account

                  <ArrowRight size={18} />
                </>
              )}
            </Button>
          </Form>

          {/* =========================================
              LOGIN LINK
          ========================================== */}

          <div
            className="mt-7 border-t border-slate-200 pt-6 text-center dark:border-slate-800"
          >
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Already have an account?{" "}

              <Link
                href="/login"
                className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* =========================================
            COPYRIGHT
        ========================================== */}

        <p
          className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500"
        >
          © {new Date().getFullYear()} BookFlow.
          All rights reserved.
        </p>
      </div>
    </main>
  );
}

/* =========================================
   GOOGLE LOGO
========================================= */

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.23c0-.79-.07-1.55-.22-2.23H12v4.22h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.38z"
      />

      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.55 0-4.71-1.72-5.49-4.03H3.27v2.53A9.75 9.75 0 0 0 12 21.75z"
      />

      <path
        fill="#FBBC05"
        d="M6.51 13.85A5.86 5.86 0 0 1 6.2 12c0-.64.11-1.26.31-1.85V7.62H3.27A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.02 4.38l3.24-2.53z"
      />

      <path
        fill="#EA4335"
        d="M12 6.12c1.43 0 2.72.49 3.74 1.45l2.8-2.8C16.84 3.2 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.73 5.37l3.24 2.53 3.24 2.53C7.29 7.84 9.45 6.12 12 6.12z"
      />
    </svg>
  );
}