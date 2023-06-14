# Frontend-interactions-with-smart-contract

This project is a Hardhat Decentralized project that interacts Smart Contract with Front End built in react js. The project performs two operations Addition and subtraction, and connects with MetaMask.

#Comiling the Contract
To compile the contract,inside the project directory, in the terminal type : npx hardhat compile

# Steps for executing the project
1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.
6. After this, the project will be running on your localhost. Typically at http://localhost:3000/
