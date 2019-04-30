# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

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
change the 


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
