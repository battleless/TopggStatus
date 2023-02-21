const axios = require('axios');

const topggQuery = async (endpoint) => {
    const data = await axios.get(`https://top.gg/api/${endpoint}`, {
        validateStatus: function (status) {
            return status < 600;
        }
    });

    return data;
}

module.exports = topggQuery;