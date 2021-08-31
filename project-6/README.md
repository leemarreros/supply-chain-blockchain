**Project write-up - UML**

Finde the diagrams in the released links below in the table.

| UML Diamgram             |  Link    |
| -------------------- | ---- |
| Activity             | [Activity Diagram](https://drive.google.com/file/d/10TBq-0TCG9LY5i4P1Kzp4QnW42xDzcVB/view?usp=sharing) |
| Sequence             | [Sequence Diamgram](https://drive.google.com/file/d/1BhYr3E5nPoRfWer0q6xrdTHtD37bmR_u/view?usp=sharing) |
| State                | [State Diagram](https://drive.google.com/file/d/1nEPe_ysU0SUvIQQRghXyvsorZ-MJe1ci/view?usp=sharing) |
| Classes (Data Model) | [Classes Diagram](https://drive.google.com/file/d/1NpZPB093EWRxH8pvHgm0IGWNsLNCNaVc/view?usp=sharing) |



**Project write-up - Libraries**

I used two additional libraries:

* dotenv - Since I didn't want to hard code my credentials of Infura. I used dotenv for injecting the credentials at compile time and also for not publishing in Github.
* truffle-hdwallet-provider - This wallet help me to creat a HD wallet provider and connect to Infura, step require to connect to *rinkeby* network.
* Truffle v4.1.14 (core: 4.1.14)
* Solidity v0.4.24 (solc-js)
* node v.11.14.0
* web3 v1.5.2

**Project write-up - IPFS**

IPFS was not used



**General Write Up**

The Ownable contract is the one that includes all the other contracts. For that contract, I was able to validate it in Etherscan to get the green check on the Contract tab. That means that from Etherscan is possible to interact with the contract since Etherscan has a exact copy of the source code.

* Contract address code: [0x67D5d07d216Ec236A6aeaeA4731530585a8f2058](https://rinkeby.etherscan.io/address/0x67D5d07d216Ec236A6aeaeA4731530585a8f2058#code)
* Transaction hash: [0xd30de0004360b9d14e8837dd31f32b00a1a4c2001...](https://rinkeby.etherscan.io/tx/0xd30de0004360b9d14e8837dd31f32b00a1a4c2001d8b1396d5ba089b4145e184)



All tests are passing correclty:



Contract: SupplyChain

  ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (263ms)

  ✓ Testing smart contract function processItem() that allows a farmer to process coffee (190ms)

  ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (201ms)

  ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (198ms)

  ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (1107ms)

  ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (188ms)

  ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (193ms)

  ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (197ms)

  ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain (73ms)

  ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain (48ms)

 10 passing (3s)

