export const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err);
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "ERROR FROM SERVER SIDE";
  return res.status(status).json({ message, extraDetails });
};
