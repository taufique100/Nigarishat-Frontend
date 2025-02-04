import React from 'react'

export default function Dot({ color, size, label='' }) {
    return (
        <div className='d-flex align-items-center gap-1' style={{ color: color, fontSize: '12px' }}>
            <div style={{ backgroundColor: color, borderRadius: '50%', width: `${size ? size : '20px'}`, height: `${size ? size : '20px'}` }} />
            {label && <span>{label}</span>}
        </div>
    )
    // if (color === 'red') {
    // }
    // if (color === 'green') {
    //     return (
    //         <div className='d-flex align-items-center gap-1' style={{ color: color, fontSize: '14px' }}>
    //             <div style={{ backgroundColor: '#008000', borderRadius: '50%', width: `${size ? size : '20px'}`, height: `${size ? size : '20px'}` }} />
    //             {label && <span>{label}</span>}
    //         </div>
    //     )
    // }
    // if (color === 'yellow') {
    //     return (
    //         <div className='d-flex align-items-center gap-1' style={{ color: color, fontSize: '14px' }}>
    //             <div style={{ backgroundColor: '#ffde21', borderRadius: '50%', width: `${size ? size : '20px'}`, height: `${size ? size : '20px'}` }} />
    //             {label && <span>{label}</span>}
    //         </div>
    //     )
    // }
}
