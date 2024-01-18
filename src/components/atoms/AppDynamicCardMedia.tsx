import { useEffect, useState } from "react";

export interface DynamicCardMediaProps {
  image: string;
  title: string;
  maxHeight?: string;
}

export const AppDynamicCardMedia: React.FC<DynamicCardMediaProps> = ({ image, title }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const ratio = img.width / img.height;
      setAspectRatio(ratio);
    };
    img.src = image;
  }, [image]);

  return (
    <div
      style={{
        position: 'relative',
        paddingTop: aspectRatio ? `${100 / aspectRatio}%` : '56.25%',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default AppDynamicCardMedia;