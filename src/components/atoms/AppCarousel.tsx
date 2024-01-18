import * as React from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { AppButton } from './AppButton';
import AppDynamicImage from './AppDynamicImage';

interface CarouselImages {
  label: string;
  path: string;
}

interface AppCarouselProps {
  images: CarouselImages[];
}

export const AppCarousel: React.FC<AppCarouselProps> = ({ images }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  return (
    <Box>
      {images.map((step, index) => (
        <div key={step.label} style={{ display: activeStep === index ? 'block' : 'none' }}>
          {Math.abs(activeStep - index) <= 2 ? (
            <AppDynamicImage
              src={step.path}
              title={step.label}
              maxHeight='800px'
            />
          ) : null}
        </div>
      ))}
      <MobileStepper
        variant="text"
        steps={images.length}
        position="static"
        activeStep={activeStep}
        sx={{px: 0}}
        nextButton={
          <AppButton
            size="small"
            onClick={handleNext}
            sx={{p: 0}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </AppButton>
        }
        backButton={
          <AppButton
            size="small" 
            onClick={handleBack}
            sx={{p: 0}}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </AppButton>
        }
      />
    </Box>
  );
};

export default AppCarousel;
