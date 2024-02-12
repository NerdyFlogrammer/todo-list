import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const pathPrefix = process.env.PATH_PREFIX || '';

new App().start(PORT);
