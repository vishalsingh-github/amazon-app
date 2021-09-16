import React from 'react'

function MessageBox({varient, children}) {
    return (
        <div className={`alert alert-${varient || "info"}`}>
            {children}
        </div>
    )
}

export default MessageBox
