export const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  err.message = err.message || "BACKEND ERROR";
  err.extraDetails = err.extraDetail || "ERROR FROM SERVER SIDE";
  return res.status(status).json({ message, extraDetails });
};
