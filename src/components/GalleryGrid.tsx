import styles from "@/styles/Home.module.css";
import { GalleryProps } from "./Gallery";

interface GalleryGridProps extends GalleryProps {
    selectedIndex: number;
    handleSelect: (index: number) => void;
}

export const GalleryGrid = ({ selectedIndex, handleSelect, data }: GalleryGridProps) => {
    return (
        <div className={styles.grid}>
            {
                data.map((item, index) => {
                    const selected = index === selectedIndex
                    return (
                    <h2
                        key={index}
                        className={selected ? styles.selectedLink : styles.unselectedLink}
                    >
                        {item.title}
                    </h2>
                    )
                })
            }
        </div>
    )
}