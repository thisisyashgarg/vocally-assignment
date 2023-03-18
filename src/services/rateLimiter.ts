import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 60 secs
  max: 60, // limit each IP to 60 requests per windowMs
});

export default limiter;
