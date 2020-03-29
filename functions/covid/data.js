exports.handler = async event => {
    return {
        statusCode: 200,
        body: require.resolve("./assets/data.json")
    }
}