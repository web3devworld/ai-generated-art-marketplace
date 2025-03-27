import React, { useEffect, useState } from "react";
import Web3 from "web3";
import ArtMarketplaceABI from "./contracts/ArtMarketplace.json";
import { Container, Button, Card } from "react-bootstrap";

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      alert("Please install MetaMask!");
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = ArtMarketplaceABI.networks[networkId];
    const instance = new web3.eth.Contract(
      ArtMarketplaceABI.abi,
      deployedNetwork && deployedNetwork.address
    );
    setContract(instance);

    const artworkCount = await instance.methods.tokenIds().call();
    const artworks = [];
    for (let i = 1; i <= artworkCount; i++) {
      const artwork = await instance.methods.artworks(i).call();
      artworks.push(artwork);
    }
    setArtworks(artworks);
  };

  const buyArtwork = async (tokenId, price) => {
    await contract.methods.buyArtwork(tokenId).send({ from: account, value: price });
    alert("Artwork purchased successfully!");
  };

  return (
    <Container>
      <h1>AI-Generated Art Marketplace</h1>
      <p>Your account: {account}</p>
      <div className="artworks">
        {artworks.map((artwork) => (
          <Card key={artwork.tokenId} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={artwork.tokenURI} />
            <Card.Body>
              <Card.Title>Artwork #{artwork.tokenId}</Card.Title>
              <Card.Text>
                Price: {Web3.utils.fromWei(artwork.price, "ether")} ETH
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => buyArtwork(artwork.tokenId, artwork.price)}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default App;