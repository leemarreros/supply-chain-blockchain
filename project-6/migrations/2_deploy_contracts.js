var FarmerRole = artifacts.require("./FarmerRole.sol");

module.exports = async function (deployer) {
  try {
    await deployer.deploy(FarmerRole);
  } catch (error) {
    console.log(error);
  }
};
