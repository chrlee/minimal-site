import styles from "@/styles/Home.module.css";
import { GalleryProps } from "./Gallery";

interface GalleryListProps extends GalleryProps {
    selectedIndex: number;
    handleSelect: (index: number) => void;
}

export const GalleryList = ({ selectedIndex, handleSelect, fashionData, techData }: GalleryListProps) => {
    return (
        <div className={styles.grid}>
            {
                [...fashionData, ...techData].map((item, index) => {
                    const selected = index === selectedIndex
                    return (
                    <div key={index}>
                        <h2
                            className={selected ? styles.selectedLink : styles.unselectedLink}
                            onClick={() => handleSelect(index)}
                        >
                            {item.title}
                        </h2>
                        {index === fashionData.length-1 ? <hr /> : null}
                    </div>
                    )
                })
            }
        </div>
    )
}