'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }: any) {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <Link className="bg-blue-500" href="/dashboard/about">About</Link>
                <br/>
                <Link className="bg-blue-500" href="/dashboard/settings">Settings</Link>
            </div>
            <h1>Layout {count}</h1>
            <button className="cursor-pointer border p-1 bg-red-400" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {children}
        </>
    )
}