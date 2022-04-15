import './formsDonation.css';
import React from 'react';
import { useState } from 'react';
import { findNgo } from  '../../servicesApi/donation.js';
const user1Init ={
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
    rationImage: ""
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
    rationImage: ""
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
    rationImage: ""
};

function FormsDonation (props) {

    const [user1, setUser1] = useState(user1Init);
    const [user2, setUser2] = useState(user2Init);
    const [user3, setUser3] = useState(user3Init);

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

    const handleForm3 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser3({...user3, [name]: value});
      
    }

    const getNgos = async(city) =>{
            //let ngos = await findNgo()
    }

    if (props.User === 1){
        return(
                <div class = "row newClass">
                    <form>
                        <div class="form-group">
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO" name="ngo" value={user1.ngo} onChange={handleForm1}>
                                <option selected>Select NGO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Amount ($)" name="amount" value={user1.name} onChange={handleForm1}/>
                            <p class="details">Card Details</p>
                        </div>
                        
                        <div class="form-group">
                            {/* <label>Card Details</label> */}
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Name On Card" name="nameCard" value={user1.nameOnCard} onChange={handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Card Number" name="numCard" value={user1.cardNumber} onChange={handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Expiry Date" name="expDate" value={user1.expiryDate} onChange={handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="CVC" name="cvc" value={user1.cvc} onChange={handleForm1}/>
                            <button type = "submit" class="buttons">Confirm Donation!</button>
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
                        <div class="form-group">
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO" name="name" value={user2.ngo} onChange={handleForm2}>
                                <option selected>Select NGO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)" name="address" value={user2.address} onChange={handleForm2}/>
                            <p class="details1">Ration Details</p>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description" name="descr" value={user2.description} onChange={handleForm2}/>
                        </div>
                        <div class="form-group">
                            <label>Upload Ration Image</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck1" placeholder="Add Ration Image" name="rationImg" value={user2.rationImage} onChange={handleForm2}/>
                        </div>
                        <button type = "submit" class="buttons">Confirm Donation!</button>
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
                        <div class="form-group">
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO" name="ngo" value={user3.ngo} onChange={handleForm3}>
                                <option selected>Select NGO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)" name="address" value={user3.address} onChange={handleForm3}/>
                            <p class="details1">Meal Details</p>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description" name="descr" value={user3.address} onChange={handleForm3}/>
                        </div>
                        <div class="form-group">
                            <label>Upload Meal Image</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck1" placeholder="Add Ration Image" name="rationImg" value={user3.rationImage} onChange={handleForm3}/>
                        </div>
                        <button type = "submit" class="buttons">Confirm Donation!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default FormsDonation;