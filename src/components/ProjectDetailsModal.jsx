import React from "react";
import { Modal } from "reactstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = ({ data, onHide, ...props }) => {
  const title = data?.title || "";
  const description = data?.description || "";
  const url = data?.url || "";
  const technologies = data?.technologies || [];
  const images = data?.images || [];

  const techList = technologies.map((icon, index) => (
    <li className="list-inline-item mx-3" key={index}>
      <span>
        <div className="text-center">
          <i className={icon.class} style={{ fontSize: "300%" }}>
            <p className="text-center" style={{ fontSize: "30%" }}>
              {icon.name}
            </p>
          </i>
        </div>
      </span>
    </li>
  ));

  const imageList = images.map((imgSrc, index) => (
    <div key={index} data-src={imgSrc} />
  ));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {imageList}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            )}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{techList}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;