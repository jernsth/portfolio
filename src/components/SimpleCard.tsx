import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link"

import React from "react"

type Props = {
    title: string,
    content: React.ReactNode,
    link?: string,
}

export function SimpleCard({title, content, link}: Props) {
    return (
        <Link href={link} className="block hover:no-underline">
            <Card className="w-full max-w-sm mx-auto shadow-md rounded-lg border border-primary/10 transition hover:shadow-lg hover:border-primary/20">
                <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground px-4 pb-4">
                    {content}
                </CardContent>
            </Card>
        </Link>

    )
}