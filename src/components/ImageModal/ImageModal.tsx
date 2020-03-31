import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

// Mui
import {
  Button,
  Grid,
  MobileStepper,
  Dialog,
  Paper,
  Typography
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

  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImgDims, setCurrentImgDims] = useState({
    width: null,
    height: null
  });

  const maxSteps = images.length;

  const handleNext = () => {
    setCurrentIndex(prevActiveStep => prevActiveStep + 1);
    // setCurrentImgWidth()
  };

  const handleBack = () => {
    setCurrentIndex(prevActiveStep => prevActiveStep - 1);
    // setCurrentImgWidth()
  };

  const handleStepChange = (step: number) => {
    setCurrentIndex(step);
    // setCurrentImgWidth(images[step].source.regular)
  };

  const toggleModal = (selectedIndex: number) => {
    setModal(!modal);
    setCurrentIndex(selectedIndex);
    // setCurrentImgWidth(null)
  };

  useEffect(() => {
    // set current image dims
    const img = new Image();
    img.src = images[currentIndex].source.regular;
    setCurrentImgDims({ width: img.width, height: img.height });
  }, [currentIndex]);

  console.log(setCurrentImgDims);

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
          onClose={() => setModal(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          classes={{
            paper: classes.modal
          }}
        >
          <Paper square elevation={0} className={classes.header}>
            <Typography>{images[currentIndex].caption}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis="x"
            index={currentIndex}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            className={classes.container}
            style={{
              width: currentImgDims.width,
              height: currentImgDims.height
            }}
          >
            {images.map((step, index) =>
              Math.abs(currentIndex - index) <= images.length ? (
                <img
                  key={step.source.regular}
                  // alt={step.caption}
                  src={step.source.regular}
                  className={classes.img}
                  width={currentImgDims.width}
                  height={currentImgDims.height}
                  // style={{
                  // backgroundImage: `url(${step.source.regular})`,
                  // }}
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
