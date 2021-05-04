import express from 'express';
import morgan from 'morgan';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from '../config';
import { apiRoutes } from '../routes/apiRoutes';

export const PORT = config.port;
export const MONGO_URI = config.db.uri;
export const IS_DEV_MODE = config.mode === 'dev';

export class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.set('port',  PORT || 3000);
        this.app.use(morgan('combined'));
        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, '../../public')));
        this.app.use(bodyParser.json({ limit: '5mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
        this.app.use(compression());
        this.app.set('view engine', 'ejs');
    }

    private routes(): void {
        this.app.use('/api', apiRoutes);
    }
}