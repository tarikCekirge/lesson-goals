import { type ReactNode } from 'react'

type InpoBlockProps = {
    mode: 'hint' | 'warning';
    severity?: "low" | "medium" | "high";
    children: ReactNode
}


const InfoBox = ({ mode, severity, children }: InpoBlockProps) => {
    if (mode === 'hint') {
        return (
            <aside className='bg-amber-200 text-xl text-center p-3 rounded-md'>
                <p>{children}</p>
            </aside>
        )
    }

    return (
        <aside className={`border text-xl text-center p-3 rounded-md text-amber-500 mb-4 severity-${severity}`}>
            <h2 className='text-2xl font-bold'>Error</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox