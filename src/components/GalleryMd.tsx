import { useEffect } from 'react';
import { useRemark } from 'react-remark';

interface GalleryMdProps {
    markdownSource: string,
}

export const GalleryMd = ({ markdownSource }: GalleryMdProps) => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(markdownSource);
  }, [markdownSource, setMarkdownSource]);

  return reactContent;
};
