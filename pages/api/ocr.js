// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createWorker } from 'tesseract.js'

export default async function ocr(req, res) {
  // TODO fetch cast contents from either DB or from farcaster API
  // assume "cast" is the object returned from this
  const imgWorker = createWorker({
    logger: m => console.log(m)
  })
  await worker.load()
  await worker.loadLanguage('eng')
  await worker.initialize('eng')
  const imgConfidenceLevel = 70
  if (cast.body.data.text.includes(imgurUrl)) {
    let image = imgurUrl + cast.body.data.text.split(imgurUrl)[1]
    console.log(image)
    let data = await worker.recognize(image);
    if (data.data.confidence >= imgConfidenceLevel) {
      // TODO do something with data.data.text (store in a column? different table?)
      // Different table is a good option b/c you could check if translation exists already & avoid re-indexing if so
      console.log(data.data.text);
      res = {"text": data.data.text}
    } else {
      // just for debugging
      console.log('low confidence')
      console.log(data.data.text);
      res = {"error": "image unable to be translated"}
    }
  } else {
    console.log("no image found")
    res = {"error": "no image found"}
  }
  await worker.terminate()
  return res
}
