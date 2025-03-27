// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ArtMarketplace is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Artwork {
        uint256 tokenId;
        string tokenURI;
        address creator;
        uint256 price;
        bool forSale;
    }

    mapping(uint256 => Artwork) public artworks;
    mapping(address => uint256[]) public userArtworks;

    event ArtworkCreated(uint256 indexed tokenId, address indexed creator, string tokenURI, uint256 price);
    event ArtworkPurchased(uint256 indexed tokenId, address indexed buyer, uint256 price);

    constructor() ERC721("AI Art Marketplace", "AIART") {}

    function createArtwork(string memory _tokenURI, uint256 _price) external {
        require(_price > 0, "Price must be greater than 0");
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        artworks[newTokenId] = Artwork(newTokenId, _tokenURI, msg.sender, _price, true);
        userArtworks[msg.sender].push(newTokenId);

        emit ArtworkCreated(newTokenId, msg.sender, _tokenURI, _price);
    }

    function buyArtwork(uint256 _tokenId) external payable {
        Artwork storage artwork = artworks[_tokenId];
        require(artwork.forSale, "Artwork is not for sale");
        require(msg.value >= artwork.price, "Insufficient funds");

        address seller = artwork.creator;
        artwork.forSale = false;

        payable(seller).transfer(msg.value);
        _transfer(seller, msg.sender, _tokenId);

        emit ArtworkPurchased(_tokenId, msg.sender, artwork.price);
    }

    function toggleForSale(uint256 _tokenId, uint256 _newPrice) external {
        Artwork storage artwork = artworks[_tokenId];
        require(artwork.creator == msg.sender, "Only the creator can modify the sale status");
        artwork.forSale = !artwork.forSale;
        if (_newPrice > 0) {
            artwork.price = _newPrice;
        }
    }

    function getUserArtworks(address _user) external view returns (uint256[] memory) {
        return userArtworks[_user];
    }
}