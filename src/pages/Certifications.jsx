import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useGetCertifications } from "../hooks/useGetCertifications";

export default function Certifications() {
  const { certifications } = useGetCertifications();

  return (
    <div className="certifications">
      {certifications.map((item, index) => {
        return (
          <Container key={index}>
            <h1>{item.title}</h1>
            <Row className="item-cards">
              <img src={item.image} alt={item.title} />
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
