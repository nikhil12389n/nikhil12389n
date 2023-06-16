export const ABI3=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "p",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "q",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "d",
				"type": "string"
			}
		],
		"name": "ManufReceived",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ManufturerReceived",
		"outputs": [
			{
				"internalType": "string",
				"name": "reqfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "acceptedby",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "acc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			}
		],
		"name": "acceptmanufact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adstsent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "acceptedby",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dgstreceived",
		"outputs": [
			{
				"internalType": "string",
				"name": "reqfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "acceptedby",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			}
		],
		"name": "getAllAdstSend",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "reqno",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "products",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "quantities",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "acceptedby",
						"type": "string"
					}
				],
				"internalType": "struct SCM.ADSTSEND[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllManufacturer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "reqfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reqno",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "products",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "quantities",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "acceptedby",
						"type": "string"
					}
				],
				"internalType": "struct SCM.ReceivedReqforOthers[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getalldgsts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "reqfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "reqno",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "products",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "quantities",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "acceptedby",
						"type": "string"
					}
				],
				"internalType": "struct SCM.ReceivedReqforOthers[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			}
		],
		"name": "track",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "trackorder",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
