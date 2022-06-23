const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});

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
});