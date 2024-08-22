import { ShortedUrl } from "../Schema/database.schema.js";



export async function createShortedUrl(req, res) {
  const userId = "66c45c905ac3991d98227363"
  const { fullUrl } = req.body;
  await ShortedUrl.create({ orginal_url: fullUrl });
  res.redirect("/");
}
export async function getAllShotedUrl(req, res) {
  const pageCount = Math.ceil(((await ShortedUrl.find()).length)/10)
  const limit = parseInt(req.query?.limit) || 10;
  const offset = req.query?.page ? (req.query.page - 1) * limit : 0;

  const shorUrls = await ShortedUrl.find()
    .sort({_id: -1})
    .limit(limit)
    .skip(offset);

    res.render("index", {shorUrls,pageCount})
  // res.send({
  //   limit: limit,
  //   page: req.query?.page,
  //   data: shorUrls });
}

export async function deleteUrl(req,res) {
  const {id} = req.params
  await ShortedUrl.deleteOne({_id: id})
}

export async function toShortedUrl(req, res) {
  const shortUrl = await ShortedUrl.findOne({ shorter_url: req.params.shorter_url });
  if (shortUrl == null) {
    return res.status(404).send("Error: URL not found");
  }
  await shortUrl.save();
  res.redirect(shortUrl.orginal_url);
}

