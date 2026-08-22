"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Home, LayoutDashboard, BookCheck, HandMetal } from "lucide-react"
import { DarkModeSwitch } from "@/components/DarkModeSwitch"

const itemsMain = [
    { title: "Home", url: "/", icon: Home },
    { title: "Projects", url: "/projects", icon: BookCheck },
    { title: "About Me", url: "/about", icon: HandMetal },
]

const itemsTesting = [
    { title: "Sample Dashboard", url: "/dashboard", icon: LayoutDashboard },
]

export function AppSidebar() {
    const pathname = usePathname()

    // "/" must match exactly, everything else also matches its sub-routes.
    const isActive = (url: string) =>
        url === "/" ? pathname === "/" : pathname.startsWith(url)

    const renderItems = (items: typeof itemsMain) => (
        <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive(item.url)}>
                        <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-sidebar-border">
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-sidebar-accent"
                >
                    <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-sidebar-border">
                        <Image
                            src="/images/profile_picture.jpeg"
                            alt=""
                            fill
                            sizes="36px"
                            className="object-cover"
                        />
                    </span>
                    <span className="flex min-w-0 flex-col leading-tight">
                        <span className="truncate text-sm font-semibold">Jonas Hermsen</span>
                        <span className="truncate text-xs text-muted-foreground">
                            Backend Developer
                        </span>
                    </span>
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Site</SidebarGroupLabel>
                    <SidebarGroupContent>{renderItems(itemsMain)}</SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Try it out</SidebarGroupLabel>
                    <SidebarGroupContent>{renderItems(itemsTesting)}</SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="gap-3 border-t border-sidebar-border p-4">
                <DarkModeSwitch />
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Jonas Hermsen
                </p>
            </SidebarFooter>
        </Sidebar>
    )
}
