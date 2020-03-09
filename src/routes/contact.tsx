import { h } from "preact";

// Mui
import { Box, Grid, Typography } from "@material-ui/core";

export const Contact = ({ path }: { path: string }) => (
  <div>
    <Typography variant="h1">About</Typography>
    <Box className="content">
      <Grid container spacing={9}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4">
            I get a kick out of building ideas and understanding how things
            work.
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Grid container>
            <Typography variant="h3">Completed training/courses</Typography>
            {courses.map(course => (
              <Grid container>
                <Typography variant="h4">{course.title.join("; ")}</Typography>
                <Typography variant="body2">by {course.lecturer}</Typography>
              </Grid>
            ))}
          </Grid>
          {/* <Grid container>
                   <Typography variant="h3">Official Certifications</Typography>
                   {certifications.map(cert => (
                     <Grid container>
                       <Typography variant="h4">
                         {course.title.join("; ")}
                       </Typography>
                       <Typography variant="body2">
                         by {course.lecturer}
                       </Typography>
                     </Grid>
                   ))}
                 </Grid> */}
        </Grid>
      </Grid>
    </Box>
  </div>
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

// const certifications: [
//   {
//     logo: '',
//     label: "VMWare Certified Professional #61445"
//   }
// ]
