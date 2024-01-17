import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DynamicCardMedia } from '../atoms/DynamicCardMedia';

interface CategoryCardProps {
  image: string;
  title: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({image, title}) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <DynamicCardMedia
        image={image}
        title={title}
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
    </Card>
  );
};
