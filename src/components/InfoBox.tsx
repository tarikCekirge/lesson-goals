import { type ReactNode } from 'react'

type InfoBoxProps = {
    mode: 'hint';
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning';
    severity: "low" | "medium" | "high";
    children: ReactNode
}

type InpoBlockProps = WarningBoxProps | InfoBoxProps


const InfoBox = (props: InpoBlockProps) => {
    const { mode, children } = props
    if (mode === 'hint') {
        return (
            <aside className='bg-amber-200 text-xl text-center p-3 rounded-md'>
                <p>{children}</p>
            </aside>
        )
    }

    const { severity } = props
    return (
        <aside className={`border text-xl text-center p-3 rounded-md text-amber-500 mb-4 severity-${severity}`}>
            <h2 className='text-2xl font-bold'>Error</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox