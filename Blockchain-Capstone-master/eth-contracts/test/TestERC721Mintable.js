
var ERC721MintableComplete = artifacts.require('omarContract');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            for (let index = 10; index < 15; index++) {
                await this.contract.mint(accounts[index],index,"newtoken:url");
                
            }
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply,5,"total supply of tokens id not corect");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(accounts[10]);
            assert.equal(balance,1,"token count is not correct");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(11);
            assert.equal(tokenURI,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/11", "token uri is not correct");
        })

        it('should transfer token from one owner to another', async function () { 
            let from = accounts[11]; //or use get ownerOf()
            let to = accounts[12];

            await this.contract.transferFrom(from,to,11,{from: from});
            let newOwner = await this.contract.ownerOf(11,{from:account_one});
            assert.equal(newOwner,to,"transferFrom has failed")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failFlag = false;
            try {
                await this.contract.mint(account[16],16,"new url",{from: account_two}); //account_one is owner so this should fail
            } catch (error) {
                failFlag = true;
            }
            assert.equal(failFlag,true,"onlyOwner didn't work")
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner.call({from:account_one});
            assert.equal(owner,account_one,"owner is not account_one");
        })

    });
})