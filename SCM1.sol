//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SCM
{
    struct ADSTSEND {uint reqno;string from;string[] products;string[] quantities;string date;
        string status;
        string acceptedby;
        
    }
    // mapping(string=>mapping(uint=>string[])) public trackorder;
    
    
    struct ReceivedReqforOthers {string reqfrom;string from;uint reqno;string[] products;string[] quantities;
        string date;
        string status;
        string acceptedby;
    }
    mapping(string => uint) public requestcount;
      function getrequestcount(string memory from) public view returns (uint) {
        return requestcount[from];
    }
    mapping(string=>ReceivedReqforOthers[]) public ddstReceived;
    mapping(string=>ADSTSEND[]) public adstsent;
    ReceivedReqforOthers[] public dgstreceived;
    ReceivedReqforOthers[] public manufreceived;
    mapping(string=>ReceivedReqforOthers[]) public adstreceived;
    function fillform(string memory div,string memory from,string[] memory p,string[] memory q,string memory d) public{
        if (requestcount[from] >= 0) {
            requestcount[from] += 1;
        } else {
            requestcount[from] = 0;
        }
        ADSTSEND memory l= ADSTSEND(requestcount[from],from,p,q,d,"pending","pending");
        ReceivedReqforOthers memory l1=ReceivedReqforOthers(from,from,requestcount[from],p,q,d,"pending","pending");
        adstsent[from].push(l);
        ddstReceived[div].push(l1);
        // trackorder[from][requestcount[from]].push(from);
        
    }
    function getAllreqsent(string memory unit) public view returns(ADSTSEND[] memory) {
        return adstsent[unit];
    }

    function adstReceived(string[] memory to,uint reqno,string memory reqfrom,string memory from,string[] memory p,string[] memory q,string memory d) public{
        ReceivedReqforOthers memory l=ReceivedReqforOthers(reqfrom,from,reqno,p,q,d,"pending","pending");
        for(uint i=0;i<ddstReceived[reqfrom].length;i++){
            if(ddstReceived[reqfrom][i].reqno==reqno){
                ddstReceived[reqfrom][i].status="approvedtounits";
                ddstReceived[reqfrom][i].acceptedby="senttoadsts";
               
            }
        }
        for(uint i=0;i<to.length;i++){
            adstreceived[to[i]].push(l);
            
        }
        
    }
    function getallreqreceivedddst(string memory div) public view returns(ReceivedReqforOthers[] memory){
        return ddstReceived[div];
    }
    function getAllreqreceive(string memory unit) public view returns(ReceivedReqforOthers[] memory){
        return adstreceived[unit];

    }
    function acceptreqDDST(string memory div,string memory to,uint reqno,string memory from) public{
        adstsent[to][reqno-1].status="active";
        adstsent[to][reqno-1].acceptedby=from;
        // trackorder[to][reqno-1].push(from);
        for(uint i=0;i<ddstReceived[div].length;i++){
            if(ddstReceived[div][i].reqno==reqno && keccak256(bytes(ddstReceived[div][i].from))==keccak256(bytes(to))){
                ddstReceived[div][i].acceptedby="acceptedbyunits";
               
            }
        }
        for(uint i=0;i<adstreceived[from].length;i++){
            if(adstreceived[from][i].reqno==reqno && keccak256(bytes(adstreceived[from][i].from))==keccak256(bytes(to))){
                adstreceived[from][i].status="active";
                
                adstreceived[from][i].acceptedby=from;
            }
        }
    }
    function declinereqDDST(string memory div,string memory to,uint reqno,string memory from) public{
        for(uint i=0;i<ddstReceived[div].length;i++){
            if(ddstReceived[div][i].reqno==reqno && keccak256(bytes(ddstReceived[div][i].from))==keccak256(bytes(to))){
                ddstReceived[div][i].acceptedby="No supplies in units";
            }
        }
        for(uint i=0;i<adstreceived[from].length;i++){
            if(adstreceived[from][i].reqno==reqno && keccak256(bytes(adstreceived[from][i].from))==keccak256(bytes(to))){
                adstreceived[from][i].status="declined";
                adstreceived[from][i].acceptedby=from;
            }
        }
    }
    // function track(string memory from,uint reqno) public  returns(string[] memory){
    //     return trackorder[from][reqno];
    // }
}