// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract IdentityAuthorization {
    
    // Struct to represent a user
    struct User {
        uint256 userId;
        string name;
        address walletAddress;
        address higherAuthority; // Address of higher authority who can approve/reject requests
        bool isRegistered;
        bool isAdmin;
        bool isHigherAuthority;
    }
    
    mapping(address => User) public users; // Mapping to store users
    
    address public admin; // Address of the contract admin
    
    // Modifier to restrict access to admins only
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    
    // Modifier to restrict access to higher authorities only
    modifier onlyHigherAuthority() {
        require(users[msg.sender].isHigherAuthority, "Only higher authorities can perform this action");
        _;
    }
    
    // Modifier to ensure only registered users can perform actions
    modifier onlyRegisteredUser() {
        require(users[msg.sender].isRegistered, "User is not registered");
        _;
    }
    
    // Event for user registration
    event UserRegistered(address indexed userAddress, uint256 indexed userId, string name);
    
    // Event for role update
    event UserRoleUpdated(address indexed userAddress, bool isAdmin, bool isHigherAuthority);
    
    // Constructor to set the admin when deploying the contract
    constructor() {
        admin = msg.sender;
    }
    
    // Function to register a new user
    function registerUser(string memory _name) external {
        require(!users[msg.sender].isRegistered, "User is already registered");
        
        uint256 userId = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 1000000; // Generate unique userId
        
        users[msg.sender] = User({
            userId: userId,
            name: _name,
            walletAddress: msg.sender,
            higherAuthority: address(0),
            isRegistered: true,
            isAdmin: false,
            isHigherAuthority: false
        });
        
        emit UserRegistered(msg.sender, userId, _name);
    }
    
    // Function to authorize a higher authority
    function authorizeHigherAuthority(address _higherAuthority) external onlyAdmin {
        require(users[_higherAuthority].isRegistered, "Higher authority must be a registered user");
        require(!users[_higherAuthority].isHigherAuthority, "Address is already a higher authority");
        
        users[_higherAuthority].isHigherAuthority = true;
        
        emit UserRoleUpdated(_higherAuthority, users[_higherAuthority].isAdmin,true);
    }
    
    // Function to update roles (admin or higher authority)
    function updateRole(address _userAddress, bool _isAdmin, bool _isHigherAuthority) external onlyAdmin {
        require(users[_userAddress].isRegistered, "User must be a registered user");
        
        users[_userAddress].isAdmin = _isAdmin;
        users[_userAddress].isHigherAuthority = _isHigherAuthority;
        
        emit UserRoleUpdated(_userAddress, _isAdmin, _isHigherAuthority);
    }
    
    // Function to get user details
    function getUserDetails(address _userAddress) external view returns (uint256, string memory, address, address, bool, bool, bool) {
        User memory user = users[_userAddress];
        return (user.userId, user.name, user.walletAddress, user.higherAuthority, user.isRegistered, user.isAdmin, user.isHigherAuthority);
    }
    
    // Function to check if a user is registered
    function isUserRegistered(address _userAddress) external view returns (bool) {
        return users[_userAddress].isRegistered;
    }
    
    // Function to check if a user is a higher authority
    function isUserHigherAuthority(address _userAddress) external view onlyRegisteredUser returns (bool) {
        return users[_userAddress].isHigherAuthority;
    }
}

