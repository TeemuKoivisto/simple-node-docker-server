
module.exports = async (err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: "Internal server error", stack: err.stack })
  } else {
    next()
  }
}