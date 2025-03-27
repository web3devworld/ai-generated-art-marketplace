const ArtMarketplace = artifacts.require("ArtMarketplace");

contract("ArtMarketplace", (accounts) => {
  let instance;

  before(async () => {
    instance = await ArtMarketplace.deployed();
  });

  it("should create a new artwork", async () => {
    const tokenId = 1;
    const tokenURI = "ipfs://QmExampleCID";
    const price = web3.utils.toWei("1", "ether");

    await instance.createArtwork(tokenURI, price, { from: accounts[0] });

    const artwork = await instance.artworks(tokenId);
    assert.equal(artwork.tokenId, tokenId, "Token ID should match");
    assert.equal(artwork.tokenURI, tokenURI, "Token URI should match");
    assert.equal(artwork.creator, accounts[0], "Creator should match");
    assert.equal(artwork.price, price, "Price should match");
  });
});