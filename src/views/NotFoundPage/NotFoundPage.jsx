import React from "react";
import Translate from "react-translate-component";
import { MainSection, HomeLink } from "./NotFoundPage.styles";

const NotFoundPage = (props) => (
  <section className="page-content max-height" style={{minHeight: "90vh", marginTop: "40px"}}>
    <MainSection className="main-content">
      <HomeLink>
        404
        <Translate content="Not-found-page" />
      </HomeLink>
      
    </MainSection>
    <hr />
    
  </section>
);

NotFoundPage.propTypes = {
  // bla: PropTypes.string,
};

NotFoundPage.defaultProps = {
  // bla: 'test',
};

export default NotFoundPage;
