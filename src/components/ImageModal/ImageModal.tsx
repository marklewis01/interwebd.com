import { h } from "preact";
import { useState } from "preact/hooks";

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

  const maxSteps = images.length;

  const showModal = () => {
    this.setState({
      show: true
    });
    this.props.onOpen();
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

  const toggleModal = (selectedIndex: number) => {
    setModal(!modal);
    setCurrentIndex(selectedIndex);
    console.log({ maxSteps, modal, currentIndex });
  };

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
      <Dialog
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{images[currentIndex].caption}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis="x"
            index={currentIndex}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.source.regular}>
                {Math.abs(currentIndex - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.source.regular}
                    alt={step.caption}
                  />
                ) : null}
              </div>
            ))}
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
        </div>
      </Dialog>
    </div>
  );
}

{
  /* {this.renderThumbnail()}
        <ReactCSSTransitionGroup
          style={{animationDuration: 1000}}
          transitionName={animation}
          transitionEnterTimeout={TRANSITION_TIME}
          transitionLeaveTimeout={TRANSITION_TIME}>
          {this.state.show
            ? (
              <div onClick={this.handleClickBox} className="box">
                <div ref={box => this.box = box} className="image-box">
                  {showCloseBtn && <img onClick={this.close} className="close-btn" src={closeImg} alt="close"/>}
                  <img style={imageStyle} src={image} alt="original"/>
                  {caption && <div className="caption">{caption}</div>}
                </div>
              </div>

            ) : null}
        </ReactCSSTransitionGroup> */
}
