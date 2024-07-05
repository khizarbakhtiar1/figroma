// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./01_IdentityAuthorization.sol";
import "./02_DocumentVerification.sol";

contract DocumentNFT is ERC721URIStorage, Ownable {
    // References to external contracts
    IdentityAuthorization private immutable identityAuthorization;
    DocumentVerification private immutable documentVerification;

    // Counter for NFT IDs
    uint256 public tokenCount;

    // Event emitted on NFT minting
    event Minted(uint256 indexed tokenId, address indexed recipient, string tokenURI);

    constructor(address identityContractAddress, address documentVerificationAddress) ERC721("DocumentNFT", "DNFT") Ownable(msg.sender) {
        identityAuthorization = IdentityAuthorization(identityContractAddress);
        documentVerification = DocumentVerification(documentVerificationAddress);
    }

    // Modifier to restrict minting to authorized users
    modifier onlyAuthorized() {
        require(identityAuthorization.isUserHigherAuthority(msg.sender), "Unauthorized: Only higher authorities can mint");
        _;
    }

    // Mint NFT for a verified document
    function mintNFT(uint256 documentId, string memory uri) public onlyAuthorized {
        (, address owner, , bool isVerified, ) = documentVerification.getDocumentDetails(documentId);
        require(isVerified, "Document not verified");

        tokenCount++;
        _mint(owner, tokenCount);
        _setTokenURI(tokenCount, uri);

        emit Minted(tokenCount, owner, uri);
    }

    // Transfer NFT to another address
    function transferNFT(address recipient, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Unauthorized transfer: Not owner or approved");
        _transfer(msg.sender, recipient, tokenId);
    }

    // Override for handling conflicts in multiple inheritance
    function burn(uint256 tokenId) internal {
        super._burn(tokenId);
    }

    // Override for handling conflicts in multiple inheritance
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return super.tokenURI(tokenId);
    }

    // Internal function to check approval or ownership
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {
        address owner = ownerOf(tokenId);
        require (owner != address(0), "");
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }
}
