import { AppCategoryCard } from "../molecules/AppCategoryCard";
import Grid from '@mui/material/Unstable_Grid2';
import { PageLayout } from "../templates/PageLayout";
import AppCarousel from "../atoms/AppCarousel";
import AppProductCard from "../molecules/AppProductCard";
import { carouselImages } from "../../constants/carouselImages";
import { categories } from "../../constants/categories";
import { products } from "../../constants/products";
import Stack from '@mui/material/Stack';

export const HomePage = () => {
  return (
    <PageLayout>
      <Stack spacing={8}> 
        <AppCarousel images={carouselImages}/>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid key={`category-${index}`} xs={12} sm={6} md={4} lg={4}>
              <AppCategoryCard image={category.image} title={category.title} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid
              key={`category-${index}`} 
              xs={12} 
              sm={6} 
              md={4} 
              lg={2}
            >
              <AppProductCard 
                title={product.title} 
                price={product.price} 
                imgPath={product.imgPath}
                rating={product.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PageLayout>
  );
}