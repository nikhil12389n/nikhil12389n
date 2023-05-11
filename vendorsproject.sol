//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SolidityTest
{

    //Customers

    struct CustomerSendRequests
    {
        string customeremail;
    
        string vendoremail;
        
        uint requestno;
        string product;
        string quantity;
        string date;
        string status;
        string amount;
        
    }
    uint public c1=0;
    struct CustomerAcceptForm
    {
        string email;
        uint reqno;
        string product;
        string quantity;
        string date;
        string status;
        string amount;
    }
    CustomerAcceptForm[] public custraccptfrm;
    
    mapping(string=>CustomerSendRequests[]) public sendreqcustr;
    function DetailsFromVendor(string memory v,uint a,string memory b,uint e,string memory d) public returns(uint){
       for(uint i=0;i<c1;i++){
           if(sendreqcustr[v][i].requestno==a){
               sendreqcustr[v][i].vendoremail=b;

               sendreqcustr[v][i].status="active";
               sendreqcustr[v][i].amount=d;
               sendreqcustr[v][i].totalamount=e;
               DetailsFromVendor1(sendreqcustr[v][i].vendoremail,sendreqcustr[v][i].requestno,sendreqcustr[v][i].product,sendreqcustr[v][i].quantity,sendreqcustr[v][i].date,sendreqcustr[v][i].status,sendreqcustr[v][i].amount);

           }

       }
       return (1);
    }
    function DetailsFromVendor1(string memory a,uint b,string memory c,string memory d,string memory e,string memory f,string memory g)  public{
        CustomerAcceptForm memory l;
        l.email=a;
        l.reqno=b;
        l.product=c;
        l.quantity=d;
        l.date=e;
        l.status=f;
        l.amount=g;
        custraccptfrm.push(l);
    }
     
    function getDetailsFromVendor1() public view returns(CustomerAcceptForm[] memory){
        return custraccptfrm;
    }

     function getRequestDataCustomer(string memory a) public view returns(CustomerSendRequests[] memory){
        return sendreqcustr[a];
     }
    





    //vendors

    struct ReceivedRequestsVendors
    {
        uint requestno;
        string email;
        
        string product;

        string quantity;
        string date;
    }
   

    mapping(string=>ReceivedRequestsVendors[]) public vendorsRecReq;
    function VendorReceivedRequest(string memory a,string memory b,string memory c,string memory d) public{
        string[3] memory vendornames=["vendor1","vendor2","vendor3"];
        ReceivedRequestsVendors  memory l1;
        CustomerSendRequests memory l;
        l.customeremail=a;
        l.product=b;
        l.quantity=c;
        l.date=d;
        l.status="pending";
        l.amount="doest received";
        l.vendoremail="doesnt received";
        l.requestno=c1+1;
        l1.requestno=c1+1;
        l1.email=a;
        l1.product=b;
        l1.quantity=c;
        l1.date=d;
      
        
        for(uint i=0;i<3;i++){
            sendreqcustr[vendornames[i]].push(l);
        }

        // sendreqcustr.push(l);
        for(uint i=0;i<3;i++){
           
            vendorsRecReq[vendornames[i]].push(l1);
        }
        c1+=1;

    }
    function getCountRequestsCustomer() public view returns(uint){
        return c1;
    }
    function AllReceivedRequests(string memory a) public view returns(ReceivedRequestsVendors[] memory){
        return vendorsRecReq[a];
    }
   
}