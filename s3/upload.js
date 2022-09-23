require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const s3 = new AWS.S3({ accessKeyId, secretAccessKey });

const uploadFile = (fileName) => {
    const bucket = "버켓이름";
    const key = "객체이름";
    const fileContent = fs.readFileSync(fileName);
    const params = {
        Bucket: bucket,
        Key: key,
        Body: fileContent,
    };
    s3.upload(params, (error, data) => {
        if (error) console.log(error);
        console.log(`성공 ${data.Location}`);
    });
};
uploadFile("./anyfile.json");
