// migrating the appropriate contracts
var Ownable = artifacts.require("./Ownable.sol");

module.exports = async function (deployer) {
  try {
    await deployer.deploy(Ownable);
  } catch (error) {
    console.log(error);
  }
};
