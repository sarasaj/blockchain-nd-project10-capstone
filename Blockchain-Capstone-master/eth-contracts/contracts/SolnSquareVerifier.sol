pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is omarContract {

// TODO define a solutions struct that can hold an index & an address
struct solution {
    uint256 index;
    address solAddress;
}
// TODO define an array of the above struct
// no need to use the array as stated here https://medium.com/@andresaaap/capstone-real-estate-marketplace-project-faq-udacity-blockchain-69fe13b4c14e

// TODO define a mapping to store unique solutions submitted

mapping(bytes32 => solution) private solutions;

// TODO Create an event to emit when a solution is added

event solutionAdded(uint256 index,address solAddress);

// TODO Create a function to add the solutions to the array and emit the event

function addSolution (uint256 _index ,address _solAddress, bytes32 _solHash) public{
    solutions[_solHash] = solution({
        index: _index ,
        solAddress: _solAddress
    });
    emit solutionAdded(_index,_solAddress);
}
Verifier verifierContract;
constructor(address verifierContractAddress) public{
    verifierContract = Verifier(verifierContractAddress);
}
// TODO Create a function to mint new NFT only after the solution has been verified

//  - make sure you handle metadata as well as tokenSuplly
function mintNewNFT
                    (
                    address _address , 
                    uint256 _index,
                    uint[2] memory a,
                    uint[2] memory a_p,
                    uint[2][2] memory b,
                    uint[2] memory b_p,
                    uint[2] memory c,
                    uint[2] memory c_p,
                    uint[2] memory h,
                    uint[2] memory k,
                    uint[2] memory input
                    ) public returns(bool){

                    bytes32 solHash = keccak256(abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));
                    //  - make sure the solution is unique (has not been used before)
                    require(solutions[solHash].solAddress == address(0), "solution is not unique it already exist before");
                    require(verifierContract.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input), "solution is not verified");     
                    return super.mint(_address, _index, "URI");

                    }
}


  


























