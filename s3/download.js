require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({ region: process.env.AWS_REGION });
const downloadFile = (params) => {
    s3.getObject(params, (error, data) => {
        if (error) console.log(error);
        const result = data.Body.toString();
        const parse = JSON.parse(result);
        console.log(parse);
        fs.writeFileSync(params.Key, result);
    });
};
downloadFile({
    Bucket: "버켓이름",
    Key: "객체이름",
});
