import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function LoadMore(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { loadBlog } = props;

  useEffect(() => {
    if (inView) {
      loadBlog();
      console.log("loadMore blog!");
    }
  }, [inView]);

  return <div ref={ref}></div>;
}
