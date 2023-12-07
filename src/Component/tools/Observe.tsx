import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

const Observe = ({ callFunction }: { callFunction: any }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // Call your function here
          callFunction();
          // Stop observing once the target is visible if you only want to trigger once
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <Box>
      {/* Other content */}
      <Box sx={{ height: "5px", width: "5px" }} ref={targetRef}>
        {/* Your target div */}
      </Box>
    </Box>
  );
};

export default Observe;
