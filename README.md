# BNBPropertyLink

BNBPropertyLink is a blockchain-based platform for transparent and efficient real estate transactions. Built on the Mantle network, it enables fractional ownership, programmable property rights, and transparent transaction histories.

# Overview
# Key Features
- Mint Property NFTs: Tokenize property ownership as NFTs, ensuring secure and tamper-proof records.
- Fractional Ownership: Support multiple owners with programmable ownership percentages.
- Rental Income Distribution: Efficiently distribute rental income to property stakeholders.
- Transparency: Provide immutable transaction history on the blockchain.
- Scalability: Designed for integration with government registries and future multi-chain expansion.

# Smart Contract Overview
The project uses three main smart contracts to handle different functionalities:

**1. FractionalOwnership:**
- Manages fractional ownership of properties.
- Allows issuing shares, voting on decisions, and tracking governance votes.

**Key Functions**:
- issueShare(uint256 propertyId, address to, uint256 percentage): Issues fractional ownership.
- voteOnDecision(uint256 propertyId, string memory decision): Enables governance voting.
- getPropertyShares(uint256 propertyId): Retrieves ownership shares.

**2. PropertyNFT:**
- Tokenizes real estate as ERC721 NFTs.
- Allows minting properties and updating property values.

**Key Functions:**
- mintProperty(address to, uint256 value, string memory metadata): Mints a new property NFT.
- updatePropertyValue(uint256 tokenId, uint256 newValue): Updates the valuation of a property.

**3. TransactionHandler:**
- Handles payments and rental income distribution among fractional owners.
- Registers ownership and calculates income shares.

**Key Functions:**
- distributeRentalIncome(uint256 propertyId): Distributes rental income to owners.
- registerOwner(uint256 propertyId, address owner, uint256 percentage): Registers a fractional owner.
- getOwners(uint256 propertyId): Retrieves all owners of a property.

# Setup Instructions
**Prerequisites**
- Node.js v16+.
- Hardhat development environment installed globally.
- Access to the mantle sepolia testnet with a funded wallet.

**Installation**
- Clone the repository:

   - git clone https://github.com/Hackathonzx/BNB-Property.git

   -  cd BNB-property

- Install dependencies:
   - npm install

- Configuration
   - Create a .env file in the root directory with the following:

   - PRIVATE_KEY=<YourPrivateKey>
   - RPC_URL=<YOURRPCURL>
   - Replace <YourPrivateKey> and <RPC_URL> with the appropriate values.

# Deployment
- Compile contracts:
   - npx hardhat compile
- Deploy all three contracts to the mantle sepolia Testnet:
   - npx hardhat run ignition/modules/deploy.js --network MantleSepoliaTestnet

- This script will:
   - Deploy PropertyNFT, FractionalOwnership, and TransactionHandler.

- Log the contract addresses in the console.

   - PropertyNFT deployed to: 0x41CD3d7753eeAD4c2d384a6C0074eA4c27dE36F1
   - FractionalOwnership deployed to: 0x1d8c981FD95060A45b3Cea346DbF7b5b48f5CD36
   - TransactionHandler deployed to: 0xf1979Ac32D086D1f3f3773fe0828d37729ed545f


# Testing

Test all cases of the contract by running:
- npx hardhat test
- Here are the test coverage:

Real Estate Smart Contracts

    PropertyNFT Contract

      ✔ should mint a property NFT (69ms)

      ✔ should update property value

      ✔ should revert when a non-owner tries to update value (53ms)

    FractionalOwnership Contract

      ✔ should issue fractional ownership shares (43ms)

      ✔ should register a fractional owner

      ✔ should allow a fractional owner to vote

      ✔ should prevent non-owners from voting

      ✔ should prevent duplicate voting

    TransactionHandler Contract

      ✔ should register a fractional owner (38ms)

      ✔ should distribute rental income to fractional owners

      ✔ should revert if no rental income is provided


  11 passing (4s)



# Usage Instructions
1. Mint a Property NFT
- Use the mintProperty function in the PropertyNFT contract to tokenize a property:

```javascript
const tx = await propertyNFT.mintProperty(
  "0xOwnerAddress",
  100000, // Initial property value
  "ipfs://QmMetadataHash" // Metadata URI
);
await tx.wait();
```

2. Register Fractional Ownership
- Use the registerOwner function in the TransactionHandler contract:

```javascript
const tx = await transactionHandler.registerOwner(
  1, // Property ID
  "0xFractionalOwnerAddress",
  20 // Ownership percentage
);
await tx.wait();
```

3. Distribute Rental Income
- Use the distributeRentalIncome function in the TransactionHandler contract:

```javascript
const tx = await transactionHandler.distributeRentalIncome(1, {
  value: ethers.utils.parseEther("1.0") // Rental income in ETH
});
await tx.wait();
```

4. Governance Voting
- Use the voteOnDecision function in the FractionalOwnership contract:

```javascript
const tx = await fractionalOwnership.voteOnDecision(
  1, // Property ID
  "Sell" // Decision
);
await tx.wait();
```

# Business Model

- Revenue Streams
   - Transaction Fees: Fees for minting property NFTs and registering fractional owners.
   - Premium Features: Advanced features like governance analytics for fractional owners.

- Scalability
   - Integrate with government land registries for official real-world adoption.
   - Add cross-chain compatibility for interoperability with other ecosystems.

# Technical Innovations
- Fractional Ownership: Programmable property rights for multiple owners.
- Transparency: Immutable, tamper-proof transaction records on the blockchain.
- Efficiency: Streamlined processes reduce time and costs in real estate transactions.

# Roadmap
- Short-term Goals (0–1 months):
   - Add enhanced search and filter options for properties.
   - Integrate decentralized storage (IPFS) for property metadata.

- Long-term Goals (1–3 months):
   - Build partnerships with government land registries for real-world adoption.
   - Add cross-chain functionality to expand to other blockchain networks.

# Contact
- Developer: uthman fatima
- Email: futhmah456@gmail.com
- GitHub: https://github.com/Jumcee
