# Simple Storage Smart Contract using Hardhat

This is a sample project that demonstrates how to write, test, and deploy a simple storage smart contract using Hardhat.

## Prerequisites

To run this project, you will need:

- Node.js v14 or later
- Hardhat v2.0 or later

## Getting Started

To get started, follow these steps:

1. Clone the repository:
`
git clone https://github.com/Dfulop98/hardhatSimpleStorage.git
`

2. Install the dependencies:`npm install`

3. Compile the smart contract:`npx hardhat compile`

4. Run the tests:`npx hardhat test`

5. Deploy the contract:```npx hardhat run scripts/deploy.js```


## Usage

Once the contract is deployed, you can interact with it using a web3-enabled browser or an Ethereum client. The contract has two functions:

- `set(uint256 value)`: sets the storage value to the given integer value
- `get() -> uint256`: returns the current storage value

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


