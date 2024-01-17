import { CategoryCard } from "../molecules/CategoryCard";
import Grid from '@mui/material/Unstable_Grid2';
import { PageLayout } from "../templates/PageLayout";
import Carousel from "../atoms/Carousel";

export const HomePage = () => {
  const categories = [
    { image: "src/assets/categories/men-fashion.jpg", title: "Men" },
    { image: "src/assets/categories/women-fashion.jpg", title: "Women" },
    { image: "src/assets/categories/accessories-fashion.jpg", title: "Accessories" }
  ];

  const carouselImages = [
    {
      label: 'clothes-collection',
      path: 'src/assets/carousel/clothes-collection.jpg',
    },
    {
      label: 'special-offer',
      path: 'src/assets/carousel/special-offer.jpg'
    }
  ];

  return (
    <PageLayout>
      <Carousel images={carouselImages}/>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={4}>
            <CategoryCard image={category.image} title={category.title} />
          </Grid>
        ))}
      </Grid>

    </PageLayout>
  );
}