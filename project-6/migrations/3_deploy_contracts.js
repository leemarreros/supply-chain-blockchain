// migrating the appropriate contracts
var DistributorRole = artifacts.require("./DistributorRole.sol");

module.exports = async function (deployer, network, accounts) {
  try {
    await deployer.deploy(DistributorRole);
  } catch (error) {
    console.log(error);
  }
};
