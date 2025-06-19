"use client"

import React from "react"
import { cn } from "@/lib/utils"
import {Card, CardHeader, CardTitle} from "@/components/ui/card"
import {
    useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { motion } from "framer-motion"

import { Move } from "lucide-react"

type ChartCardProps = React.PropsWithChildren<{ className?: string; id: string; editActive?: boolean, title: string }>

export function ChartCard({ children, className, id, editActive, title }: ChartCardProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.8 : 1,
        cursor: editActive ? "grab" : "default",
    }

    return (
        <motion.div
            initial={false}
            animate={
                editActive
                    ? { scale: 1.02, rotate: 1, y: -4 }
                    : { scale: 1, rotate: 0, y: 0 }
            }
            transition={{ type: "spring", stiffness: 1000, damping: 10, duration: 0.6 }}
            >
            <Card
                ref={setNodeRef}
                style={style}
                className={cn(
                    "min-h-[400px] p-4 flex flex-col overflow-hidden select-none",
                    className
                )}
                {...attributes}
                {...listeners}
            >
                <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
                    <CardTitle className="text-lg font-medium">{title}</CardTitle>
                    { editActive && <Move className="w-4 h-4 text-muted-foreground cursor-move"/>}
                </CardHeader>
                {children}
            </Card>
        </motion.div>
    )
}