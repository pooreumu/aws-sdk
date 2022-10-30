require('dotenv').config()
const { PutObjectCommand } = require('@aws-sdk/client-s3')
const client = require('./client')

const path = require('path')
const fs = require('fs')

const file = './test1.json'
const fileStream = fs.createReadStream(file)

const { Bucket } = require('./params')

const upload = async (params) => {
    try {
        await client.send(new PutObjectCommand(params))
    } catch (error) {
        console.error(error)
    }
}
upload({
    Bucket,
    Key: path.basename(file),
    Body: fileStream,
})
