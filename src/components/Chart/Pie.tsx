import React, { useState } from "react";

import { useInView } from "react-intersection-observer";
import { PieChart } from "react-minimal-pie-chart";

const Pie = () => {
  const { ref, inView, entry } = useInView();
  const [segmentIndex, setSegmentIndex] = useState(0);

  return (
    <div ref={ref}>
      <PieChart
        animate // animation
        animationDuration={1000} // animation duration
        animationEasing="ease-out" // animation type
        lengthAngle={360} // 360: circle, 180: semicircle
        center={[50, 50]} // center: position
        lineWidth={70} // 70: inside circle radius
        paddingAngle={1} // pie distance/padding angel
        startAngle={-43} // start angel
        // viewBoxSize={[100, 100]}
        radius={50 - 2} // circle size
        // rounded
        reveal={inView ? 100 : 0} // whether show or not
        segmentsShift={(index) => (index === segmentIndex ? 2 : 0)} // scale if index matches based on event
        totalValue={100} // 100%
        onMouseOver={(e, segmentIndex) => setSegmentIndex(segmentIndex)} // action handle event
        data={[
          {
            color: "#7AFFF7",
            value: 20,
          },
          {
            color: "#00F8EC",
            value: 4,
          },
          {
            color: "#43F3EA",
            value: 18,
          },
          {
            color: "#70CCE3",
            value: 7,
          },
          {
            color: "#C498FC",
            value: 4,
          },
          {
            color: "#B29FFF",
            value: 22,
          },
          {
            color: "#8DACFA",
            value: 10,
          },
          {
            color: "#68DCEF",
            value: 15,
          },
        ]}
      />
    </div>
  );
};

export default Pie;
