AI-Generated Art Marketplace

A decentralized application (dApp) for creators to sell AI-generated art as NFTs on the blockchain.

Built by [Web3Dev Strategy Consulting](https://web3dev.click)  
For support, contact us at: [support@web3dev.click](mailto:support@web3dev.click)



 Table of Contents
1. [Features](features)
2. [Installation](installation)
3. [Deployment](deployment)
4. [Usage](usage)
5. [Contributing](contributing)
6. [License](license)
7. [Credits](credits)



 Features
- Mint NFTs: Creators can mint AI-generated art as NFTs.
- List Artworks: Artists can list their artworks for sale with a set price.
- Buy NFTs: Users can purchase NFTs using Ether (ETH).
- Decentralized Storage: Artwork metadata is stored on IPFS for immutability.
- User-Friendly Interface: A React-based frontend for seamless interaction.



 Installation

 Prerequisites
- Node.js (v16 or higher)
- Truffle (`npm install -g truffle`)
- Ganache or a compatible Ethereum testnet (e.g., Rinkeby)
- MetaMask wallet extension installed in your browser
- Git

 Steps

1. Clone the Repository
   ```bash
   git clone https://github.com/web3devworld/ai-generated-art-marketplace.git
   cd ai-generated-art-marketplace
   ```

2. Install Dependencies
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. Set Up Environment Variables
   - Create a `.env` file in the `backend` directory with the following variables:
     ```
     PORT=5000
     INFURA_PROJECT_ID=your-infura-project-id
     INFURA_SECRET_KEY=your-infura-secret-key
     ```
   - Create a `.env` file in the `frontend` directory with the following variable:
     ```
     REACT_APP_CONTRACT_ADDRESS=your-contract-address
     ```

4. Compile and Deploy the Smart Contract
   - Ensure you have a compatible Ethereum network running (e.g., Ganache or Rinkeby).
   - Compile and deploy the smart contract using Truffle:
     ```bash
     truffle compile
     truffle migrate --network rinkeby
     ```
   - Note the deployed contract address and update it in the `frontend/.env` file.



 Deployment

 Backend Server
1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```
   The server will run on `http://localhost:5000`.

 Frontend Application
1. Start the React frontend:
   ```bash
   cd frontend
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

 Smart Contract Deployment
1. Ensure your wallet is connected to the desired Ethereum network (e.g., Rinkeby).
2. Use the Truffle migration script to deploy the contract:
   ```bash
   truffle migrate --network rinkeby
   ```
3. Update the frontend `.env` file with the deployed contract address.



 Usage

1. Connect Your Wallet:
   - Open the frontend app in your browser (`http://localhost:3000`).
   - Connect your MetaMask wallet to the app.

2. Mint an NFT:
   - Upload your AI-generated artwork to IPFS via the backend server.
   - Use the frontend interface to mint the artwork as an NFT.

3. List and Buy Artworks:
   - List your minted artwork for sale with a price in ETH.
   - Other users can browse the marketplace and purchase listed artworks.



 Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature or fix"
   ```
4. Push your changes to GitHub:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request to the `main` branch.



 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



 Credits

Built by Web3Dev Strategy Consulting  
For inquiries, collaborations, or support, contact us at:  
📧 support@web3dev.click  
🌐 https://web3dev.click



This README provides comprehensive instructions for installation, deployment, and usage of the AI-generated art marketplace dApp.
