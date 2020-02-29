import BN from 'bignumber.js';
import Web3 from 'web3';

const workInfo = {
  depositedETH: Web3.utils.toWei('20')
};
const contract = {
  startBidDate: 1582387602,
  endBidDate: 1585000000,
  methods: {
    bid: jest.fn((value) => {
      return {
        send: jest.fn(() => {
          return Promise.resolve(true);
        })
      };
    }),
    cancelBid: jest.fn((value) => {
      return {
        send: jest.fn(() => {
          return Promise.resolve(true);
        })
      };
    }),
    claim: jest.fn((value) => {
      return {
        send: jest.fn(() => {
          return Promise.resolve(true);
        })
      };
    }),
    refund: jest.fn((value) => {
      return {
        send: jest.fn(() => {
          return Promise.resolve(true);
        })
      };
    }),
    workInfo: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(workInfo);
        })
      };
    }),
    startBidDate: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(getStartBidDate());
        })
      };
    }),
    endBidDate: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(getEndBidDate());
        })
      };
    }),
    ethSupply: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(Web3.utils.toWei('1000'));
        })
      };
    }),
    tokenSupply: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(Web3.utils.toWei('20000000'));
        })
      };
    }),
    workToETH: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(Web3.utils.toWei('20000'));
        })
      };
    }),
    ethToWork: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(Web3.utils.toWei('20000'));
        })
      };
    }),
    getRemainingWork: jest.fn((value) => {
      return {
        call: jest.fn(() => {
          return Promise.resolve(Web3.utils.toWei('20000'));
        })
      };
    }),
  }
};

function getStartBidDate() {
  return contract.startBidDate;
}

function getEndBidDate() {
  return contract.endBidDate;
}

export default contract;