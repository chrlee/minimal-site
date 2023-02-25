import styles from "@/styles/Home.module.css";

interface GalleryGridProps {
    handleSelect: (index: number) => void;
}

export const GalleryGrid = ({ handleSelect }: GalleryGridProps) => {
    return (
        <div className={styles.grid}>
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    Docs <span>-&gt;</span>
                </h2>
                <p>
                    Find in-depth information about Next.js features and&nbsp;API.
                </p>
            </a>
        </div>
    )
}