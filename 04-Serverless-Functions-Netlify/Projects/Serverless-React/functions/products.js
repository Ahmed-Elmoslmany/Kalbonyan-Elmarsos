import {configDotenv} from "dotenv";

configDotenv()
import Airtable from 'airtable-node';

// eslint-disable-next-line no-undef
const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_TOKEN})
    .base('yourBase')
    .table('products')

// eslint-disable-next-line no-undef
export const handler = async (event, context) => {
    // console.log(event)
    if (event.queryStringParameters.id) {
        const {id} = event.queryStringParameters
        try {
            const product = await airtable.retrieve(id)
            if (product.error) {
                return {
                    statusCode: 404,
                    body: `No product with id: ${id}`,
                }
            }
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: `Server Error`,
            }
        }
    }
    try {
        const {records} = await airtable.list()
        const products = records.map((product) => {
            const {id} = product
            const {name, image, price} = product.fields
            const url = image[0].url
            return {id, name, url, price}
        })
        return {
            statusCode: 200,
            body: JSON.stringify(products),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server Error',
        }
    }
}
