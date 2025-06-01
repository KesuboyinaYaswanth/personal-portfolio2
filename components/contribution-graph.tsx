"use client"; // if using the app directory

import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays } from "date-fns";

export default function ContributionHeatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/contributions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        GitHub Contribution Heatmap
      </h2>
      <CalendarHeatmap
        startDate={subDays(new Date(), 365)}
        endDate={new Date()}
        values={data}
        classForValue={(value) => {
          if (!value) return "color-empty";
          if (value.count >= 10) return "color-scale-4";
          if (value.count >= 6) return "color-scale-3";
          if (value.count >= 3) return "color-scale-2";
          if (value.count >= 1) return "color-scale-1";
          return "color-empty";
        }}
        showWeekdayLabels
      />
    </div>
  );
}
