pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

import "./verifier.sol"
import "./ERC721Mintable.sol"

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is omarContract {

// TODO define a solutions struct that can hold an index & an address
struct solution {
    uint256 index;
    address solAddress
}

// TODO define an array of the above struct
// no need to use the array as stated here https://medium.com/@andresaaap/capstone-real-estate-marketplace-project-faq-udacity-blockchain-69fe13b4c14e

// TODO define a mapping to store unique solutions submitted

mapping(bytes32 => solution) private solutions;

// TODO Create an event to emit when a solution is added

event solutionAdded(address solution, uint256 index);

// TODO Create a function to add the solutions to the array and emit the event

function addSolution (uint256 _index ,address _solAddress, bytes32 _solHash) public{
    solutions[]
}

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
}


  


























