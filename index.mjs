import express from "express";
const app = express();
import debug from "debug";
const log = debug('bethany:rest-server');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('');
});

app.use('/api/', router);

app.listen(5000, () => {
    log(`Node server is running on http://localhost:5000..`);
})