import { useState } from 'react'

export const toggleActiveHook = (activeStatus = false) => {
    const [active, setActive] = useState(activeStatus)
    return [active, setActive]
}