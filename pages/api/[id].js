const { dbConnect } = require("../../src/utils/mongoose");
const { runMiddleWare } = require("../../src/utils/runMiddleWare");
import Morgan from 'morgan'
import test1 from '../../src/model/test1';

dbConnect()

export default async (req, res) => {
    const { method, body, query: { id } } = req;
    const morgan = Morgan('dev')
    switch (method) {
        case 'GET':
            try {
                const task = await test1.findById(id)
                if (!task) return res.status(404).json({ msg: 'task does not exists' })
                await runMiddleWare(req, res, morgan);
                return res.status(200).json(task);
            } catch (err) {
                return res.status(400).json({ msg: err.message })
            }
    }
}



