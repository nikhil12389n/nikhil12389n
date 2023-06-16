//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract Project
{
    uint public ADSTRC ;
    uint public  DDSTSC ;
    uint public DGSTRC;
    


    mapping(string=>uint) public productquantityADST;
    mapping(string=>uint) public productquantityDDST;
    mapping(string=>uint) public productquantityDGST;
    mapping(string=>uint) public productquantityMANUFACTURER;

    
    struct ADSTReceive
    {
        string product;
        uint quantity;
        string location;
        string headname;
        string status;
    }
    struct DDSTSend
    {
        string unit;
        string product;
        uint quantity;
        string location;
        string headname;
        string status;
    }
    struct DGSTReceive
    {
        string product;
        uint quantity;
        string location;
        string headname;
        string status;
    }
    ADSTReceive[] public ADSTR;
    DDSTSend[] public DDSTS;
    DGSTReceive[] public DGSTR;
    function putrequest(string memory ref,string memory a,uint b) public {
        if(keccak256(bytes(ref)) == keccak256(bytes("ADST"))){
             ADSTReceive memory l1;
             l1.product=a;
             l1.quantity=b;
             ADSTR.push(l1);
             ADSTRC+=1;
        }
        if(keccak256(bytes(ref)) == keccak256(bytes("DGST"))){
            DGSTReceive memory l1;
             l1.product=a;
             l1.quantity=b;
             DGSTR.push(l1);
             DGSTRC+=1;
        }
        DDSTSend memory l2;
        l2.unit=ref;
        l2.quantity=b;
        l2.product=a;
        DDSTS.push(l2);
        DDSTSC+=1;
    }
    function getDDSTSend() public view returns(DDSTSend[] memory){
        return DDSTS;
    }
    function getDDSTCcount() public view returns(uint){
        return DDSTSC;
    }






    // function putdetails() public  {
    //     productquantityADST["Rice"]=100;
    //     productquantityADST["Milk"]=500;
    //     productquantityADST["Wheat"]=600;
    //     productquantityADST["Eggs"]=700;
    //     productquantityADST["Grains"]=600;
    //     productquantityADST["Jeeps"]=200;
    //     productquantityDDST["Rice"]=300;
    //     productquantityDDST["Milk"]=700;
    //     productquantityDDST["Wheat"]=900;
    //     productquantityDDST["Eggs"]=800;
    //     productquantityDDST["Grains"]=700;
    //     productquantityDDST["Jeeps"]=400;
    //     productquantityDGST["Rice"]=500;
    //     productquantityDGST["Milk"]=1000;
    //     productquantityDGST["Wheat"]=1000;
    //     productquantityDGST["Eggs"]=900;
    //     productquantityDGST["Grains"]=800;
    //     productquantityDGST["Jeeps"]=600;
    //     productquantityMANUFACTURER["Rice"]=1000;
    //     productquantityMANUFACTURER["Milk"]=1500;
    //     productquantityMANUFACTURER["Wheat"]=1200;
    //     productquantityMANUFACTURER["Eggs"]=1000;
    //     productquantityMANUFACTURER["Grains"]=1000;
    //     productquantityMANUFACTURER["Jeeps"]=900;
    // }


    



                
                   

                    

                      

                         
                           
                             




    
}