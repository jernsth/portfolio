import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TechyBackground } from "@/components/shared/TechyBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jonas Hermsen — Backend Developer",
    template: "%s · Jonas Hermsen",
  },
  description:
    "Backend developer in Aachen, Germany. Java, Spring Boot and microservices at m3connect, computer science at RWTH Aachen.",
  keywords: [
    "Jonas Hermsen",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Microservices",
    "Next.js",
    "Aachen",
  ],
  authors: [{ name: "Jonas Hermsen", url: "https://www.github.com/jernsth" }],
  creator: "Jonas Hermsen",
  openGraph: {
    type: "profile",
    locale: "en_US",
    title: "Jonas Hermsen — Backend Developer",
    description:
      "Backend developer in Aachen, Germany. Java, Spring Boot and microservices.",
    siteName: "Jonas Hermsen",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1b21" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        // suppressHydrationWarning is required by next-themes: it writes the theme
        // class onto <html> before React hydrates.
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TechyBackground />
            <div className="relative z-[1]">
                <SidebarProvider
                    style={
                        {
                            "--sidebar-width": "calc(var(--spacing) * 72)",
                            "--header-height": "calc(var(--spacing) * 12)",
                        } as React.CSSProperties
                    }
                >
                    <div className="flex min-h-screen w-full">
                        <AppSidebar />
                        <main className="min-w-0 flex-1">{children}</main>
                    </div>
                </SidebarProvider>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
