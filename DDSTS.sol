//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SCM {
    struct ReceivedReqforOthers {string reqfrom;string from;uint reqno;string[] products;string[] quantities;
        string date;
        string status;
        string acceptedby;
    }

    
    
    mapping(string => ReceivedReqforOthers[]) public ddstreceived;
    mapping(string=>ReceivedReqforOthers[]) public dgstreceived;
    

    

    function fillform(uint reqno,string memory from,string[] memory p,string[] memory q,string memory d,string memory division) public {
        ReceivedReqforOthers memory l1 = ReceivedReqforOthers(from,from,reqno,p,q,d,"pending","pending");
        ddstreceived[division].push(l1);
    }
    function allreqreceivedivision(string memory division)public view returns (ReceivedReqforOthers[] memory)
    {
        return ddstreceived[division];
    }
    function acceptreqadst(string memory accepted,string[] memory track,string memory origin,uint reqno) public {
        adstsent[origin][reqno - 1].status = "active";
        adstsent[origin][reqno - 1].acceptedby = accepted;
        for(uint i=0;i<track.length;i++){
           bytes memory b = bytes(track[i]);
            if (b.length == 9) {
                for(uint j=0;j<ddstreceived[track[i]].length;j++){
                    if(ddstreceived[track[i]][j].reqno==reqno && keccak256(bytes(ddstreceived[track[i]][j].from))==keccak256(bytes(origin))){
                        ddstreceived[track[i]][j].status="active";
                        ddstreceived[track[i]][j].acceptedby=accepted;
                    }
                }
            }
            if(b.length==7){
                for(uint j=0;j<AdstReceive[track[i]].length;j++){
                    if(AdstReceive[track[i]][j].reqno==reqno && keccak256(bytes(AdstReceive[track[i]][j].from))==keccak256(bytes(origin))){
                        AdstReceive[track[i]][j].status="active";
                        AdstReceive[track[i]][j].acceptedby=accepted;
                    }
                }
            }
            // if(b.length==4){

            // }
            // if(b.length==12){
                
            // }
        }
    }
    function declineadst(uint reqno,string memory declinedby,string memory origin,string memory div) public{
        string[] memory dup=adstsent[origin][reqno-1].trackorder;
        for(uint i=0;i<dup.length;i++){
            if(keccak256(bytes(dup[i]))!=keccak256(bytes(declinedby))){
                dup[i]="";
            }
        }
        adstsent[origin][reqno-1].trackorder=dup;
        for(uint i=0;i<ddstreceived[div].length;i++){
            if(ddstreceived[div][i].reqno==reqno && keccak256(bytes(ddstreceived[div][i].from))==keccak256(bytes(origin))){
                ddstreceived[div][i].status="declined";
                ddstreceived[div][i].acceptedby="declinedbyadsts";
            }
        }
        for(uint i=0;i<AdstReceive[declinedby].length;i++){
            if(AdstReceive[declinedby][i].reqno==reqno && keccak256(bytes(AdstReceive[declinedby][i].from))==keccak256(bytes(origin))){
                AdstReceive[declinedby][i].status="declined";
                AdstReceive[declinedby][i].acceptedby="NA";
            }
        }
    }
    
    // function dgstreceive(string memory reqfrom,string memory from,uint reqno,string[] memory p,string[] memory q,string memory d) public{
    //     adstsent[from][reqno-1].trackorder.push("DGST");
    //     for(uint i=0;i<ddstreceived[reqfrom].length;i++){
    //         if(ddstreceived[reqfrom][i].reqno==reqno && keccak256(bytes(ddstreceived[reqfrom][i].from))==keccak256(bytes(from))){
    //             ddstreceived[reqfrom][i].status="pending";
    //             ddstreceived[reqfrom][i].acceptedby="SendtoDgst";
    //         }
    //     }
    //     ReceivedReqforOthers memory l=ReceivedReqforOthers(reqfrom,from,reqno,p,q,d,"pending","pending");
    //     dgstreceived["DGST"].push(l);
    // }


    // function getallreqreceivedgst(string memory dgst) public view returns(ReceivedReqforOthers[] memory){
    //     return dgstreceived[dgst];
    // }

    // function ddstreceivefromdgst(string memory div,uint reqno,string memory reqfrom,string memory from,string[] memory p,string[] memory q,string memory d) public{
    //     string[3] memory arr=["DIVISION1","DIVISION2","DIVISION3"];
    //     ReceivedReqforOthers memory l=ReceivedReqforOthers(reqfrom,from,reqno,p,q,d,"pending","pending");
    //     for(uint i=0;i<arr.length;i++){ 
    //         if(keccak256(bytes(arr[i]))!=keccak256(bytes(div))){
    //             ddstreceived[arr[i]].push(l);
    //             adstsent[from][reqno-1].trackorder.push(arr[i]);
    //         }
    //     }
    // }
}
