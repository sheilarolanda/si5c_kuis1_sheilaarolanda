const notFound = (req, res, next) => {
  res.status(404).json({ status: "fail", message: "Endpoint rute tidak ditemukan" });
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ status: "fail", message: "Format JSON tidak valid/rusak" });
  }
  res.status(err.status || 500).json({ status: "error", message: err.message || "Internal Server Error" });
};

module.exports = { notFound, errorHandler };