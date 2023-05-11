//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/utils/Strings.sol";
contract SolidityTest
{
    //Customers
    string[3]  vendors=["vendor1","vendor2","vendor3"];
    struct CustomerSendRequests
    { 
        string vendoremail;
        uint requestno;
        string[]  product;
        uint[]   quantity;
        string   date;
        string status;
        uint[] amount;
        uint totalamount;
        
    }
    mapping(string=>CustomerSendRequests[]) public sendreqcustr;
    function getCountRequestsCustomer() public view returns(uint){
        return c1;
    }
    uint public c1=0;
    mapping(string=>mapping(uint=>string)) public buttonstatuscustomer;
    function getStatusofCustomerButton(uint a,string memory b) public view returns(string memory){
        return  buttonstatuscustomer[b][a];
    }

    function sendgoods(string memory a) public view returns(transactvendor[] memory){
        return successrequestsvendor[a];
    }
    mapping(string=>mapping(string=>string)) public buttonsactive;

    function checkstatus(string memory a,string memory b) public view returns(string memory){
        return buttonsactive[a][b];

    }
    uint receivedcount=0;
    struct CustomerAcceptForm
    {
    
        string email;
        uint reqno;
        string[] product;
        uint[] quantity;
        string  date;
        string status;
        uint[]  amount;
        uint totalamount;
        
    }
    CustomerAcceptForm[] public custraccptfrm;
    struct transactvendor{
        string email;
        string[] products;
        uint[] quantity;
        uint[] amounts;
        uint totalamount;
        uint requestno;
        string status;
        
        uint receivedamount;
    }
    mapping(string=>transactvendor[]) public successrequestsvendor;
    function transactionvendor(uint requestno,string memory vendor,string memory a,string[] memory b,uint[] memory c,uint[] memory d,uint e) public{
        for(uint i=0;i<3;i++){
            transactvendor memory l;
            l.email=a;
            l.products=b;
            l.quantity=c;
            l.requestno=requestno;
            l.amounts=d;
            l.totalamount=e; 
            if(keccak256(bytes(vendors[i]))==keccak256(bytes(vendor))){
                buttonstatuscustomer[vendors[i]][requestno]="active";
                l.status="active";
            }
            else{
                buttonstatuscustomer[vendors[i]][requestno]="declined";
                l.status="declined";
            }
            successrequestsvendor[vendors[i]].push(l);
        }
    }
    function DetailsFromVendor(string memory v,uint a,uint e,uint[] memory d) public returns(uint){
        buttonsactive[v][string.concat("button",Strings.toString(a))]="disabled";
       for(uint i=0;i<c1;i++){
           if(sendreqcustr[v][i].requestno==a){
               sendreqcustr[v][i].vendoremail=v;

               sendreqcustr[v][i].status="active";
               sendreqcustr[v][i].amount=d;
               sendreqcustr[v][i].totalamount=e;
               buttonstatuscustomer[v][a]="pending";  
               DetailsFromVendor1(sendreqcustr[v][i].vendoremail,sendreqcustr[v][i].requestno,sendreqcustr[v][i].product,sendreqcustr[v][i].quantity,sendreqcustr[v][i].date,sendreqcustr[v][i].totalamount,sendreqcustr[v][i].amount);
           }
       }
       return (1);
    }
    function DetailsFromVendor1(string memory a,uint b,string[] memory c,uint[] memory d,string memory e,uint  f,uint[] memory g)  public{
        CustomerAcceptForm memory l;
        l.email=a;
        l.reqno=b;
        l.product=c;
        l.quantity=d;
        l.date=e;
        l.status="active";
        l.amount=g;
        l.totalamount=f;
        custraccptfrm.push(l);
        receivedcount+=1;
    }
    function getDetailsFromVendor1() public view returns(CustomerAcceptForm[] memory){
        return custraccptfrm;
    }
     function getRequestDataCustomer(string memory a) public view returns(CustomerSendRequests[] memory){
        return sendreqcustr[a];
     }
    //Vendors
    struct ReceivedRequestsVendors
    {
        uint requestno;
        string email;
        string[] product;
        uint[] quantity;
        string  date;

    }
    mapping(string=>ReceivedRequestsVendors[]) public vendorsRecReq;
    function VendorReceivedRequest(string memory a,string[] memory  b,uint[] memory c,string memory d)  public returns(uint){
        string[3] memory vendornames=["vendor1","vendor2","vendor3"];  
        ReceivedRequestsVendors  memory l1;
        CustomerSendRequests memory l;  
       l1.email=a;
       l1.product=b;
       l1.quantity=c;
       l1.date=d;
       l.vendoremail="doesnt received";
       l.status="pending";
       l.requestno=c1+1;
       l1.requestno=c1+1;
       l.product=b;
       l.quantity=c;
       l.date=d;
       for(uint i=0;i<3;i++){
           sendreqcustr[vendornames[i]].push(l);
       }
        for(uint i=0;i<3;i++){
            vendorsRecReq[vendornames[i]].push(l1);     
        }
        for(uint i=0;i<3;i++){
             buttonstatuscustomer[vendornames[i]][c1+1]="pending";
           
            buttonsactive[vendornames[i]][string.concat("button",Strings.toString(c1+1))]="active";

        }
        c1+=1;
        return 1;

    }
    function AllReceivedRequests(string memory a) public view returns(ReceivedRequestsVendors[] memory){
        return vendorsRecReq[a];
    }
}