const { CopyObjectCommand } = require('@aws-sdk/client-s3')
const client = require('./client')
const params = require('./params')

const copy = async (params) => {
    try {
        await client.send(new CopyObjectCommand(params))
    } catch (error) {
        console.log(error)
    }
}
copy(params)
