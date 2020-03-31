import { h } from "preact";
import { useState } from "preact/hooks";

// Mui
import { Grid, Modal, Typography } from "@material-ui/core";

export default function ImageModal({ images }: { images: IProject["images"] }) {
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
    <div className="react-fancybox">
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
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <img
          src={images[currentIndex].source.regular}
          className="image-thumb"
        />
      </Modal>
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
