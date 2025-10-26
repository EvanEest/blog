'use client'

import { useState } from 'react'

const DashboardTemplate = ({children}: any) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Template {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {children}
        </>
    )
};

export default DashboardTemplate;