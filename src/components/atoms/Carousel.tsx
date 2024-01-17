import * as React from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { AppButton } from './AppButton';

interface CarouselImages {
  label: string;
  path: string;
}

interface CarouselProps {
  images: CarouselImages[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  return (
    <>
      {images.map((step, index) => (
        <div key={step.label} style={{ display: activeStep === index ? 'block' : 'none' }}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                height: '100%',
                maxHeight: '800px',
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                objectFit: 'cover', 
              }}
              src={step.path}
              alt={step.label}
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
    </>
  );
};

export default Carousel;
