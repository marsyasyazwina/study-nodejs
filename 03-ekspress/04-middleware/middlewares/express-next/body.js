// BUAT FUNGSI CEK JIKA OBJECT KOSONG
function isEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}

module.exports = (req, res, next) => {
  // jika object req.body kosong kita skip middleware ini
  if (isEmpty(req.body)) next('route');

  // jika object req.body tidak kosong kita tampilkan body request
  console.log("Body: ", req.body);
};