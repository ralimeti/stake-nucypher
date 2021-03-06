const NuCypherToken = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_totalSupplyOfTokens",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_extraData",
        "type": "bytes"
      }
    ],
    "name": "approveAndCall",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const StakingEscrow = [{
    "constant": false,
    "inputs": [{
      "name": "_reStake",
      "type": "bool"
    }],
    "name": "setReStake",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "getSubStakesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getCurrentPeriod",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "currentMintingPeriod",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "getAllTokens",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "workLock",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "MAX_SUB_STAKES",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_value",
      "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_adjudicator",
      "type": "address"
    }],
    "name": "setAdjudicator",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minLockedPeriods",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_workLock",
      "type": "address"
    }],
    "name": "setWorkLock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "secondsPerPeriod",
    "outputs": [{
      "name": "",
      "type": "uint32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_value",
      "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "getLastActivePeriod",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_period",
      "type": "uint16"
    }],
    "name": "findIndexOfPastDowntime",
    "outputs": [{
      "name": "index",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_periods",
      "type": "uint16"
    }, {
      "name": "_startIndex",
      "type": "uint256"
    }, {
      "name": "_maxStakers",
      "type": "uint256"
    }],
    "name": "getActiveStakers",
    "outputs": [{
      "name": "allLockedTokens",
      "type": "uint256"
    }, {
      "name": "activeStakers",
      "type": "uint256[2][]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_measureWork",
      "type": "bool"
    }],
    "name": "setWorkMeasurement",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "previousTarget",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_index",
      "type": "uint256"
    }],
    "name": "getLastPeriodOfSubStake",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "stakerInfo",
    "outputs": [{
      "name": "value",
      "type": "uint256"
    }, {
      "name": "confirmedPeriod1",
      "type": "uint16"
    }, {
      "name": "confirmedPeriod2",
      "type": "uint16"
    }, {
      "name": "reStakeDisabled",
      "type": "bool"
    }, {
      "name": "lockReStakeUntilPeriod",
      "type": "uint16"
    }, {
      "name": "worker",
      "type": "address"
    }, {
      "name": "workerStartPeriod",
      "type": "uint16"
    }, {
      "name": "lastActivePeriod",
      "type": "uint16"
    }, {
      "name": "measureWork",
      "type": "bool"
    }, {
      "name": "completedWork",
      "type": "uint256"
    }, {
      "name": "windDown",
      "type": "bool"
    }, {
      "name": "reservedSlot2",
      "type": "uint256"
    }, {
      "name": "reservedSlot3",
      "type": "uint256"
    }, {
      "name": "reservedSlot4",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_index",
      "type": "uint256"
    }],
    "name": "getSubStakeInfo",
    "outputs": [{
      "name": "firstPeriod",
      "type": "uint16"
    }, {
      "name": "lastPeriod",
      "type": "uint16"
    }, {
      "name": "periods",
      "type": "uint16"
    }, {
      "name": "lockedValue",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "adjudicator",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "getLockedTokensInPast",
    "outputs": [{
      "name": "lockedValue",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getReservedReward",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "workerToStaker",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "maxAllowableLockedTokens",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "confirmActivity",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "deposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "getLockedTokens",
    "outputs": [{
      "name": "lockedValue",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "lock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "miningCoefficient",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minAllowableLockedTokens",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_from",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_tokenContract",
      "type": "address"
    }, {
      "name": "",
      "type": "bytes"
    }],
    "name": "receiveApproval",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_index",
      "type": "uint256"
    }],
    "name": "getPastDowntime",
    "outputs": [{
      "name": "startPeriod",
      "type": "uint16"
    }, {
      "name": "endPeriod",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "getPastDowntimeLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "getWorkerFromStaker",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_penalty",
      "type": "uint256"
    }, {
      "name": "_investigator",
      "type": "address"
    }, {
      "name": "_reward",
      "type": "uint256"
    }],
    "name": "slashStaker",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_windDown",
      "type": "bool"
    }],
    "name": "setWindDown",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getStakersLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "lockedPeriodsCoefficient",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "policyManager",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_policyManager",
      "type": "address"
    }],
    "name": "setPolicyManager",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "EMPTY_CONFIRMED_PERIOD",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "currentSupply1",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_index",
      "type": "uint256"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "prolongStake",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_testTarget",
      "type": "address"
    }],
    "name": "verifyState",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_worker",
      "type": "address"
    }],
    "name": "setWorker",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "isReStakeLocked",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_worker",
      "type": "address"
    }],
    "name": "getStakerFromWorker",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minWorkerPeriods",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }],
    "name": "getCompletedWork",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_index",
      "type": "uint256"
    }, {
      "name": "_newValue",
      "type": "uint256"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "divideStake",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "secretHash",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_staker",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_periods",
      "type": "uint16"
    }],
    "name": "deposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "target",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "isTestContract",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "isUpgrade",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_target",
      "type": "address"
    }],
    "name": "finishUpgrade",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_lockReStakeUntilPeriod",
      "type": "uint16"
    }],
    "name": "lockReStake",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint16"
    }],
    "name": "lockedPerPeriod",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "currentSupply2",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "stakers",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_reservedReward",
      "type": "uint256"
    }],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "rewardedPeriods",
    "outputs": [{
      "name": "",
      "type": "uint16"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "_token",
      "type": "address"
    }, {
      "name": "_hoursPerPeriod",
      "type": "uint32"
    }, {
      "name": "_miningCoefficient",
      "type": "uint256"
    }, {
      "name": "_lockedPeriodsCoefficient",
      "type": "uint256"
    }, {
      "name": "_rewardedPeriods",
      "type": "uint16"
    }, {
      "name": "_minLockedPeriods",
      "type": "uint16"
    }, {
      "name": "_minAllowableLockedTokens",
      "type": "uint256"
    }, {
      "name": "_maxAllowableLockedTokens",
      "type": "uint256"
    }, {
      "name": "_minWorkerPeriods",
      "type": "uint16"
    }, {
      "name": "_isTestContract",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "periods",
      "type": "uint16"
    }],
    "name": "Deposited",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "firstPeriod",
      "type": "uint16"
    }, {
      "indexed": false,
      "name": "periods",
      "type": "uint16"
    }],
    "name": "Locked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "oldValue",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "lastPeriod",
      "type": "uint16"
    }, {
      "indexed": false,
      "name": "newValue",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "periods",
      "type": "uint16"
    }],
    "name": "Divided",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Withdrawn",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": true,
      "name": "period",
      "type": "uint16"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "ActivityConfirmed",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": true,
      "name": "period",
      "type": "uint16"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Mined",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "penalty",
      "type": "uint256"
    }, {
      "indexed": true,
      "name": "investigator",
      "type": "address"
    }, {
      "indexed": false,
      "name": "reward",
      "type": "uint256"
    }],
    "name": "Slashed",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "reStake",
      "type": "bool"
    }],
    "name": "ReStakeSet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "lockUntilPeriod",
      "type": "uint16"
    }],
    "name": "ReStakeLocked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": true,
      "name": "worker",
      "type": "address"
    }, {
      "indexed": true,
      "name": "startPeriod",
      "type": "uint16"
    }],
    "name": "WorkerSet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "measureWork",
      "type": "bool"
    }],
    "name": "WorkMeasurementSet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "staker",
      "type": "address"
    }, {
      "indexed": false,
      "name": "windDown",
      "type": "bool"
    }],
    "name": "WindDownSet",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Burnt",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "reservedReward",
      "type": "uint256"
    }],
    "name": "Initialized",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "testTarget",
      "type": "address"
    }, {
      "indexed": false,
      "name": "sender",
      "type": "address"
    }],
    "name": "StateVerified",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "target",
      "type": "address"
    }, {
      "indexed": false,
      "name": "sender",
      "type": "address"
    }],
    "name": "UpgradeFinished",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "previousOwner",
      "type": "address"
    }, {
      "indexed": true,
      "name": "newOwner",
      "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}];
const PolicyManager =     [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_node",
        "type": "address"
      },
      {
        "name": "_signature",
        "type": "bytes"
      }
    ],
    "name": "revoke",
    "outputs": [
      {
        "name": "refundValue",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCurrentPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "nodes",
    "outputs": [
      {
        "name": "reward",
        "type": "uint256"
      },
      {
        "name": "rewardRate",
        "type": "uint256"
      },
      {
        "name": "lastMinedPeriod",
        "type": "uint16"
      },
      {
        "name": "minRewardRate",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_minRewardRate",
        "type": "uint256"
      }
    ],
    "name": "setMinRewardRate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "secondsPerPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "previousTarget",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_recipient",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      }
    ],
    "name": "getPolicyOwner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "DEFAULT_REWARD_DELTA",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_node",
        "type": "address"
      }
    ],
    "name": "refund",
    "outputs": [
      {
        "name": "refundValue",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      }
    ],
    "name": "getArrangementsLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes16"
      }
    ],
    "name": "policies",
    "outputs": [
      {
        "name": "sponsor",
        "type": "address"
      },
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "rewardRate",
        "type": "uint256"
      },
      {
        "name": "startTimestamp",
        "type": "uint64"
      },
      {
        "name": "endTimestamp",
        "type": "uint64"
      },
      {
        "name": "disabled",
        "type": "bool"
      },
      {
        "name": "reservedSlot1",
        "type": "uint256"
      },
      {
        "name": "reservedSlot2",
        "type": "uint256"
      },
      {
        "name": "reservedSlot3",
        "type": "uint256"
      },
      {
        "name": "reservedSlot4",
        "type": "uint256"
      },
      {
        "name": "reservedSlot5",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_node",
        "type": "address"
      },
      {
        "name": "_period",
        "type": "uint16"
      }
    ],
    "name": "register",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_policyOwner",
        "type": "address"
      },
      {
        "name": "_endTimestamp",
        "type": "uint64"
      },
      {
        "name": "_nodes",
        "type": "address[]"
      }
    ],
    "name": "createPolicy",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_node",
        "type": "address"
      }
    ],
    "name": "revokeArrangement",
    "outputs": [
      {
        "name": "refundValue",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      }
    ],
    "name": "revokePolicy",
    "outputs": [
      {
        "name": "refundValue",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_node",
        "type": "address"
      }
    ],
    "name": "calculateRefundValue",
    "outputs": [
      {
        "name": "refundValue",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_node",
        "type": "address"
      },
      {
        "name": "_period",
        "type": "uint16"
      }
    ],
    "name": "setDefaultRewardDelta",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_testTarget",
        "type": "address"
      }
    ],
    "name": "verifyState",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_node",
        "type": "address"
      },
      {
        "name": "_period",
        "type": "uint16"
      }
    ],
    "name": "updateReward",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_node",
        "type": "address"
      }
    ],
    "name": "getRevocationHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "secretHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "target",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      },
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getArrangementInfo",
    "outputs": [
      {
        "name": "node",
        "type": "address"
      },
      {
        "name": "indexOfDowntimePeriods",
        "type": "uint256"
      },
      {
        "name": "lastRefundedPeriod",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      }
    ],
    "name": "refund",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "escrow",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isUpgrade",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_policyId",
        "type": "bytes16"
      }
    ],
    "name": "calculateRefundValue",
    "outputs": [
      {
        "name": "refundValue",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_target",
        "type": "address"
      }
    ],
    "name": "finishUpgrade",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_node",
        "type": "address"
      },
      {
        "name": "_period",
        "type": "uint16"
      }
    ],
    "name": "getNodeRewardDelta",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_escrow",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "policyId",
        "type": "bytes16"
      },
      {
        "indexed": true,
        "name": "sponsor",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "rewardRate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "startTimestamp",
        "type": "uint64"
      },
      {
        "indexed": false,
        "name": "endTimestamp",
        "type": "uint64"
      },
      {
        "indexed": false,
        "name": "numberOfNodes",
        "type": "uint256"
      }
    ],
    "name": "PolicyCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "policyId",
        "type": "bytes16"
      },
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "PolicyRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "policyId",
        "type": "bytes16"
      },
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "node",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "ArrangementRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "node",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Withdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "policyId",
        "type": "bytes16"
      },
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "node",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "RefundForArrangement",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "policyId",
        "type": "bytes16"
      },
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "RefundForPolicy",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "testTarget",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "StateVerified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "target",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "UpgradeFinished",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  }
];

