interface LoaderSkeletonProps {
    className: string;
    lines?: number;
}

const LoaderSkeleton = ({ className, lines }: LoaderSkeletonProps) => {
    const linesCount = Array.from({ length: lines || 3 });

    return (
        <div className={`${className} h-5 rounded-full bg-black-100`}>
            <div className="flex flex-col gap-2 w-full flex-1">
                {linesCount.map((_, idx) => (
                    <div key={idx} className="h-4 bg-gray-900 w-full rounded-full animate-pulse"></div>
                ))}
            </div>
        </div>
    )
}

export default LoaderSkeleton