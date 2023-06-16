//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract Vendors
{
    //Customers
     struct SendRequests
    {
        string userid;
        string vendorname;
        string vendoremail;
        
        string location;
        string product;
        string quantity;
        string date;
        
        string status;
        string amount;
    
    }
    uint c1=0;
    SendRequests[] public sendreqCust;
    function sendrequest1(string memory a,string memory b,string memory c,string memory d,string memory e)  public{
      SendRequests memory l;
      l.userid=a;
      l.vendorname="pending";
      l.vendoremail="pending";
      l.location=b;
      l.product=c;
      l.quantity=d;
      l.date=e;
      l.status="pending";
      l.amount="pending";
      sendreqCust.push(l);
      c1+=1;
    }
    function ReqFromVendor(string memory a,string memory b,string memory c,string memory d,string memory e) public{
       for(uint i=0;i<c1;i++){
           if(keccak256(bytes(sendreqCust[i].userid)) == keccak256(bytes(a))){
               sendreqCust[i].vendorname=b;
               sendreqCust[i].vendoremail=c;
               sendreqCust[i].status=d;
               sendreqCust[i].amount=e;
           }
       }
    }
    function getData() public view returns(SendRequests[] memory){
        return sendreqCust;
    }
    function getCountReqCust() public view returns(uint){
        return c1;
    }


    
    //Vendors
    struct ReceivedRequests
    {
        string userid;
        string location;
        string product;
        
        string quantity;
        string date;
    }
    uint public c2=0;
    mapping(string=>ReceivedRequests[]) public vendorsReq;


    function sendreqfromcust(string memory a,string memory b,string memory c,string memory d,string memory e) public{
        string[2] memory vendornames=["vendor1","vendor2"];
        ReceivedRequests  memory l;
        l.userid=a;
        l.location=b;
        l.product=c;
        l.quantity=d;
        l.date=e;
        for(uint i=0;i<2;i++){
            vendorsReq[vendornames[i]].push(l);
        }
        c2+=1;
    }
    function vendorsReceivedRequests(string memory a) public view returns(ReceivedRequests[] memory){
        return vendorsReq[a];
    }
    function getCountVendors() public view returns(uint){
        return c2;
    }
}