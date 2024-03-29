import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class AllCourses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY COURSES</h1>
          <div className="bottom"></div>
          <Row>
            <Col>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    alt="lesson"
                    src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg"
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    alt="lesson"
                    src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    alt="lesson"
                    src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    alt="course"
                    src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg"
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    alt="courses"
                    src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg"
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    alt="lesson"
                    src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AllCourses;
