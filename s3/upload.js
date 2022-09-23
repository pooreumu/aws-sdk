require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const uploadFile = ({ bucket, key, fileName }) => {
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
uploadFile({
    bucket: "버켓이름",
    key: "객체이름",
    fileName: "./test1.json",
});
