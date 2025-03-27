const ArtMarketplace = artifacts.require("ArtMarketplace");

module.exports = function (deployer) {
  deployer.deploy(ArtMarketplace);
};