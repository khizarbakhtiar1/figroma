# Figroma DApp Smart Contracts Documentation

## Overview

The Figroma DApp consists of four main smart contracts:

1. IdentityRegistry
2. Factory
3. Authority
4. Institute

These contracts work together to create a decentralized system for managing higher authorities, institutes, and document verification processes.

## Contract Details

### 1. IdentityRegistry Contract

The IdentityRegistry contract is responsible for all types of registration within the DApp.

#### Key Features:

- Manages a Super Admin and up to 5 additional admins
- Handles registration and approval of Higher Authorities
- Manages registration of Institutes

#### Main Functions:

- `addAdmin(address _newAdmin)`: Allows the Super Admin to add new admins (up to 5 total).
- `removeAdmin(address _admin)`: Allows the Super Admin to remove admins.
- `registerHigherAuthority(string memory _authorityName)`: Allows Higher Authorities to register.
- `approveHigherAuthority(address _authority)`: Allows admins to approve Higher Authorities.
- `registerInstitute(string memory _instituteName, address _higherAuthority)`: Allows Institutes to register under a specific Higher Authority.
- `approveInstitute(address _institute)`: Allows Higher Authorities to approve Institutes under their supervision.

#### Important Notes:

- The contract deployer becomes the Super Admin.
- Higher Authority approval requires at least 3 admin approvals.
- Institutes choose their specific Higher Authority during registration.

### 2. Factory Contract

The Factory contract creates instances for each onboarded Higher Authority and registered Institute.

#### Key Features:

- Creates and manages Authority and Institute contract instances
- Sets up a Super Higher Authority

#### Main Functions:

- `setSuperHigherAuthority(address _superHigherAuthority)`: Sets the Super Higher Authority.
- `createAuthorityContract(address _authority)`: Creates an Authority contract instance.
- `createInstituteContract(address _institute, address _authority)`: Creates an Institute contract instance.

#### Important Notes:

- Only the IdentityRegistry can call `createAuthorityContract` and `createInstituteContract`.
- The Super Higher Authority can approve or reject requests from organizations not linked to other Higher Authorities.

### 3. Authority Contract

The Authority contract monitors the Institutes under their supervision and approves or rejects document requests.

#### Key Features:

- Manages document approval process
- Can revoke Institute access

#### Main Functions:

- `approveDocumentRequest(address _institute, bytes32 _documentHash)`: Approves a document request from an Institute.
- `rejectDocumentRequest(address _institute, bytes32 _documentHash)`: Rejects a document request from an Institute.
- `revokeInstituteAccess(address _institute)`: Revokes access for a specific Institute.

#### Important Notes:

- Only the Higher Authority can approve or reject document requests.
- The Super Higher Authority automatically approves all document requests.

### 4. Institute Contract

The Institute contract handles document request submissions and minting of soul-bound tokens.

#### Key Features:

- Submits document requests to Higher Authorities
- Mints soul-bound tokens (non-transferrable NFTs)
- Manages credit system for document verification

#### Main Functions:

- `submitDocumentRequest(bytes32 _documentHash)`: Submits a document request to the Higher Authority.
- `mintSoulBoundToken(address _to, bytes32 _documentHash)`: Mints a soul-bound token after document approval.
- `purchaseCredits(uint256 planType)`: Allows Institutes to purchase credits for document verification.

#### Important Notes:

- Institutes need credits to submit document requests.
- Soul-bound tokens are non-transferrable NFTs.
- Three credit plans are available: Basic, Standard, and Premium.

## Usage Flow

1. Deploy the IdentityRegistry contract (Super Admin is set).
2. Deploy the Factory contract, linking it to the IdentityRegistry.
3. Set the Super Higher Authority in the Factory contract.
4. Higher Authorities register through the IdentityRegistry.
5. Admins approve Higher Authorities (requires 3 approvals).
6. Institutes register under specific Higher Authorities.
7. Higher Authorities approve Institute registrations.
8. Institutes purchase credits and submit document requests.
9. Higher Authorities approve or reject document requests.
10. Institutes mint soul-bound tokens for approved documents.


## Conclusion

This documentation provides an overview of the smart contracts used in the Figroma DApp. For detailed implementation and function specifics, please refer to the individual contract files.
