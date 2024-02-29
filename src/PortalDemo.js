import React from 'react'
import { createPortal } from 'react-dom'

function PortalDemo() {
    return createPortal(
        <h1>
            Portal Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo