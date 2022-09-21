import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Charts from '../components/atoms/Chart';
import HeaderPage from '../components/organisms/HeaderPage';
import SideBar from '../components/organisms/SideBar';
import DataTransformation from '../models/data-transformation';

export default function OrderChart({ orderData }) {
  console.log('orderData', orderData);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <HeaderPage />
            <div className="pages-content">
              <h4>Data</h4>
              <Charts {...orderData} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api');
  const orderData = DataTransformation (data );
  return {
    props: {
      orderData,
    },
  };
};
