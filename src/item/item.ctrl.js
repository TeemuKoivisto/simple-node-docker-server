
module.exports.getItems = async (req, res, next) => {
  try {
    const items = await Promise.resolve(["item-1", "item-2", "item-3"])
    res.json(items)
  } catch (err) {
    next(err)
  }
}