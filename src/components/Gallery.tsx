import { useState } from "react"
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { GalleryGrid } from "./GalleryGrid";

export interface GalleryItem {
    title: string;
    subtitle?: string;
    img?: React.ComponentProps<typeof Image>
    md?: string;
}

interface GalleryProps {
    data: GalleryItem[];
}

export const Gallery = ({ data }: GalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <div className={styles.title}>
                <h1>SELECTED WORK</h1>
            </div>
            <div className={styles.center}>
                <>
                    {
                        data[selectedIndex]?.img ?? <Image {...data[selectedIndex]?.img} /> 
                    }
                    {
                        data[selectedIndex]?.md ?? <span>{data[selectedIndex]?.md}</span>
                    }
                </>
            </div>
            <GalleryGrid handleSelect={setSelectedIndex} />
        </>
    )
}