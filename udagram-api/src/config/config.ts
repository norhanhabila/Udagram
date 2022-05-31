import * as dotenv from "dotenv";
dotenv.config();

// // ENV variables
// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

// const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
// Are Also needed

export const config = {
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,

  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
