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
    mapping(string=>ReceivedReqforOthers[]) public ddstReceived;
    ReceivedReqforOthers[] public dgstreceived;
    ReceivedReqforOthers[] public manufreceived;
    mapping(string=>ReceivedReqforOthers[]) public adstreceived;
    function dgstReceived(string memory reqfrom,uint reqno,string memory from,string[] memory p,string[] memory q,string memory d) public{
        ReceivedReqforOthers memory l=ReceivedReqforOthers(reqfrom,from,reqno,p,q,d,"pending","pending");
        ReceivedReqforOthers memory l1=ReceivedReqforOthers(from,from,reqno,p,q,d,"pending","pending");
        ddstReceived[reqfrom].push(l1);
        
        for(uint i=0;i<ddstReceived[reqfrom].length;i++){
            if(ddstReceived[reqfrom][i].reqno==reqno && keccak256(bytes(ddstReceived[reqfrom][i].from))==keccak256(bytes(from))){
                ddstReceived[reqfrom][i].status="approvedtodgst";
                ddstReceived[reqfrom][i].acceptedby="NA";
            }
        }
        
        dgstreceived.push(l);
        
    }
    function ddstsReceive(string memory div,string memory from,uint reqno,string[] memory p,string[] memory q,string memory d) public{
        for(uint i=0;i<dgstreceived.length;i++){
            if(dgstreceived[i].reqno==reqno && keccak256(bytes(dgstreceived[i].from))==keccak256(bytes(from))){
                dgstreceived[i].status="approvedtodivisions";
                trackorder[from][reqno].push("DGST");
                dgstreceived[i].acceptedby="pending";
            }
        }
        string[2] memory arr=["DIVISION1","DIVISION2"];
        for(uint i=0;i<arr.length;i++){
            if(keccak256(bytes(arr[i]))!=keccak256(bytes(div))){
                ReceivedReqforOthers memory l=ReceivedReqforOthers("DGST",from,reqno,p,q,d,"pending","pending");
                ddstReceived[arr[i]].push(l);
               
            }
        }
    }
    function adstsReceiveALL(string memory div,string memory unit1,string memory unit2,string memory reqfrom,string memory from,uint reqno,string[] memory p,string[] memory q,string memory d) public{
        for(uint i=0;i<ddstReceived[div].length;i++){
            if(ddstReceived[div][i].reqno==reqno && keccak256(bytes(ddstReceived[div][i].from))==keccak256(bytes(from))){
                ddstReceived[div][i].status="approved";
                trackorder[from][reqno].push(div);
                ddstReceived[div][i].acceptedby="sent to adsts";
            }
        }
        ReceivedReqforOthers memory l=ReceivedReqforOthers(reqfrom,from,reqno,p,q,d,"pending","pending");
        adstreceived[unit1].push(l);
        adstreceived[unit2].push(l);
      
    }
    // function ManufReceived(string memory reqfrom,uint reqno,string memory from,string[] memory p,string[] memory q,string memory d) public{
    //     for(uint i=0;i<dgstreceived.length;i++){
    //         if(dgstreceived[i].reqno==reqno &&  keccak256(bytes(dgstreceived[i].from))==keccak256(bytes(from))){
    //             dgstreceived[i].status="approvedtomanufacturer";
    //             dgstreceived[i].acceptedby="NA";
    //         }
    //     }
    //     ReceivedReqforOthers memory l=ReceivedReqforOthers(reqfrom,from,reqno,p,q,d,"pending","pending");
    //     manufreceived.push(l);
    // }
    function getalladsts(string memory unit) public view returns(ReceivedReqforOthers[] memory){
        return adstreceived[unit];
        
    }

    function getallreqreceivedddst(string memory div) public view returns(ReceivedReqforOthers[] memory){
        return ddstReceived[div];
    }
    function dgstgetALL() public view returns(ReceivedReqforOthers[] memory){
        return dgstreceived;
    }
    // function ManufAllget() public view returns(ReceivedReqforOthers[] memory){
    //     return manufreceived;
    // }
    function acceptreqDDST1(string memory acc,string memory rej,string memory from,uint reqno,string[] memory p,string[] memory q,string memory d) public{
        for(uint i=0;i<adstreceived[acc].length;i++){
            if(adstreceived[acc][i].reqno==reqno && keccak256(bytes(adstreceived[acc][i].from))==keccak256(bytes(from))){
                adstreceived[acc][i].status="active";
                trackorder[from][reqno].push(acc);
                adstreceived[acc][i].acceptedby=acc;
            }
        }
        for(uint i=0;i<adstreceived[rej].length;i++){
            if(adstreceived[rej][i].reqno==reqno && keccak256(bytes(adstreceived[rej][i].from))==keccak256(bytes(from))){
                adstreceived[rej][i].status="You cant accept request";
                adstreceived[rej][i].acceptedby="Accepted by other units";
            }
        }
        ADSTSEND memory l=ADSTSEND(reqno,from,p,q,d,"active",acc);
        adstsent[from].push(l);
        adstsent[from][reqno-1].status="active";
        adstsent[from][reqno-1].acceptedby=acc;
    }
    function declinereqDDST1(string memory rej,string memory check,uint reqno,string memory from) public{
        uint c=0;
        for(uint i=0;i<adstreceived[rej].length;i++){
            if(adstreceived[rej][i].reqno==reqno && keccak256(bytes(adstreceived[rej][i].from))==keccak256(bytes(from))){
                adstreceived[rej][i].status="declined";
                adstreceived[rej][i].acceptedby="NA";
                c+=1;
            }
        }
        for(uint i=0;i<adstreceived[check].length;i++){
            if(adstreceived[check][i].reqno==reqno && keccak256(bytes(adstreceived[rej][i].from))==keccak256(bytes(from))){
                if(keccak256(bytes(adstreceived[check][i].status))==keccak256(bytes("declined"))){
                    c+=1;
                }
            }
        }
        if(c==2){
            for(uint i=0;i<dgstreceived.length;i++){
                if(dgstreceived[i].reqno==reqno && keccak256(bytes(dgstreceived[i].from))==keccak256(bytes(from))){
                    dgstreceived[i].acceptedby="No supplies in units";
                }
            }
        }
    }
    function acceptdgst(string memory acc,string memory from,uint reqno,string[] memory p,string[] memory q,string memory d) public{
        ADSTSEND memory l=ADSTSEND(reqno,from,p,q,d,"active",acc);
        adstsent[from].push(l);
        for(uint i=0;i<dgstreceived.length;i++){
            if(dgstreceived[i].reqno==reqno && keccak256(bytes(dgstreceived[i].from))==keccak256(bytes(from))){
                dgstreceived[i].status="accepted";
                dgstreceived[i].acceptedby=acc;
                trackorder[from][reqno].push("DGST");
            }
        }
    }
    // function acceptmanufact(string memory acc,string memory from,uint reqno,string[] memory p,string[] memory q,string memory d) public{
    //     ADSTSEND memory l=ADSTSEND(reqno,from,p,q,d,"active",acc);
    //     adstsent[from].push(l);
    //     for(uint i=0;i<manufreceived.length;i++){
    //         if(manufreceived[i].reqno==reqno && keccak256(bytes(manufreceived[i].from))==keccak256(bytes(from))){
    //             manufreceived[i].status="accepted";
    //             manufreceived[i].acceptedby=acc;
    //         }
    //     }
    // }
    function getallreqsend(string memory unit) public view returns(ADSTSEND[] memory){
        return adstsent[unit];
    }
     function track(string memory from,uint reqno) public  returns(string[] memory){
        return trackorder[from][reqno];
    }
}