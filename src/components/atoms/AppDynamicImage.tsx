import Box from "@mui/material/Box";

export interface DynamicCardMediaProps extends React.HTMLProps<HTMLImageElement> {
  maxHeight?: string;
  backgroundColor?: string;
}

export const AppDynamicImage: React.FC<DynamicCardMediaProps> = ({
  src, 
  alt, 
  maxHeight,
  ...rest
}) => {

  return (
    <Box 
      sx={{
        position: 'relative',
        height: '100%',
        maxHeight: maxHeight || 'inherit',
        overflow: 'hidden'
      }}
      >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        {...rest}
      />
    </Box>
  );
};

export default AppDynamicImage;
