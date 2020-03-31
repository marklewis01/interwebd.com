import { h } from "preact";
import { useState } from "preact/hooks";

import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";

// Mui
import { Grid, Typography } from "@material-ui/core";
import { Code as CodeIcon, Language as WebsiteIcon } from "@material-ui/icons";

export const Project = ({ project }: { project: IProject }) => {
  const [lightBox, setLightBox] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const toggleLightbox = (selectedIndex: number) => {
    setLightBox(!lightBox);
    setGalleryIndex(selectedIndex);
  };
  return (
    <Grid container className="project">
      <Grid item xs={12} lg="auto" className="lhs-col">
        <Grid container className="details">
          <Grid item xs>
            <h3>{project.label}</h3>
          </Grid>
          <Grid item xs container className="links">
            {project.web ? (
              <a href={project.web} target="_blank">
                <Grid container alignItems="center">
                  <WebsiteIcon className="icon" />
                  <Typography>Live Site</Typography>
                </Grid>
              </a>
            ) : null}
            {project.codebase ? (
              <a href={project.codebase} target="_blank">
                <Grid container alignItems="center">
                  <CodeIcon className="icon" />
                  <Typography>Source</Typography>
                </Grid>
              </a>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg container>
        <Typography variant="body1">
          {project.description}
          {project.keywords.length ? (
            <span className="keywords">
              {" "}
              ({project["keywords"].join(", ")})
            </span>
          ) : null}
        </Typography>
      </Grid>

      {project.images ? (
        <Grid item xs={12} lg>
          <Grid container spacing={2}>
            {project.images.map(({ caption, source }, j) => (
              <Grid
                item
                xs={4}
                sm={3}
                onClick={() => toggleLightbox(j)}
                key={source.thumbnail}
              >
                <img
                  alt={caption}
                  src={source.thumbnail}
                  className="image-thumb"
                />
              </Grid>
            ))}
          </Grid>
          <ReactFancyBox
            thumbnail="https://loremflickr.com/320/240"
            image="https://www.w3schools.com/howto/img_forest.jpg"
          />

          {/* <ModalGateway>
            {lightBox ? (
              <Modal allowFullscreen={false} onClose={() => setLightBox(false)}>
                <Carousel
                  currentIndex={galleryIndex}
                  frameProps={{ autoSize: "height" }}
                  views={project.images}
                />
              </Modal>
            ) : null}
          </ModalGateway> */}
        </Grid>
      ) : null}
    </Grid>
  );
};
