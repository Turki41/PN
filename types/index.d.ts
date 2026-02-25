export interface GridItem {
    id: number,
    title: string,
    description: string,
    icon: React.ElementType,
    color?: string
}

interface HeroContentProps {
    fullName: string,
    title: string,
    summary: string
}