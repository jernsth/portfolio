import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Home, LayoutDashboard, BookCheck, HandMetal} from "lucide-react"
import {DarkModeSwitch} from "@/components/DarkModeSwitch";

const itemsMain = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: BookCheck,
    },
    {
        title: "About Me",
        url: "/about",
        icon: HandMetal,
    },
]

const itemsTesting = [
    {
        title: "Sample Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Site</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Try it out</SidebarGroupLabel>
                    {itemsTesting.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarGroup>
                <footer className="p-4 text-center">
                    <DarkModeSwitch />
                    <p className="text-sm text-gray-500 mt-2">© 2025 Jonas Hermsen</p>
                </footer>
            </SidebarContent>
        </Sidebar>
    )
}