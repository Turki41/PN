interface MagicButtonProps {
    title?: string;
    icon?: React.ReactNode;
    position?: 'left' | 'right';
    handleClick?: () => void;
    className?: string;
    rounded?: string,
}

const MagicButton = ({title, icon, position, handleClick, className, rounded}: MagicButtonProps) => {
    return (
        <button className={`relative w-full inline-flex h-12 overflow-hidden transition-all p-[1px] ${rounded} focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center bg-slate-950 hover:bg-slate-950/80 transition-all py-1 text-white backdrop-blur-3xl ${className}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton