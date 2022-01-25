
const TokenYieldFarm = artifacts.require("TokenYieldFarm");
const DAppToken = artifacts.require("DAppToken");
const IERC20 = artifacts.require("IERC20");


function tokens(n) {
    return web3.utils.toWei(n, 'ether');
}


contract('TokenYieldFarm', ([owner, investor]) => {
    let dappToken, tokenYieldFarm
    
    beforeEach(async() => {
        // Load Contracts
        dappToken = await DAppToken.new()
        tokenYieldFarm = await TokenYieldFarm.new(dappToken.address)

         // Transfer all Dapp tokens to the token yield farm
         await dappToken.transfer(tokenYieldFarm.address, tokens('1000000'))
         
    })

    describe('Dapp Token deployment', async () => {
        it('has a name', async () => {
            const name = await dappToken.name()
            assert.equal(name, 'DApp Token')
        })
    })
    

})