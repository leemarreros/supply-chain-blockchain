// migrating the appropriate contracts
var ConsumerRole = artifacts.require("./ConsumerRole.sol");

module.exports = async function (deployer, network, accounts) {
  try {
    await deployer.deploy(ConsumerRole);
  } catch (error) {
    console.log(error);
  }
};
