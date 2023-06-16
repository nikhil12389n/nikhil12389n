//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract Customers
{
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
    SendRequests[] public sendreq;
    function sendrequest(string memory a,string memory b,string memory c,string memory d,string memory e,string memory f,string memory g,string memory h,string memory i)  public{
      SendRequests memory l;
      l.userid=a;
      l.vendorname=b;
      l.vendoremail=c;
      l.location=d;
      l.product=e;
      l.quantity=f;
      l.date=g;
      l.status=h;
      l.amount=i;
      sendreq.push(l);
      c1+=1;
    }
    function ReqFromVendor(string memory a,string memory b,string memory c,string memory d,string memory e) public{
       for(uint i=0;i<c1;i++){
           if(keccak256(bytes(sendreq[i].userid)) == keccak256(bytes(a))){
               sendreq[i].vendorname=b;
               sendreq[i].vendoremail=c;
               sendreq[i].status=d;
               sendreq[i].amount=e;
           }
       }
    }
    function getData() public view returns(SendRequests[] memory){
        return sendreq;
    }
    function getCount() public view returns(uint){
        return c1;
    }
}