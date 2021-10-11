import { useState } from 'react'

export const useToggleActiveHook = (activeStatus = false) => {
    const [active, setActive] = useState(activeStatus)
    return [active, setActive]
}