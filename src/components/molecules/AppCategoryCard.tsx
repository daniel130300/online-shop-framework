import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AppDynamicImage from '../atoms/AppDynamicImage';

interface CategoryCardProps {
  image: string;
  title: string;
}

export const AppCategoryCard: React.FC<CategoryCardProps> = ({image, title}) => {
  return (
    <Card sx={{ position: 'relative', maxHeight: '300px' }}>
      <CardActionArea>
        <AppDynamicImage
          src={image}
          alt={title}
        />
        <CardContent
          sx={(theme) => ({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            p: 2,
            backgroundColor: theme.palette.primary.main,
            display: 'block'
          })}
        >
          <Typography variant="h3" color="text.primary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
  );
};

export default AppCategoryCard;
