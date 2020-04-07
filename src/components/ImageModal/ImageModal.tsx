import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

// Mui
import {
  Button,
  Grid,
  MobileStepper,
  Dialog,
  Paper,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// Styles
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

export default function ImageModal({ images }: { images: IProject["images"] }) {
  const classes = useStyles();

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [currentImgDims, setCurrentImgDims] = useState({
    width: null,
    height: null
  });

  const maxSteps = images.length;

  const getImageDims = () => {
    const img = new Image();
    img.src = images[currentIndex].source.regular;
    img.onload = () => {
      setCurrentImgDims({ width: img.width, height: img.height });
      setModal(true);
    };
  };

  const handleNext = () => {
    setCurrentIndex(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurrentIndex(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setCurrentIndex(step);
  };

  const toggleModal = (selectedIndex: number | null) => {
    if (selectedIndex === null) {
      setModal(false);
    }
    setCurrentIndex(selectedIndex);
  };

  useEffect(() => {
    if (currentIndex !== null) {
      getImageDims();
    } else {
      setCurrentImgDims(null);
    }
  }, [currentIndex]);

  return (
    <div>
      <Grid container spacing={2}>
        {images.map(({ caption, source }, j) => (
          <Grid
            item
            xs={4}
            sm={3}
            onClick={() => toggleModal(j)}
            key={source.thumbnail}
          >
            <img alt={caption} src={source.thumbnail} className="image-thumb" />
          </Grid>
        ))}
      </Grid>
      {modal ? (
        <Dialog
          open={modal}
          onClose={() => toggleModal(null)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          classes={{
            paper: classes.modal
          }}
        >
          {images[currentIndex].caption ? (
            <Paper square elevation={0} className={classes.header}>
              <Typography>{images[currentIndex].caption}</Typography>
            </Paper>
          ) : null}
          <AutoPlaySwipeableViews
            autoplay={}
            interval={10000}
            enableMouseEvents
            axis="x"
            index={currentIndex}
            onChangeIndex={handleStepChange}
            className={classes.container}
            style={{
              width: currentImgDims.width,
              height: mdDown ? undefined : currentImgDims.height,
              transition: "all ease 200ms"
            }}
          >
            {images.map((image, index) =>
              Math.abs(currentIndex - index) <= images.length ? (
                <img
                  key={image.source.regular}
                  // alt={image.caption}
                  style={{
                    opacity: currentIndex === index ? 1 : 0,
                    transition: "opacity ease 100ms"
                  }}
                  src={image.source.regular}
                  className={classes.img}
                  width={mdDown ? undefined : currentImgDims.width}
                  height={mdDown ? undefined : currentImgDims.height}
                />
              ) : null
            )}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={currentIndex}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={currentIndex === maxSteps - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={currentIndex === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Dialog>
      ) : null}
    </div>
  );
}
