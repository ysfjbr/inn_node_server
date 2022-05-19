import express, { Request, Response, NextFunction } from 'express';

const path = require('path');

var router = express.Router();

//const user = new UserCl()

/* GET home page. */
router.get('/socket.io/*', function (req: Request, res: Response, next: NextFunction) {
    res.sendFile(path.join(__dirname, '../public/', 'socket.io.js'));
});

router.get('/static/*', function (req: Request, res: Response, next: NextFunction) {
    const file = req.path === '/' ? 'index.html' : req.path;
    res.sendFile(path.join(__dirname, '../public', file));
});

router.get('/*', function (req: Request, res: Response, next: NextFunction) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

export default router;
