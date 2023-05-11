//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SCM
{
   struct ADSTSEND {uint reqno;string from;string[] products;string[] quantities;string date;
        string status;
        string acceptedby;
        
    }
    mapping(string=>ADSTSEND[]) public adstsent;
    mapping(string=>mapping(uint=>string[])) public trackorder;
    
    struct ReceivedReqforOthers {string reqfrom;string from;uint reqno;string[] products;string[] quantities;
        string date;
        string status;
        string acceptedby;
    } 
    function getalldgsts() public view returns(ReceivedReqforOthers[] memory){
        return dgstreceived;
    }
    function getAllManufacturer() public view returns(ReceivedReqforOthers[] memory){
        return ManufturerReceived;
    }
    function getAllAdstSend(string memory from) public view returns(ADSTSEND[] memory){
        return adstsent[from];

    }
    ReceivedReqforOthers[] public dgstreceived; 
    ReceivedReqforOthers[] public ManufturerReceived;
    function ManufReceived(uint reqno,string memory from,string[] memory p,string[] memory q,string memory d) public{
        ReceivedReqforOthers memory l=ReceivedReqforOthers(from,from,reqno,p,q,d,"approved","approvedtomanufacturer");
        dgstreceived.push(l);

        ReceivedReqforOthers memory l1=ReceivedReqforOthers("DGST",from,reqno,p,q,d,"pending","pending");
        ManufturerReceived.push(l1);
        ADSTSEND memory l2=ADSTSEND(reqno,from,p,q,d,"pending","pending");
        adstsent[from].push(l2);
    }
    function acceptmanufact(string memory acc,string memory from,uint reqno) public{
        for(uint i=0;i<ManufturerReceived.length;i++){
            if(ManufturerReceived[i].reqno==reqno && keccak256(bytes(ManufturerReceived[i].from))==keccak256(bytes(from))){
                ManufturerReceived[i].status="accepted";
                ManufturerReceived[i].acceptedby=acc;
                trackorder[from][reqno].push("MANUFACTURER");
            }
        }
        for(uint i=0;i<adstsent[from].length;i++){
            if(adstsent[from][i].reqno==reqno){
                adstsent[from][i].status="active";
                adstsent[from][i].acceptedby=acc;
            }
        }
    }
    //  function track(string memory from,uint reqno) public  returns(string[] memory){
    //     return trackorder[from][reqno];
    // }
}