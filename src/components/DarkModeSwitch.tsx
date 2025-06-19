"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export function DarkModeSwitch() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center space-x-2">
            <Switch
                id="switch-darkmode"
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <Label htmlFor="switch-darkmode">Switch to {theme === "dark" ? "Light Mode" : "Dark Mode"}</Label>
        </div>
    )
}