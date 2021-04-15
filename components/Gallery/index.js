import React from "react";
import Masonry from "react-masonry-component";
import { getPublicUrl } from "../../lib/utils";

const masonryOptions = {
  transitionDuration: 0,
  columnWidth: 0.5,
};

const Gallery = (props) => {
  const childElements = props.data.map((item, index) => {
    return (
      <li className={`width${index + 1} wow zoomIn`} data-wow-duration="1000ms">
        <a
          href={getPublicUrl(item)}
          data-group="set1"
          title=""
          class="html5lightbox"
        >
          <img src={getPublicUrl(item, "small")} alt="" />
        </a>
      </li>
    );
  });

  return (
    <Masonry
      className={"masonary"} // default ''
      elementType={"ul"} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {childElements}
    </Masonry>
  );
};

export default Gallery;
