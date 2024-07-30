// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IdentityRegistry.sol";

contract Institute is ERC721, Ownable {
    address public instituteAddress;
    address public higherAuthority;
    IdentityRegistry public identityRegistry;

    uint256 private _nextTokenId;

    mapping(bytes32 => bool) public documentRequests;
    mapping(bytes32 => bool) public approvedDocuments;
    mapping(uint256 => bytes32) public tokenToDocument;

    event DocumentRequestSubmitted(bytes32 indexed documentHash);
    event SoulBoundTokenMinted(address indexed to, uint256 indexed tokenId, bytes32 indexed documentHash);
    event SoulBoundTokenRevoked(uint256 indexed tokenId, bytes32 indexed documentHash);

    constructor(address _institute, address _higherAuthority, address _identityRegistry) ERC721("SoulBoundToken", "SBT") Ownable(msg.sender) {
        instituteAddress = _institute;
        higherAuthority = _higherAuthority;
        identityRegistry = IdentityRegistry(_identityRegistry);
        _transferOwnership(_institute);
    }

    modifier onlyHigherAuthority() {
        require(_msgSender() == higherAuthority, "Only higher authority can call this function");
        _;
    }

    function submitDocumentRequest(bytes32 _documentHash) external onlyOwner {
        require(!documentRequests[_documentHash], "Document request already submitted");
        documentRequests[_documentHash] = true;
        emit DocumentRequestSubmitted(_documentHash);
    }

    function approveDocument(bytes32 _documentHash) external onlyHigherAuthority {
        require(documentRequests[_documentHash], "Document request not submitted");
        approvedDocuments[_documentHash] = true;
    }

    function rejectDocument(bytes32 _documentHash) external onlyHigherAuthority {
        require(documentRequests[_documentHash], "Document request not submitted");
        delete documentRequests[_documentHash];
    }

    function mintSoulBoundToken(address _to, bytes32 _documentHash) external onlyOwner {
        require(approvedDocuments[_documentHash], "Document not approved");

        uint256 newTokenId = _nextTokenId++;
        _safeMint(_to, newTokenId);
        tokenToDocument[newTokenId] = _documentHash;

        emit SoulBoundTokenMinted(_to, newTokenId, _documentHash);
    }

    function revokeSoulBoundToken(uint256 _tokenId) external onlyOwner {
       
        bytes32 documentHash = tokenToDocument[_tokenId];

        _burn(_tokenId);
        delete tokenToDocument[_tokenId];

        emit SoulBoundTokenRevoked(_tokenId, documentHash);
    }

    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);
        require(from == address(0) || to == address(0), "SoulBoundToken: token transfer is not allowed");
        return super._update(to, tokenId, auth);
    }
}