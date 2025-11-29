interface MagicButtonProps {
    title: string;
    icon?: React.ReactNode;
    position: 'left' | 'right';
    handleClick?: () => void;
    className?: string;
}

const MagicButton = ({title, icon, position, handleClick, className}: MagicButtonProps) => {
    return (
        <button className="relative w-full inline-flex h-12 overflow-hidden transition-all rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full gap-2 px-7 cursor-pointer items-center justify-center rounded-lg bg-slate-950 py-1 text-white backdrop-blur-3xl ${className}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton