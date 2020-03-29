exports.handler = async event => {
    return {
        statusCode: 200,
        body: require("./data.json")
    }
}