require('dotenv').config()

const { S3Client } = require('@aws-sdk/client-s3')
const client = new S3Client({ region: process.env.AWS_REGION })

module.exports = client
