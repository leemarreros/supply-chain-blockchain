// migrating the appropriate contracts
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = async function (deployer) {
  try {
    await deployer.deploy(SupplyChain);
  } catch (error) {
    console.log(error);
  }
};
