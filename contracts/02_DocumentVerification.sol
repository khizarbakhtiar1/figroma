// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./01_IdentityAuthorization.sol";

contract DocumentVerification {
    
    IdentityAuthorization identityContract; // Instance of IdentityAuthorization contract
    
    // Struct to represent a document
    struct Document {
        uint256 documentId;
        address owner;
        string documentHash;
        bool isVerified;
        address verifiedBy;
    }
    
    mapping(uint256 => Document) public documents; // Mapping to store documents
    uint256 public documentCount; // Counter for document IDs
    
    // Event for document submission
    event DocumentSubmitted(uint256 indexed documentId, address indexed owner, string documentHash);
    
    // Event for document verification
    event DocumentVerified(uint256 indexed documentId, address indexed verifiedBy, bool isVerified);
    
    // Constructor to set the address of the IdentityAuthorization contract
    constructor(address _identityContractAddress) {
        identityContract = IdentityAuthorization(_identityContractAddress);
    }
    
    // Modifier to ensure only registered users can submit documents
    modifier onlyRegisteredUser() {
        require(identityContract.isUserRegistered(msg.sender), "User is not registered");
        _;
    }
    
    // Modifier to restrict access to higher authorities only
    modifier onlyHigherAuthority() {
        require(identityContract.isUserHigherAuthority(msg.sender), "Only higher authorities can perform this action");
        _;
    }
    
    // Function to submit a new document
    function submitDocument(string memory _documentHash) external onlyRegisteredUser {
        documentCount++;
        
        documents[documentCount] = Document({
            documentId: documentCount,
            owner: msg.sender,
            documentHash: _documentHash,
            isVerified: false,
            verifiedBy: address(0)
        });
        
        emit DocumentSubmitted(documentCount, msg.sender, _documentHash);
    }
    
    // Function to verify a document
    function verifyDocument(uint256 _documentId, bool _isVerified) external onlyHigherAuthority {
        Document storage document = documents[_documentId];
        
        require(document.owner != address(0), "Document does not exist");
        require(!document.isVerified, "Document is already verified");
        
        document.isVerified = _isVerified;
        document.verifiedBy = msg.sender;
        
        emit DocumentVerified(_documentId, msg.sender, _isVerified);
    }
    
    // Function to get document details
    function getDocumentDetails(uint256 _documentId) external view returns (uint256, address, string memory, bool, address) {
        Document memory document = documents[_documentId];
        return (document.documentId, document.owner, document.documentHash, document.isVerified, document.verifiedBy);
    }
}
