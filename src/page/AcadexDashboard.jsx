import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';

import {AcademicChart, EarningsChart, Footer, HeaderNavBar, NoticeBoardData, Notification, RecentActivity, Schedule, StudentActivity, StudentsOverview, StudentsYearData} from '../components/main/index'


const AcadexDashboard = () => {
  return (
    <Container fluid className="p-3  pt-0">
      <Row className="g-3">

        {/* LEFT SIDE */}
        <Col lg={9} md={12} className="bg-color p-3 rounded-2 ">

          {/* Header */}
          <Row className="mb-3">
            <Col>
              <HeaderNavBar />
            </Col>
          </Row>

          {/* Students Overview */}
          <Row className="mb-3">
            <Col>
              <StudentsOverview />
            </Col>
          </Row>

          {/* Charts */}
          <Row className="mb-3 g-3">
            <Col md={6}>
              <AcademicChart />
            </Col>
            <Col md={6}>
              <EarningsChart />
            </Col>
          </Row>

          {/* Notifications & Activity */}
          <Row className="mb-3 g-3">
            <Col md={4}>
              <Notification />
            </Col>
            <Col md={4}>
            <StudentsYearData/>
            </Col>
            <Col md={4}>
              <StudentActivity />
            </Col>
          </Row>

          {/* Notice Board */}
          <Row className="mb-3">
            <Col>
              <NoticeBoardData />
            </Col>
          </Row>

        </Col>

        {/* RIGHT SIDE */}
        <Col lg={3} md={12} className="p-0">

          <Schedule />
          <RecentActivity />
          <Footer />
        </Col>

      </Row>


    </Container>
  );
};

export default AcadexDashboard;
