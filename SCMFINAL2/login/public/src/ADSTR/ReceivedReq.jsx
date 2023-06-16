import { useContext, useState } from "react";
import { useEffect } from "react";
import ConnectContractSR from "./ConnectContractSR";
import ConnectMetamask from "./ConnectMetamask";
import Context from "../index.js";
export default function ReceivedReq(){
    const [res,setRes]=useState([]);
    const [ref,setRef]=useState([]);
    let data=useContext(Context);
    let account=data[localStorage.getItem("ROLENAME")];
    const accept=async(row)=>{
        let ref=await window.contract.methods.getallreqreceivedddst(row.reqfrom).call();
        let ref2=await window.contract1.methods.getallreqreceivedddst(row.reqfrom).call();
        
       ref= [...ref, ...ref2]; 
        setRef(ref);

        for(let j=0;j<ref.length;j++){
            if(ref[j].from===row.from && row.reqno===ref[j].reqno && ref[j].reqfrom.length===7){	
                accept1(row);
            }
            if(ref[j].from===row.from && row.reqno===ref[j].reqno && ref[j].reqfrom.length===4){	
               accept2(row);
            }
        }
    }
    const reject=async(row)=>{
        let ref=await window.contract.methods.getallreqreceivedddst(row.reqfrom).call();
        let ref2=await window.contract1.methods.getallreqreceivedddst(row.reqfrom).call();
        
       ref= [...ref, ...ref2]; 
        setRef(ref);

        for(let j=0;j<ref.length;j++){
            if(ref[j].from===row.from && row.reqno===ref[j].reqno && ref[j].reqfrom.length===7){	
                decline1(row);
            }
            if(ref[j].from===row.from && row.reqno===ref[j].reqno && ref[j].reqfrom.length===4){	
               decline2(row);
            }
        }
    }
    const accept1=async(row)=>{
        await window.contract.methods.acceptreqDDST(row.reqfrom,row.from,row.reqno,localStorage.getItem("ROLENAME")).send({from:account});

    }
    const decline1=async(row)=>{
        await window.contract.methods.declinereqDDST(row.reqfrom,row.from,row.reqno,localStorage.getItem("ROLENAME")).send({from:account});

    }
    const accept2=async(row)=>{
        let acc=localStorage.getItem("ROLENAME");
let rej="";
if(acc==="D1ADST1"){
	rej="D1ADST2";

}
if(acc==="D1ADST2"){
	rej="D1ADST1";
	
}
if(acc==="D2ADST1"){
	rej="D2ADST2";
}
if(acc==="D2ADST2"){
	rej="D2ADST1";
	
}
if(acc==="D3ADST1"){
	rej="D3ADST2";
}
if(acc==="D3ADST2"){
	rej="D3ADST1";
	
}

await window.contract1.methods.acceptreqDDST1(acc,rej,row.from,row.reqno,row.products,row.quantities,row.date).send({from:account});

    }
    const decline2=async(row)=>{
        let rej=localStorage.getItem("ROLENAME");
let check="";
if(rej==="D1ADST1"){
	check="D1ADST2";

}
if(rej==="D1ADST2"){
	check="D1ADST1";
	
}
if(rej==="D2ADST1"){
	check="D2ADST2";
}
if(rej==="D2ADST2"){
	check="D2ADST1";
	
}
if(rej==="D3ADST1"){
	check="D3ADST2";
}
if(rej==="D3ADST2"){
	check="D3ADST1";
	
}





await window.contract1.methods.declinereqDDST1(rej,check,row.reqno,row.from).send({from:account});

    }
  
    
    ConnectMetamask();
    ConnectContractSR();
    const fetchdata=async()=>{
        let res=await window.contract.methods.getAllreqreceive(localStorage.getItem("ROLENAME")).call();
        let res2=await window.contract1.methods.getalladsts(localStorage.getItem("ROLENAME")).call();
        let updated=[...res];
        for(let i=0;i<res2.length;i++){
            for(let j=0;j<updated.length;j++){
                if(updated[j].reqno===res2[i].reqno && updated[j].from===res2[i].from){
                    updated[j]=res2[i];
                }
            }
        }
        if(updated.length===0){
           updated=[...res2];
        }
        setRes(updated);
        console.log(res);

        
    }
    useEffect(()=>{
       
        fetchdata();
        
    },[]);
    console.log(res);
    
   

    return (
       
    
   <>
   <div className="container">
   <table id="myTable" className="table table-striped table-hover">
             <thead>
                <tr>
                    <td>Request No</td>
                    <td>Request From</td>
                    <td>From</td>
                    <td>Products</td>
                    <td>Quantities</td>
                    <td>Date</td>
                    <td>Accept</td>
                    <td>Reject</td>
                </tr>
             </thead>
             <tbody>
             {res.map((ele, i) => {
                    
                    return (
                        ele.status==="pending" && 
                       
                        <tr key={i}>
                        <td>{parseInt(ele.reqno)}</td>
                        <td>{ele.reqfrom}</td>
                        <td>{ele.from}</td>
                        <td>{ele.products}</td>
                        <td>{ele.quantities}</td>
                        <td>{ele.date}</td>
                        <td>{ <button className="btn btn-primary" onClick={()=>accept(ele)}>ACCEPT</button>}</td>
                        <td>{ <button className="btn btn-danger" onClick={()=>reject(ele)}>REJECT</button>}</td>
                    </tr>
                    );
            })}

             </tbody>
    </table>
   </div>
   </>
    );
}

