import { h } from "preact";
import { useState } from "preact/hooks";

// Mui
import { Grid, Typography } from "@material-ui/core";

export default function ImageModal({
  images,
  i = 0
}: {
  images: IProject["images"];
  i?: number;
}) {
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(i);

  const showModal = () => {
    this.setState({
      show: true
    });
    this.props.onOpen();
  };

  const renderThumbnail = () => {
    // // const {thumbnail, image, defaultThumbnailWidth, defaultThumbnailHeight} = this.props
    // if (!thumbnail) {
    //   return (
    //     <div onClick={this.show} className="thumbnail">
    //       <img
    //         style={{width: defaultThumbnailWidth, height: defaultThumbnailHeight, objectFit: 'cover'}}
    //         src={image} alt="thumbnail"/>
    //     </div>
    //   )
    // }
  };

  console.log("images", images);

  return (
    <div className="react-fancybox">
      <Grid container spacing={2}>
        {images.map(({ caption, source }, j) => (
          <Grid
            item
            xs={4}
            sm={3}
            // onClick={() => toggleLightbox(j)}
            key={source.thumbnail}
          >
            <img alt={caption} src={source.thumbnail} className="image-thumb" />
          </Grid>
        ))}
      </Grid>
      {/* {this.renderThumbnail()}
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
        </ReactCSSTransitionGroup> */}
    </div>
  );
}