const WorkLock = [
  {
    "inputs": [
      {
        "internalType": "contract NuCypherToken",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "contract StakingEscrow",
        "name": "_escrow",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_startBidDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_endBidDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_endCancellationDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_boostingRefund",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "_stakingPeriods",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_minAllowedBid",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositedETH",
        "type": "uint256"
      }
    ],
    "name": "Bid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startIndex",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endIndex",
        "type": "uint256"
      }
    ],
    "name": "BiddersChecked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Canceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "claimedTokens",
        "type": "uint256"
      }
    ],
    "name": "Claimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "CompensationWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Deposited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "refundETH",
        "type": "uint256"
      }
    ],
    "name": "ForceRefund",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "refundETH",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "completedWork",
        "type": "uint256"
      }
    ],
    "name": "Refund",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "SLOWING_REFUND",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "bid",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bidders",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "bonusETHSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "boostingRefund",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "cancelBid",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "claim",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "claimedTokens",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "compensation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "creator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "endBidDate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "endCancellationDate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "escrow",
    "outputs": [
      {
        "internalType": "contract StakingEscrow",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ethAmount",
        "type": "uint256"
      }
    ],
    "name": "ethToTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ethAmount",
        "type": "uint256"
      }
    ],
    "name": "ethToWork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address payable[]",
        "name": "_biddersForRefund",
        "type": "address[]"
      }
    ],
    "name": "forceRefund",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "_bidder",
        "type": "address"
      }
    ],
    "name": "getAvailableRefund",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBiddersLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "_bidder",
        "type": "address"
      }
    ],
    "name": "getRemainingWork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isClaimingAvailable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "maxAllowableLockedTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "minAllowableLockedTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "minAllowedBid",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "nextBidderToCheck",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "refund",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "refundETH",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "stakingPeriods",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "startBidDate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract NuCypherToken",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "tokenDeposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tokenSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gasToSaveState",
        "type": "uint256"
      }
    ],
    "name": "verifyBiddingCorrectness",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawCompensation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "workInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "depositedETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "completedWork",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "claimed",
        "type": "bool"
      },
      {
        "internalType": "uint128",
        "name": "index",
        "type": "uint128"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_completedWork",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_depositedETH",
        "type": "uint256"
      }
    ],
    "name": "workToETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export { NuCypherToken, StakingEscrow, PolicyManager, WorkLock };
