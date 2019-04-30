var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');
contract('SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_three = accounts[3];

    const CorrectProof = {"proof":
        {
            "A":["0x1c9f519548e61c80547b669544b38baf74020b15150b2e089631fb5e5ffc8fa1", "0x149dfccfe509d663b4d1b35ee19e5b7f16f83c973802e96e51444754508c9f41"],
            "A_p":["0x12f3c77491b56a01321108c25e7acea818ba26f286aec9a5e559c85a9cd48a4a", "0x26ba739140247e2a6ac9e9f811b9033e487a4e958387f515a518af2f781e921"],
            "B":
                [["0x2312959fc819651be7c350f8a53429220a71018f4a86bf3547f4fe66fb373239", "0x1e5c38642c663591afd6ffb3226995cf97bf0c3a5390ccac63900ad691a2314e"], ["0x38a394435aae8607ea47d71f4b837d8a10a750d2dc3e0f7425a33f0054c0643", "0x29d83c866f0586be6c756025a2caf037f76f16ded072dcda26cc4de78f1d8c63"]],
            
            "B_p":["0x210d56b6713ecf3f643ed0eec6ca84215ae941858d498404708413dae5c05dfe", "0x183e279aed334b79574a02622de00ff4205c7448f68b17baf23956e3671f348f"],
            "C":["0x21d90fc05e2cb14efbe3d26bb416c5741801d8ff07a6f262ba03bac10e1aff0b", "0x2df36296b6b520fdc893bef7b4cf67fbcf54df8c0d189300ecab668acd0983c8"],
            "C_p":["0x19926ffd04ff09137a40b35c7f0bc8ca12905bcc62544a91377789901fd8b205", "0x1ff71bede1663639713b7375aa1dc3b608ad96b251980ecca0fd9365057f72da"],
            "H":["0x230550bdb4ef5faa1f382acc756086a7a3b688630cf64448408e2d7a3cb82621", "0x2b34d4fdf6138753d4e377cf54b0f2684f5d25a203d61bc76915c262caf9137c"],
            "K":["0x2977be931ed597134d1faf566468117ebb0da345e5c1765f55a46d9833065bc7", "0xa3911aa990f1874d7470d9f37fadaf5f16f36e8bdede86c1e167f415a0e86b6"]
        },
        "input":[9,1]};

    describe('testing SolnSquareVerifier', function () {
        beforeEach(async function () {
            let verfierContract = await Verifier.new({
                from: account_one
            });
            this.contract = await SolnSquareVerifier.new(verfierContract.address,{
                from: account_one
            });

        });
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('ERC721 token can be minted for contract ', async function () { 
            let result = await this.contract.mint.call(account_three,"3","uri",{from: account_one});
            
            assert.equal(result, true, "the proof provided is not correct");
        })
        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('a new solution can be added for contract  ', async function () { 
            let result = await this.contract.mintNewNFT.call
            (
                account_three, 
                3,
                CorrectProof.proof.A,
                CorrectProof.proof.A_p,
                CorrectProof.proof.B,
                CorrectProof.proof.B_p,
                CorrectProof.proof.C,
                CorrectProof.proof.C_p,
                CorrectProof.proof.H,
                CorrectProof.proof.K,
                CorrectProof.input,
                {from: account_one}
            );
            
            assert.equal(result, true, "the proof provided is not correct");
        })
    });
});