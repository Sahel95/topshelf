const {readFileSync} = require('fs')
const abiPath = './src/constant/abi/'


const contracts = {
    sample  : {  
        address : '',
        // abi: JSON.parse(readFileSync( abiPath + '.json'))
    },
}

module.exports = contracts