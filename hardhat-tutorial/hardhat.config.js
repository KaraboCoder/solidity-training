require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    rinkeby: {
      url: `${process.env.INFURA_RINKEBY_LINK}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};
