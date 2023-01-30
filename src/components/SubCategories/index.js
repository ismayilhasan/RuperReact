import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import useSubCategoires from "../../query-hooks/getSubCategoires";

function SubCategories() {
  const subcategoires = useSubCategoires();
  return (
    <section id="SubCategories">
      <div className="container">
        <Row>
          {subcategoires.isLoading && <p>Loading...</p>}
          {subcategoires.isError && <p>Could not fetch users</p>}
          {subcategoires.isSuccess &&
            subcategoires.data.map((subcategory) => (
              <Col key={subcategory.id} md={4} col={12}>
                <div className="main-content">
                  <img src={subcategory.imageName} />
                  <h3 className="title">{subcategory.name}</h3>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
}

export default SubCategories;
