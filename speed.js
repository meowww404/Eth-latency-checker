require('dotenv').config();

const { Web3 } = require('web3');
const NODE_URL = process.env.NODE_URL;

const web3 = new Web3(NODE_URL);

async function getLogs() {
  console.time("ExecutionTime"); // Start the timer

  const latestBlock = await web3.eth.getBlockNumber();

  const filter = {
    fromBlock: latestBlock - 10000n,
    toBlock: "latest",
    address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    topics: [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    ],
  };

  const logs = await web3.eth.getPastLogs(filter);
  console.log(`Retrieved ${logs.length} logs.`);

  console.timeEnd("ExecutionTime"); // Stop the timer and log the duration
}

getLogs();
