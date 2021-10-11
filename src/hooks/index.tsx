import { useState } from 'react'

export const ToggleActiveHook = (activeStatus = false) => {
    const [active, setActive]: any = useState(activeStatus)
    return [active, setActive]
}