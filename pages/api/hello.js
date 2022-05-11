// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import Test1 from "../../src/model/test1";
import { dbConnect } from "../../src/utils/mongoose"
import { runMiddleWare } from "../../src/utils/runMiddleWare";
import Morgan from 'morgan'

dbConnect();


export default async function handler(req, res) {
  const { method, body } = req;
  const morgan = Morgan('dev')

  switch (method) {
    case 'GET':
      try {
        const test1 = await Test1.find();
        await runMiddleWare(req, res, morgan)
        return res.status(200).json(test1)
      } catch (error) {
        return res.status(400).json({ msg: error.message })
      }
    case 'POST':
      try {
        const newTask = new Test1(body)
        const savedTask = await newTask.save()
        await runMiddleWare(req, res, morgan)
        return res.status(200).json(savedTask)
      } catch (err) {
        return res.status(400).json({ msg: err.message })
      }
  }
}
