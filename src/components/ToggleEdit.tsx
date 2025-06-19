import { Edit } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

type Props = {
    onPressedChange?: (pressed: boolean) => void
}
export function ToggleEdit( { onPressedChange }: Props ) {
    return (
        <Toggle aria-label="Toggle Edit" onPressedChange={onPressedChange}>
            <Edit />
        </Toggle>
    )
}