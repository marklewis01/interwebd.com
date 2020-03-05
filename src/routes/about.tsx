import { h } from "preact";

// Mui
import { Grid, Typography } from "@material-ui/core";

export const About = ({ path }: { path: string }) => (
  <Grid>
    <Typography variant="h1">About</Typography>
    <Typography variant="body1">
      I get a kick out of building things and understanding how things work. I
      am a late-bloomer when it comes to programming, after a successful career
      in systems and virtualised infrastructure, I have recently discovered
      coding and I love it! I have taken time away from employment to accelerate
      my understanding and ability to code, I’ve focused on JavaScript as my
      first language due to its use in both front and backend applications. I am
      looking to work for a great company/team where I can grow my programming
      skills and learn from the best. I am comfortable finding my way around a
      React front end with experience working with Redux, Mobx and Unstated for
      non-local state management, and have experience with Express on a Nodejs
      backend. I am currently working on my first hobby web application called
      Finishes - it aims to help Architects create a project document called a
      'finishes schedule', and provides an alternative to using Word/Excel. I
      would love to show you it! Some early feature are drag-and-drop to reorder
      items, a catalog to store and reuse products, versioning, and
      print-to-pdf. I’ve built React frontend and use a Firebase backend (MVP
      only - I hope to migrate this to a standalone AWS/Node stack if the
      project grows).
    </Typography>
    <Grid>
      {courses.map(course => (
        <Grid container>
          <Typography variant="h4">{course.title.join("; ")}</Typography>
          <Typography variant="body2">{course.lecturer}</Typography>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

const courses = [
  {
    title: ["React Fundamentals, React Router, Redux.", "Modern JavaScript"],
    lecturer: "Tyler McGinnis",
    completed: "April 2018"
  },
  {
    title: ["M101JS: MongoDB for Node.js Developers"],
    lecturer: "MongoDB University",
    completed: "February 2018"
  },
  {
    title: ["The Complete Node.js Developer Course (2nd Edition)"],
    lecturer: "Andrew Mead (Udemy)",
    completed: "December 2018"
  },
  {
    title: ["Nginx Fundamentals: High Performance Servers from Scratch"],
    lecturer: "Ray Viljoen (Udemy)",
    completed: "June 2017"
  }
];
