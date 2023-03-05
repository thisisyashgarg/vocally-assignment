import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 60 secs
  max: 10, // limit each IP to 10 requests per windowMs
});

export default limiter;
