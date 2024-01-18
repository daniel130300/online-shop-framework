import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Rating from '@mui/material/Rating';
import AppDynamicImage from '../atoms/AppDynamicImage';
import { useTheme } from '@mui/material/styles';

interface AppProductCardProps {
  title: string;
  imgPath: string;
  price: number;
  rating: number;
}

export const AppProductCard: React.FC<AppProductCardProps> = ({title, price, imgPath, rating}) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{
        maxWidth: 300,
        height: '100%',
        maxHeight: '800px'
      }}>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <AppDynamicImage
          src={imgPath}
          alt={title}
          backgroundColor={theme.palette.primary.contrastText}
        />
        <CardContent 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            ${price}
          </Typography>
          <Rating
            name="product-rating"
            value={rating}
            precision = {0.5}
            readOnly
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AppProductCard;