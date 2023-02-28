import styles from "@/styles/Home.module.css";
import { GalleryProps } from "./Gallery";

interface GalleryListProps extends GalleryProps {
    selectedIndex: number;
    handleSelect: (index: number) => void;
}

export const GalleryList = ({ selectedIndex, handleSelect, data }: GalleryListProps) => {
    return (
        <div className={styles.grid}>
            {
                data.map((item, index) => {
                    const selected = index === selectedIndex
                    return (
                    <h2
                        key={index}
                        className={selected ? styles.selectedLink : styles.unselectedLink}
                        onClick={() => handleSelect(index)}
                    >
                        {item.title}
                    </h2>
                    )
                })
            }
            <hr />
        </div>
    )
}