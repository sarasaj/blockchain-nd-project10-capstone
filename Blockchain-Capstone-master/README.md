# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

##documentation
the documentation folder contains screenshots of testing , migrating , minting and proof.json files please take a look at it. 

## Install
`npm install`
`npm install openzeppelin-solidity`
`npm install truffle-hdwallet-provider`
`truffle compile`
`truffle migrate --reset`

## Develop Client

To run truffle tests:

seprate tests:
`truffle test ./test/TestERC721Mintable.js`
`truffle test ./test/TestSquareVerifier.js`
`truffle test ./test/TestSolnSquareVerifier.js`

all tests:
`truffle test`

## Zokrates
5 proofs were generated in the ouside folder.
docker run -v /Users/Ayman/Documents/GitHub/blockchain-nd-project10-capstone/Blockchain-Capstone-master/zokrates/code:/home/zokrates/code -ti zokrates/zokrates:0.3.0 /bin/bash

##deploying verifier contract
'Verifier'
--------------------
   > transaction hash:    0x48094289a68da8c48a5680ee48e8dddd605b5b85dbb7a357e7aa0717c61a273c
   > contract address:    0xf0231971783aA62299B57918A6F17138aCda7840
   > account:             0xDfaAFaad74Ab0D7781FCE1038C8913869c10E09E
--------------------

##deploying SolnSquareVerifier contract
- change the mnemonic to your meta mask wallet
- i have two laptops i changed the laptop when deploying to rinkeby because i had a problem the mac 

'SolnSquareVerifier'
------------------------------
   > transaction hash:    0x016c9d3c5f6a7ddc6e660253f628adcfd9767172c4d4a4606b0782aece95ed23
   > contract address:    0x37FF627F1650974f4d82f6A34c9C10aD2F0a2d96
   > account:             0x46Bab659378011Ab000c7EE3bdb0717569B63d03
------------------------------
i redeployed the contract because i had problems in opensea:

##deploying SolnSquareVerifier contract
- for minting i used `myEtherWallet` suggested by the awesome mentor chris


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
