export  const ABI2=[
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
		"name": "acceptdgst",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "rej",
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
		"name": "acceptreqDDST1",
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
		"name": "adstreceived",
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
				"name": "div",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "unit1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "unit2",
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
			},
			{
				"internalType": "uint256",
				"name": "reqno",
				"type": "uint256"
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
		"name": "adstsReceiveALL",
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
		"name": "ddstReceived",
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
				"name": "div",
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
		"name": "ddstsReceive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rej",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "check",
				"type": "string"
			},
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
		"name": "declinereqDDST1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "reqfrom",
				"type": "string"
			},
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
		"name": "dgstReceived",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dgstgetALL",
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
				"name": "unit",
				"type": "string"
			}
		],
		"name": "getalladsts",
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
				"name": "div",
				"type": "string"
			}
		],
		"name": "getallreqreceivedddst",
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
				"name": "unit",
				"type": "string"
			}
		],
		"name": "getallreqsend",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "manufreceived",
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
