// migrating the appropriate contracts
var RetailerRole = artifacts.require("./RetailerRole.sol");

module.exports = async function (deployer) {
  try {
    await deployer.deploy(RetailerRole);
  } catch (error) {
    console.log(error);
  }
};
