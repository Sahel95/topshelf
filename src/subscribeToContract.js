const contracts = require('./constant/contracts')


const subscribeToContract = (name, web3) => {
    address = contracts[name]['address']
    abi = contracts[name]['abi']

    const contract = new web3.eth.Contract(
        abi,
        address
    )

    return contract
}


module.exports = subscribeToContract

