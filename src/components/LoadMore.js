import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// export default function LoadMore(props) {
//   const countRef = useRef(0);
//   const handle = () => {
//     countRef.current++;
//     console.log(`Clicked ${countRef.current} times`);
//   };
//   console.log("I rendered!");
//   return <div onClick={handle}>Loadmore....</div>;
// }

export default function LoadMore(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      props.loadBlog();
    }
  });

  return <div ref={ref}></div>;
}
