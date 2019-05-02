# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

##documentation
the documentation folder contains screenshots and files for the testing , migrating , minting , proof.json files and opensea please take a look at it. 
oh and by the way omar is my sun .. i named this contract by his name .. i started this course 12 oct and had him on 16 

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
   > transaction hash:    0x1fbd085b84a27659bbc2ecd6eb493aa6dbce8611c90b7c37a59f5f65173cdc78
   > contract address:    0xCa7D0CE4671abbD303FBC81e9Dc0ab263f5BB52A
   > account:             0xDfaAFaad74Ab0D7781FCE1038C8913869c10E09E
--------------------

##deploying SolnSquareVerifier contract
- change the mnemonic to your meta mask wallet
- i have two laptops i changed the laptop when deploying to rinkeby because i had a problem the mac 

   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x9179d6083402a9eae4ed16320578506ecf47b8e48f26d826ff10133d9ead8d73
   > contract address:    0xEaaa1A274cEb1C159f629bc986A1B194690C80b0
   > account:             0x46Bab659378011Ab000c7EE3bdb0717569B63d03
   ------------------------------ß
i redeployed the contract because i had problems in opensea:

##deploying SolnSquareVerifier contract
- for minting i used `myEtherWallet` suggested by the awesome mentor chris

##open sea link
https://rinkeby.opensea.io/category/omarcontract

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
