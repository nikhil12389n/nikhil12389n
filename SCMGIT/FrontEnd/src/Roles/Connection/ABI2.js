export const ABI2=[
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
				"name": "products",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "quantities",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"name": "DGSTSendtomanuf",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
			}
		],
		"name": "ManufAccept",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "getAllTrackorders",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
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
		"name": "getalladstsend",
		"outputs": [
			{
				"components": [
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
						"internalType": "uint256[]",
						"name": "quantities",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "acceptedby",
						"type": "string"
					}
				],
				"internalType": "struct SCM2.ADSTSEND[]",
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
						"internalType": "uint256[]",
						"name": "quantities",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "reqfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "acceptedby",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					}
				],
				"internalType": "struct SCM2.RequestReceivedForall[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getallmanuf",
		"outputs": [
			{
				"components": [
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
						"internalType": "uint256[]",
						"name": "quantities",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "reqfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "acceptedby",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					}
				],
				"internalType": "struct SCM2.RequestReceivedForall[]",
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
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requestsreceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "reqfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "acceptedby",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
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
];