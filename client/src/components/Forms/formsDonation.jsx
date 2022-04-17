import './formsDonation.css';
import React from 'react';
import { useState,  useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ModalAddress from '../Modals/modalAddress';
import { findNgoUser,findNgoRest, mealDonationRest,mealDonationUser ,rationDonationUser,moneyDonationUser } from  '../../servicesApi/donation.js';



const user1Init ={
    ngo:"",
    amount:"",

    cardNumber:""
   
};

const  user2Init ={
    ngo: "",
    amount:"",
    nameOnCard:"",
    cardNumber:"",
    expiryDate:"",
    cvc:"",
    cnic:"",
    address:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:"",
    rationImage:null
};

const  user3Init ={
    ngo:"",
    amount:"",
    nameOnCard:"",
    cardNumber:"",
    expiryDate:"",
    cvc:"",
    cnic:"",
    address:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:"",
    rationImage:null
};


function FormsDonation (props) {

    const [user1, setUser1] = useState(user1Init);
    const [user2, setUser2] = useState(user2Init);
    const [user3, setUser3] = useState(user3Init);
    const [searchParams] = useSearchParams();
    const[ role,setRole] = useState("rest");
    const [email,setEmail] = useState("rest4@gmail.com");
    const [modalState,setModalState] = useState(false);
    const [Addressset,setAddressState] = useState("Address (House No, St. Block, City, Country)")
    const [Addressset1,setAddressState1] = useState("Address (House No, St. Block, City, Country)")
    const [Addressset2,setAddressState2] = useState("Address (House No, St. Block, City, Country)")

    console.log(searchParams);
    

    const handleForm1 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser1({...user1, [name]: value});
      
    }

    const handleForm2 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser2({...user2, [name]: value});
      
    }

    const mealDon = (e) =>{
        
        e.preventDefault();
        const address = {
            "city":Addressset2.city,
            "country":Addressset2.country,
            "streetNumber":Addressset2.street,
            "houseNumber":Addressset2.houseNo
        }     
        
        if(role === "rest")
        {
        mealDonationRest( address,  user3.description, email,  user3.ngo,  user3.rationImage).then((response)=>{
    
                if(response.data.success)
                {
                //    const updatedStates= {
                //         "modelMsg":
                //         "state":true,
                //         "success":true,
                //         "actionMsg":"Back to Dashboard",
                //         "route":"",
                //     }
                    props.getS("Thank you! You have successfully made a Donation",true,true,"Back to Dashboard","resturantDashboard");

                }  
        })
        .catch((err)=>
        {
            console.log(err);
        })
    }
    else if(role === "user"){
        mealDonationUser( address,  user3.description, email,  user3.ngo,  user3.rationImage).then((response)=>{
    
            if(response.data.success)
            {
           
                props.getS("Thank you! You have successfully made a Donation",true,true,"Back to Dashboard","userdashboard");

            }  
    })
    .catch((err)=>
    {
        console.log(err);
    })
    }


}
   

