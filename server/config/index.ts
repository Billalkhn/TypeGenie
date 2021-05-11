import { config } from 'dotenv';

const result = config();
if (result.error) {
    throw result.error;
}

const configuration = {
    mode: process.env.MODE as 'dev' | 'prod',
    port: +(process.env.PORT as string),
    db: {
        uri: process.env.MONGO_URI as string,
    },
   
}

export {
    configuration as config
}