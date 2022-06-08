const router = require("express").Router();
const upload = require("../../s3Client");

router.post("/upload", upload.single("profile"), function (req, res, next) {
  if (!req.file) {
    res.status(400).json({ Error: "Choose an image file" });
    return;
  }
  const responseTemplate = `
  <img src=${req.file.location} width="200px" />
  `;
  res.send(responseTemplate);
});

module.exports = router;