const rationDon = (e) =>{
 
    e.preventDefault();
    console.log(Addressset1)
    const address = {
        "city": Addressset1.city,
        "country":Addressset1.country,
        "streetNumber":Addressset.street,
        "houseNumber":Addressset.houseNo
    }
    let em = "amgio@lums.edu.pk";
    let role = "user";

    if(role === "user")
    {
        rationDonationUser( address,  user2.description, em,  user2.ngo,  user2.rationImage).then((response)=>{

            if(response.data.success)
            {
            //    const updatedStates= {
            //         "modelMsg":
            //         "state":true,
            //         "success":true,
            //         "actionMsg":"Back to Dashboard",
            //         "route":"",
            //     }
                props.getS("Thank you! You have successfully made a Donation",true,true,"Back to Dashboard","userdashboard");

            }  
    })
    .catch((err)=>
    {
        console.log(err);
    })
    }
    
    }

    const moneyDon = (e) =>{
        e.preventDefault();
        let em = "amgio@lums.edu.pk";
  
        let role = "user";
        if(role === "user")
        {
            moneyDonationUser (em, user1.ngo, user1.amount, user1.cardNumber).then((response)=>{

                if(response.data.success)
                {
                //    const updatedStates= {
                //         "modelMsg":
                //         "state":true,
                //         "success":true,
                //         "actionMsg":"Back to Dashboard",
                //         "route":"",
                //     }
                    props.getS("Thank you! You have successfully made a Donation",true,true,"Back to Dashboard","userdashboard");
    
                }  
        })
        .catch((err)=>
        {
            console.log(err);
        })
        }
    }

    

    const onFileChange3 = event => {
        event.preventDefault()
        setUser3({...user3, rationImage: event.target.files[0]});
      
      };

      const onFileChange2 = event => {
        event.preventDefault()
        setUser2({...user2, rationImage: event.target.files[0]});
      
      };

    const handleForm3 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser3({...user3, [name]: value});
      
    }
    function handleClose(reason)
    {
        if (reason !== "backdropClick")
        {
        
        } else {
            setModalState(false);

        }
    }
    function getinfo(address)
    {
        let z = "";
        console.log(address);
        setModalState(false);
        for (const key in address){
            if(z===""){
                z=z+address[key];
            }
            else {
                z=z+" , "+address[key];
            }
        }
        console.log("This is z,",z);
        if(props.User === 1)
        {
            
            setAddressState(address);

        }
        else if (props.User === 2)
        {
            setAddressState1(address);
        }
        else if (props.User === 3)
        {
            setAddressState2(address);
        }

    }

    function openModal (e){
        e.preventDefault();

        setModalState(true);
    }

   const [ngo_lis, setNgoLis] = useState([]);

    const getNgos = async() =>{
        let ngos = [];
        //let address = {"city": "karachi", "country": "Pakistan",  "streetNumber":"11",  "houseNumber":"1"}
        let role = "rest"; //get from local storage
        let id_user  = "62386a881d8d6e8aeabe6d6f"; // get from local storage
        

        if(role === "user")
        {
            try{
                console.log('hello');
                ngos = await findNgoUser(id_user);
            
                setNgoLis(ngos.data.body);
            
            }
            catch(err){
                console.log('error in calling api');
            }
        }
        else if (role === "rest"){
            try{
                console.log('hello');
                ngos = await findNgoRest(id_user);
            
                setNgoLis(ngos.data.body);
            
            }
            catch(err){
                console.log('error in calling api');
            }

        }
    }

    useEffect(()=>{
        getNgos();

    }, [])

   console.log('here')
  console.log(user2);

    //value={user1.ngo} onChange={handleForm1}
    if (props.User === 1){
        return(
                <div class = "row newClass">
                 {/* <ModalAddress state = {modalState} handleClose = {handleClose} onClick3 = {getinfo} User={1}/> */}
                    <form>
                        <div class="form-group2">
                            <select class="form-select shadow-none"  placeholder="NGO" name="ngo"  onChange={handleForm1}> 
                                <option >Select NGO</option>
                                {
                                    ngo_lis.map((ele) =>
                                        (
                                        <option value = {ele.email}>{ele.name}</option>
                                        )
                                    )
                                }
                                
                            </select>
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="exampleInputPassword1" placeholder="Amount ($)" name="amount" value={user1.amount} onChange={handleForm1}/>
                            <p class="details1">Card Details</p>
                        </div>
                        
                        <div class="form-group2">
                            {/* <label>Card Details</label> */}
                            <input type="text" class="form-control input5 shadow-none" id="namecard" placeholder="Name On Card" name="nameCard"/>
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="numcard" placeholder="Card Number" name="cardNumber" value={user1.cardNumber} onChange={handleForm1}/>
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="expdate" placeholder="Expiry Date" name="expDate" />
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="cvc" placeholder="CVC" />
                            <button type = "submit" class="buttonsDonations"  onClick={moneyDon }>Confirm Donation!</button>

                        </div>
                       
                    </form>
                </div>
        );
    }
    else if (props.User === 2){
        return (
            <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                    <ModalAddress state = {modalState} handleClose = {handleClose} onClick3 = {getinfo} User={2}/>
                        <div class="form-group2">
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO" name="ngo" onChange={handleForm2}>
                                <option>Select NGO</option>
                                {
                                    ngo_lis.map((ele) =>
                                        (
                                       <option value = {ele.email}>{ele.name}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>
                        <div class="form-group2">
                            <input onClick={openModal} type="text" class="form-control input5 shadow-none" id="exampleInputPassword1" placeholder={`${Addressset1}`} name="address" value={user2.address} onChange={handleForm2}/>
                            <p class="details1">Ration Details</p>
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="exampleCheck1" placeholder="Description" name="description" value={user2.description} onChange={handleForm2}/>
                        </div>
                        <div class="form-group2">
                            <label>Upload Ration Image</label>
                            <input type="file" class="form-control input5 shadow-none" id="exampleCheck1" placeholder="Add Ration Image" name="rationImg" onChange={onFileChange2}/>
                        </div>
                        <button type = "submit" class="buttonsDonations1" onClick = {rationDon}>Confirm Donation!</button>
                    </form>
                    </div>
                </div>
        );
    }
    else if (props.User === 3){
        return (
            <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                    <ModalAddress state = {modalState} handleClose = {handleClose} onClick3 = {getinfo} User={3}/>
                        <div class="form-group2">
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO" name="ngo" onChange={handleForm3}>
                                <option>Select NGO</option>
                                {
                                    ngo_lis.map((ele) =>
                                        (
                                        <option value = {ele.email}>{ele.name}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="exampleInputPassword1" placeholder={`${Addressset2}`}  name="address" value={user3.address} onChange={handleForm3}/>
                            <p class="details1">Meal Details</p>
                        </div>
                        <div class="form-group2">
                            <input type="text" class="form-control input5 shadow-none" id="exampleCheck1" placeholder="Description" name="description" value={user3.description} onChange={handleForm3}/>
                        </div>
                        <div class="form-group2">
                            <label>Upload Meal Image</label>
                            <input type="file" class="form-control input5 shadow-none" id="exampleCheck1" placeholder="Add Ration Image" name="rationImage" onChange={onFileChange3}/>
                        </div>
                        <button type = "submit" class="buttonsDonations1" onClick = {mealDon}>Confirm Donation!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default FormsDonation;