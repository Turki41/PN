const useMouseTracker = () => {
    let rafId = 0

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.currentTarget
        cancelAnimationFrame(rafId)

        rafId = requestAnimationFrame(() => {
            const rect = target.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            target.style.setProperty('--mouse-x', `${x}px`)
            target.style.setProperty('--mouse-y', `${y}px`)
        })
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.currentTarget
        cancelAnimationFrame(rafId)
        target.style.removeProperty('--mouse-x')
        target.style.removeProperty('--mouse-y')
    }

    return { handleMouseMove, handleMouseLeave }
}

export default useMouseTracker