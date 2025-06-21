"use client"

import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartLegend,
    ChartTooltipContent,
    ChartLegendContent,
} from "@/components/ui/chart"
import {
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    ResponsiveContainer,
} from "recharts"

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

export function ExampleLineChart() {
    return (
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
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
                        <Line
                            type="monotone"
                            dataKey="desktop"
                            stroke="var(--chart-1)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="mobile"
                            stroke="var(--chart-2)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
    )
}
