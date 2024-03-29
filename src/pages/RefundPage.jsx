import React, { Component, Fragment } from "react";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import RefundDescription from "../components/RefundDescription/RefundDescription";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class RefundPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy"/>
        <PageTop pagetitle="Refund Policy" />
        <RefundDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default RefundPage;