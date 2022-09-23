require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const s3 = new AWS.S3({ accessKeyId, secretAccessKey });
const downloadFile = (params) => {
    s3.getObject(params, (error, data) => {
        if (error) console.log(error);
        const result = data.Body.toString();
        const parse = JSON.parse(result);
        console.log(parse);
        fs.writeFileSync(fileName, data);
    });
};
downloadFile({
    Bucket: "버켓이름",
    Key: "객체이름",
});
