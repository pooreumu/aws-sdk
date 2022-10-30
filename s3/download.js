require('dotenv').config()
const fs = require('fs')
const { GetObjectCommand } = require('@aws-sdk/client-s3')
const params = require('./params')
const client = require('./client')

const downloadFile = async ({ Bucket, Key }) => {
    try {
        const params = { Bucket, Key }
        const command = new GetObjectCommand(params)
        const data = await client.send(command)
        const result = await data.Body.transformToString()
        fs.writeFileSync(params.Key, result)
    } catch (error) {
        console.error(error)
    }
}

downloadFile(params)
