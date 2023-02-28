import { useState } from "react"
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { GalleryList } from "./GalleryList";

export interface GalleryItem {
    title: string;
    subtitle?: string;
    img?: Pick<React.ComponentProps<typeof Image>, "src">
    md?: string;
}

export interface GalleryProps {
    data: GalleryItem[];
}

export const Gallery = ({ data }: GalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    if(!data.length) return null;

    const galleryData = data[selectedIndex];

    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.center}>
                    {
                        galleryData.img ?
                        <Image
                            src={galleryData.img.src}
                            alt={galleryData.title}
                            placeholder="blur"
                            className={styles.image}
                            loading="eager"
                        /> : null
                    }
                    {
                        galleryData.md ?? <span>{galleryData.md}</span>
                    }
            </div>
            <GalleryList data={data} selectedIndex={selectedIndex} handleSelect={setSelectedIndex} />
        </div>
    )
}