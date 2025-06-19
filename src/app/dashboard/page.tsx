"use client"

import React, { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ExampleChart } from "@/components/ExampleChart"
import { ExampleLineChart } from "@/components/ExampleLineChart"
import { ExampleRadarChart } from "@/components/ExampleRadarChart"
import { ExampleAreaChart } from "@/components/ExampleAreaChart"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/SiteHeader"
import { ChartCard } from "@/components/ChartCard"

import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from "@dnd-kit/sortable"

export default function Page() {
    const [items, setItems] = React.useState([
        "area-chart",
        "bar-chart",
        "line-chart",
        "radar-chart",
    ])

    const [editActive, setEditActive] = React.useState(false)

    let title = "Chart"

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: editActive
                ? undefined
                : { distance: Infinity }, // effectively disables dragging when not editing
        })
    )

    function handleDragEnd(event: any) {
        const { active, over } = event
        if (!editActive) return // no dragging if not editing
        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id)
                const newIndex = items.indexOf(over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar />

            <div className="flex flex-1 flex-col">
                <SiteHeader
                    title="Dashboard"
                    editable={true}
                    editActive={editActive}
                    setEditActive={setEditActive}
                />

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    // you can also disable drag overlay or other props if needed
                >
                    <SortableContext items={items} strategy={rectSortingStrategy}>
                        <main className="@container/main flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6 bg-muted">
                            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {items.map((id) => {
                                    let ChartComponent = null
                                    switch (id) {
                                        case "area-chart":
                                            ChartComponent = ExampleAreaChart
                                            title = "Area Chart"
                                            break
                                        case "bar-chart":
                                            ChartComponent = ExampleChart
                                            title = "Bar Chart"
                                            break
                                        case "line-chart":
                                            ChartComponent = ExampleLineChart
                                            title = "Line Chart"
                                            break
                                        case "radar-chart":
                                            ChartComponent = ExampleRadarChart
                                            title = "Radar Chart"
                                            break
                                    }
                                    return (
                                        <ChartCard key={id} id={id} editActive={editActive} title={title}>
                                            {ChartComponent && <ChartComponent />}
                                        </ChartCard>
                                    )
                                })}
                            </section>
                        </main>
                    </SortableContext>
                </DndContext>
            </div>
        </SidebarProvider>
    )
}
