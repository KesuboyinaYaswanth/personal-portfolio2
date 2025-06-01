declare module "react-calendar-heatmap" {
  import { ComponentType } from "react";

  interface Props {
    values: Array<{ date: string; count: number }>;
    startDate: Date;
    endDate: Date;
    showWeekdayLabels?: boolean;
    classForValue?: (value: { date: string; count: number } | null) => string;
  }

  const CalendarHeatmap: ComponentType<Props>;
  export default CalendarHeatmap;
}
