import express from "express";
const app = express();
import debug from "debug";
const log = debug('bethany:rest-server');
import { pieRepo } from "./repos/pieRepo.mjs";

const router = express.Router();
const pies = pieRepo.get();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "All pies retrieved",
        "data": pies
    });
});

app.use('/api/', router);

app.listen(5000, () => {
    log(`Node server is running on http://localhost:5000..`);
})