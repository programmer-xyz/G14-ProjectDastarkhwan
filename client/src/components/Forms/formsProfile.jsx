import './formsProfile.css';
import React from 'react';
import { useState } from 'react';

const user1Init ={
    name:"",
    bio:"",
    username:"",
    email:"",
    phoneNum:"",
    currPw:"",
    newPw:"",
    cnic:"",
    address:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:""
};

const  user2Init ={
    name:"",
    bio:"",
    username:"",
    email:"",
    phoneNum:"",
    currPw:"",
    newPw:"",
    cnic:"",
    address:"",
    pocName:"",
    pocPhoneNum:"",
    pocEmail:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:"",
    accountNum:""
};

const  user3Init ={
    name:"",
    bio:"",
    username:"",
    email:"",
    phoneNum:"",
    currPw:"",
    newPw:"",
    cnic:"",
    address:"",
    pocName:"",
    pocPhoneNum:"",
    pocEmail:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:"",
    accountNum:""
};

function FormsProfile (props) {
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

    console.log(user1)
    if (props.User === 1){
        return(
            <div class = "container cardsNew">
                <div class = "row newClass">
                <label>User Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name" value={user1.name} onChange={handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Bio" name="bio" value={user1.bio} onChange={handleForm1}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" name="userName" value={user1.username} onChange={handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="CNIC" name="cnic" value={user1.cnic} onChange={handleForm1}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" name="phoneNum" value={user1.phoneNum} onChange={handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)" name="address" value={user1.address} onChange={handleForm1}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" value={user1.email} onChange={handleForm1}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Password Settings</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password" name="currPw" value={user1.currPw} onChange={handleForm1}/>
                        </div>
                        <button class = "buttonsNew">Delete Profile</button>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password" name="newPw" value={user1.newPw} onChange={handleForm1}/>
                        </div>
                        <button class = "buttonsNew">Save Changes</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.User === 2){
        return (
            <div class = "container cardsNew">
                <div class = "row newClass">
                <label>User Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name" value={user2.name} onChange={handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Bio" name="bio" value={user2.bio} onChange={handleForm2}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name" name="userName" value={user2.username} onChange={handleForm2}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" name="phoneNum" value={user2.phoneNum} onChange={handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)" name="address" value={user2.address} onChange={handleForm2}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Point of Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="pocName" value={user2.pocName} onChange={handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" name="pocPhone" value={user2.pocPhoneNum} onChange={handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="pocEmail" value={user2.pocEmail} onChange={handleForm2}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Password Settings</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password" name="currPw" value={user2.currPw} onChange={handleForm2}/>
                        </div>
                        <button class = "buttonsNew">Delete Profile</button>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password" name="newPw" value={user2.newPw} onChange={handleForm2}/>
                        </div>
                        <button class = "buttonsNew">Save Changes</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.User === 3){
        return (
            <div class = "container cardsNew">
                <div class = "row newClass">
                <label>NGO Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name" value={user3.name} onChange={handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Description" name="descr" value={user3.description} onChange={handleForm3}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Account Number" name="accountNum" value={user3.accountNum} onChange={handleForm3}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" name="phoneNum" value={user3.phoneNum} onChange={handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)" name="address" value={user3.address} onChange={handleForm3}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" value={user3.email} onChange={handleForm3}/>
                        </div>
                    </form>
                    </div>
                    <br></br>
                    <hr></hr>
                    <label>Point of Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="pocName" value={user3.pocName} onChange={handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" name='pocPhoneNum' value={user3.pocPhoneNum} onChange={handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="pocEmail" value={user3.pocEmail} onChange={handleForm3}/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Password Settings</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password" name="currPw" value={user3.currPw} onChange={handleForm3}/>
                        </div>
                        <button class = "buttonsNew">Delete Profile</button>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password" name="newPw" value={user3.newPw} onChange={handleForm3}/>
                        </div>
                        <button class = "buttonsNew">Save Changes</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormsProfile;