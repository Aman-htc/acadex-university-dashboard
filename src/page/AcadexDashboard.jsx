


import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import {
  AcademicChart,
  EarningsChart,
  Footer,
  HeaderNavBar,
  NoticeBoardData,
  Notification,
  RecentActivity,
  Schedule,
  StudentActivity,
  StudentsOverview,
  StudentsYearData
} from '../components/main/index';

const AcadexDashboard = () => {
  return (
    <Container fluid className="p-3 pt-0">
      <Row className="g-3 ">

        {/* LEFT SIDE */}
        <Col xxl={9} lg={9} md={12} xs={12} className="bg-color p-3 rounded-2">

          {/* Header */}
          <Row className="mb-3">
            <Col xs={12}>
              <HeaderNavBar />
            </Col>
          </Row>

          {/* Students Overview */}
          <Row className="mb-3">
            <Col xs={12}>
              <StudentsOverview />
            </Col>
          </Row>

          {/* Charts */}
          <Row className="mb-3 g-3">
            <Col xxl={6} md={6} xs={12}>
              <AcademicChart />
            </Col>
            <Col xxl={6} md={6} xs={12}>
              <EarningsChart />
            </Col>
          </Row>

          {/* Notifications / Year / Activity */}
          <Row className="mb-3 g-3 justify-content-between">
            <Col xxl={4} lg={6} md={6} xs={12}>


              <Notification />
            </Col>

            <Col xxl={3} lg={6} md={6} xs={12}>

              <StudentsYearData />
            </Col>

            <Col xxl={5} lg={12} md={12} xs={12}>

              <StudentActivity />
            </Col>
          </Row>

          {/* Notice Board */}
          <Row className="mb-3">
            <Col xs={12}>
              <NoticeBoardData />
            </Col>
          </Row>

        </Col>

        {/* RIGHT SIDE */}
        <Col xxl={3} lg={3} md={12} xs={12} className="p-0 ">
          <Row className='h-100 '>
            <Col className='"h-100 d-flex flex-column'>
              <Schedule />
              <RecentActivity />
              <div className='mt-auto'>
                <Footer />
              </div>
            </Col>
          </Row>

        </Col>

      </Row>
    </Container>
  );
};

export default AcadexDashboard;
