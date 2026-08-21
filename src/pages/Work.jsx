import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Separator from "../components/Separator";
import { useGetWorkHistory } from "../hooks/useGetWorkHistory";

export default function Work() {
  const { workHistory } = useGetWorkHistory();
  const lastWorkIndex = workHistory.length - 1;

  return (
    <Container fluid>
      {workHistory.map((item, index) => {
        return (
          <div key={index} className="timelines">
            <Card className="timeline">
              <Card.Header>{item.date}</Card.Header>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                <Card.Text></Card.Text>
                <ListGroup variant="flush">
                  {item.description.map((desc, i) => {
                    return <ListGroup.Item key={i}>{desc}</ListGroup.Item>;
                  })}
                </ListGroup>
              </Card.Body>
            </Card>
            {index !== lastWorkIndex ? <Separator /> : null}
          </div>
        );
      })}
    </Container>
  );
}
