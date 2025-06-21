"use client"

import {type ChartConfig, ChartContainer, ChartTooltip, ChartLegend, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
    },
    mobile: {
        label: "Mobile",
    },
} satisfies ChartConfig

export function ExampleChart() {
    return (
            <ChartContainer config={chartConfig} className="min-h-[400px] w-full max-w-4xl mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="desktop" fill="var(--chart-1)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--chart-2)" radius={4} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
    )
}