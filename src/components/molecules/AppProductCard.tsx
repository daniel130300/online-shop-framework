import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Rating from '@mui/material/Rating';
import { AppDynamicCardMedia } from '../atoms/AppDynamicCardMedia';

interface AppProductCardProps {
  title: string;
  imgPath: string;
  price: number;
  rating: number;
}

export const AppProductCard: React.FC<AppProductCardProps> = ({title, price, imgPath, rating}) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 300,
        height: '100%'
      }}>
      <CardActionArea>
        <AppDynamicCardMedia
          image={imgPath}
          title={title}
        />
        <CardContent 
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            height: '100%',
            justifyContent: 'space-between'
          }}>
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