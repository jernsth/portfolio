import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ToggleEdit } from "@/components/ToggleEdit"

type Props = {
    title: string
    editable?: boolean
    editActive?: boolean
    setEditActive?: (active: boolean) => void
}

export function SiteHeader({ title, editable = false, editActive = false, setEditActive }: Props) {
    const showEdit = editable && setEditActive

    return (
        <header
            className="sticky top-0 z-40 flex h-(--header-height) shrink-0 items-center gap-2 border-b border-border/60 bg-background/70 backdrop-blur-md transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1"/>
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />
                {showEdit && <ToggleEdit onPressedChange={() => setEditActive(!editActive)}/>}
                {showEdit && <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                /> }
                {/* Not a heading: every page renders its own <h1> in the content. */}
                <span className="text-sm font-medium text-muted-foreground">{title}</span>
            </div>
        </header>
    );
}
