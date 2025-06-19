"use client"

import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts"

const data = [
    { subject: "Math", A: 120, B: 110, fullMark: 150 },
    { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
    { subject: "English", A: 86, B: 130, fullMark: 150 },
    { subject: "Geography", A: 99, B: 100, fullMark: 150 },
    { subject: "Physics", A: 85, B: 90, fullMark: 150 },
    { subject: "History", A: 65, B: 85, fullMark: 150 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ExampleRadarChart() {
    return (
            <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <defs>
                            <radialGradient id="colorA" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0} />
                                <stop offset="70%" stopColor="var(--primary)" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.8} />
                            </radialGradient>
                        </defs>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Radar
                            name="Mike"
                            dataKey="A"
                            stroke="var(--primary)"
                            fill="url(#colorA)"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </ChartContainer>
    )
}