const { expect } = require("chai");
const { ethers } = require("hardhat");

let Token;
let deployedToken;
let owner, addr1, addr2;

/**
 * Will run before each test, re-deploying the contract every time.
**/
beforeEach(async function () {
    //Get contract factory and Signers
    Token = await ethers.getContractFactory("Token");
    [owner, addr1, addr2] = await ethers.getSigners();

    //Deploy contract
    deployedToken = await Token.deploy();
});

/**
 * Test deployment of contract
**/

describe("Deployment", function () {
    //Expect contract owner variable to be the same as signer's owner
    it("Should set the right owner", async function () {
        expect(await deployedToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
        const ownerBalance = await deployedToken.balanceOf(owner.address);
        expect(await deployedToken.totalSupply()).to.equal(ownerBalance);
    });
});

/**
 * Test Transactions
 */
describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const deployedToken = await Token.deploy();

        //Transfer 50 Tokens from owner to addr1
        await deployedToken.transfer(addr1.address, 50);
        expect(await deployedToken.balanceOf(addr1.address)).to.equal(50)

        //Transfer 50 Tokens from addr1 to addr2
        await deployedToken.connect(addr1).transfer(addr2.address, 50);
        expect(await deployedToken.balanceOf(addr2.address)).to.equal(50);
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
        const initialOwnerBalance = await deployedToken.balanceOf(owner.address);

        await expect(
            deployedToken.connect(addr1).transfer(owner.address, 1)
        ).to.be.revertedWith("Not enough tokens");

        expect(await deployedToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
});