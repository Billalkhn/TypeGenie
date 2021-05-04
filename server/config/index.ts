import { config } from 'dotenv';

const result = config();
if (result.error) {
    throw result.error;
}

const configuration = {
    mode: process.env.MODE as 'dev' | 'prod' | 'test',
    port: +(process.env.PORT as string),
    base_url: process.env.BASE_URL as string,
    db: {
        uri: process.env.MONGO_URI as string,
        test_uri: process.env.MONGO_URI_TEST as string
    },
    ssh: {
        host: process.env.FILE_SERVER_HOST,
        port: +(process.env.FILE_SERVER_PORT as string),
        username: process.env.FILE_SERVER_USERNAME,
        password: process.env.FILE_SERVER_PASSWORD,
        root_file_path: process.env.FILE_SERVER_ROOT_FILE_PATH as string,
        url: process.env.FILE_SERVER_URL as string
    },
    jwt_secret: process.env.JWT_SECRET,
    jwt_life: process.env.JWT_LIFE as string,
    refresh_jwt_secret: process.env.REFRESH_JWT_SECRET,
    refresh_jwt_life: process.env.REFRESH_JWT_LIFE,
    mail: {
        host: process.env.MAIL_HOST as string,
        username: process.env.MAIL_USERNAME as string,
        password: process.env.MAIL_PASSWORD as string,
        bcc: process.env.BCC as string,
    },
    twilio: {
        account_sid: process.env.TWILIO_ACCOUNT_SID,
        auth_token: process.env.TWILIO_TOKEN,
        phone: process.env.TWILIO_PHONE
    }
}

export {
    configuration as config
}