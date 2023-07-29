export  const ABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "reqfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "div",
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
				"internalType": "uint256[]",
				"name": "quantities",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			}
		],
		"name": "DDSTforwardRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "div",
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
				"internalType": "uint256[]",
				"name": "quantities",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			}
		],
		"name": "DDSTsendDGST",
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
		"name": "DGSTAccept",
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
		"name": "DGSTCheck",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
			},
			{
				"internalType": "string",
				"name": "reqfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			}
		],
		"name": "DGSTForwardRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "div",
				"type": "string"
			}
		],
		"name": "adddivisions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "units",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "addunits",
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
				"name": "adst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "div",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			}
		],
		"name": "adstreject",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adsts1",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
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
				"name": "reqno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "adst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "from",
				"type": "string"
			}
		],
		"name": "adstsacceptfromdivision",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
		"name": "divisions",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
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
				"name": "div",
				"type": "string"
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
		"name": "fillform",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "adst",
				"type": "string"
			}
		],
		"name": "getAllRequestSendAdst",
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
				"internalType": "struct SCM.ADSTSEND[]",
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
				"name": "adst",
				"type": "string"
			}
		],
		"name": "getAllreceivedADST",
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
				"internalType": "struct SCM.RequestReceivedForall[]",
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
				"name": "ddst",
				"type": "string"
			}
		],
		"name": "getAllreceivedDDST",
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
				"internalType": "struct SCM.RequestReceivedForall[]",
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
				"name": "dgst",
				"type": "string"
			}
		],
		"name": "getAllreceivedDGST",
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
				"internalType": "struct SCM.RequestReceivedForall[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getlen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "divindx",
				"type": "uint256"
			}
		],
		"name": "getlenadst",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
		"name": "getrequestcount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
	}
];