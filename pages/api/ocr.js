// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createWorker } from 'tesseract.js'

export async function ocr(query) {
  // TODO fetch cast contents from either DB or from farcaster API
  // assume "cast" is the object returned from this
  console.log('image')
  console.log(query)
  const worker = createWorker({
    logger: m => console.log(m)
  })
  await worker.load()
  await worker.loadLanguage('eng')
  await worker.initialize('eng')
  const imgConfidenceLevel = 70
  let res = {}
  // todo use "cast", for now use imgur link to test ocr
  //if (cast.body.data.text.includes(imgurUrl)) {
    //let image = imgurUrl + cast.body.data.text.split(imgurUrl)[1]
    //console.log(image)
  let data = await worker.recognize(query)
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
  // } else {
  //   console.log("no image found")
  //   res = {"error": "no image found"}
  // }
  await worker.terminate()
  return res
}

export default async function handler(req, res) {
  try {
    res.json(await ocr(req.query))
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}
