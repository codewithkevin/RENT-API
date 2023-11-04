import dayjs from "dayjs";
import logger from "pino";

const log = logger({
  options: {
    levelFirst: true,
    translateTime: true,
    colorize: true,
    ignore: "pid,hostname,level",
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
