import "../styles.css";
import "./AboutMe.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
export default function timelinefun() {
  return (
    <div className="my-timeline">
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent color="darkblue">
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              color="primary"
              variant="outlined"
              font-family="normal"
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent font-family="normal">
            Graduated from school with 99.30%.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="darkblue" font-family="normal">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent font-family="normal">
            Passed from Kankor Exam with 280 mark
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="darkblue" font-family="normal">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent font-family="normal">
            Nominated for the best student of the year in semester 3{" "}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="darkblue" font-family="normal">
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent font-family="normal">
            Being a member of CSofCS in Herat University
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
