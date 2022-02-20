import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const timeLongFromNowToEndTime = (
  endDate: string = "2023-12-12",
  formatStr: string = "DD天HH时mm分ss秒"
) => {
  const duration = dayjs(endDate).valueOf() - Date.now();
  if (duration <= 0) {
    return "活动已结束";
  }
  return dayjs.duration(duration).format(formatStr);
};