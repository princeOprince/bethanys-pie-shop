import express from "express";
const app = express();
import debug from "debug";
const log = debug('bethany:rest-server');

const router = express.Router();
let pies = [
    { "id": 1, "name": "Apple"},
    { "id": 2, "name": "Cherry"},
    { "id": 3, "name": "Peach"}
]

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