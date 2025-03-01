import type { ReactNode } from "react";
interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
    return (
        <header className="flex flex-col items-center gap-2 mb-4 bg-slate-800 rounded-lg p-6 text-white ">
            <img {...image} className="size-28 rounded-full object-cover border-2" />
            {children}
        </header>
    );
};

export default Header;
