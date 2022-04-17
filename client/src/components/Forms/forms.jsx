import './forms.css';
import {createNgoUser,createRestUser,createAccountUser} from  '../../servicesApi/authenticationApi.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const user1Init ={
    name:"",
    username:"",
    email:"",
    phoneNum:"",
    pw:"",
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
    username:"",
    email:"",
    phoneNum:"",
    pw:"",
    cnic:"",
    address:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:"",
    name2:"",
    email2:"",
    phoneNum2:""
};

const  user3Init ={
    name:"",
    username:"",
    email:"",
    phoneNum:"",
    pw:"",
    cnic:"",
    address:"",
    // HouseNo:"",
    // stBlock:"",
    // city:"",
    // country:"",
    description:"",
    name2:"",
    email2:"",
    phoneNum2:"",
    file: null,
    bankAccount:""
};




function Forms (props) {
    const [user1, setUser1] = useState(user1Init);
    const [user2, setUser2] = useState(user2Init);
    const [user3, setUser3] = useState(user3Init);

    const navigate =  useNavigate();
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
    const onFileChange = event => {
    
        // Update the state
        //let file = event.target.files[0];
        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = (e) =>
        // {
        //     // let formData = new FormData();
        //     // formData.append("verifyDoc",e.target.result)
        //     setUser3({...user3, file: e.target.result});
        // }
        setUser3({...user3, file: event.target.files[0]});
      
      };

    const onCreate = (e) =>{
 
        e.preventDefault();
        // let city = user3.city
        // let country = user3.country
        // let streetNumber= user3.streetNumber
        // let houseNumber = user3.houseNumber

        let city = "lah"
        let country = "pak"
        let streetNumber= "user3.streetNumber"
        let houseNumber= "user3.houseNumber"

        createNgoUser(user3.name,user3.username,user3.email, user3.phoneNum, user3.pw, city, country,streetNumber, houseNumber,user3.phoneNum2,user3.name2,user3.email2,user3.bankAccount,user3.description,user3.file).then((response)=>{
    
                if(response.data.success)
                {
                    props.getState("NGO created succesfully,","success",true)
                    console.log(response)
                }
                
        })
        .catch((err)=>
        {
            props.getState(err.response.data.message,"error",true);
        })
        //navigate('/')
    }

    const onCreateUser = (e) =>
    {
        e.preventDefault();
        let city = "lah"
        let country = "pak"
        let streetNumber= "user3.streetNumber"
        let houseNumber= "user3.houseNumber"
        createAccountUser(user1.name,user1.username,user1.email,user1.phoneNum,user1.pw,user1.cnic,city,country,streetNumber,houseNumber,user1.description).then(
            (res)=>
            {
                if(res.data.success)
                { 
                    props.getState("User created succesfully,","success",true)
                }
            }
        )
        .catch((err)=>
        {
            props.getState(err.response.data.message,"error",true);
        })
        //navigate('/')
    }
    const onCreateRest = (e) =>
    {
        e.preventDefault ();
        let city = "lah"
        let country = "pak"
        let streetNumber= "user3.streetNumber"
        let houseNumber= "user3.houseNumber"
        createRestUser(user2.name,user2.username,user2.email,user2.phoneNum,user2.pw,city,country,streetNumber,houseNumber,user2.phoneNum2,user2.name2,user2.email2,user2.description).then
        ((response)=>
        {
            if(response.data.success)
            {
                props.getState("Resturant registration application created,","success",true, '/');
                console.log(response);
            }
          
        }).catch((err,response)=>
        {
            props.getState(err.response.data.message,"error",true);
        })
        //navigate('/')
    }
    console.log(user3)
    if (props.User === 1){
        return(
                <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col1">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUser1" aria-describedby="emailHelp" placeholder="Name" name ="name" value={user1.name} onChange = {handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUserName1" placeholder="User Name" name= "username" value = {user1.username} onChange = {handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleEmail1" placeholder="Email" name="email" value = {user1.email} onChange = {handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleNum1" placeholder="Phone Number" name="phoneNum" value = {user1.phoneNum} onChange = {handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="examplePW1" placeholder="Password" name= "pw" value = {user1.pw} onChange = {handleForm1}/>
                        </div>
                    </form>
                    </div>

                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col2">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputCnic1" aria-describedby="emailHelp" placeholder="CNIC" name= "cnic" value = {user1.cnic} onChange = {handleForm1}/>                        
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputAddress1" placeholder="Address (House No, St. Block, City, Country)" name= "address" value = {user1.address} onChange = {handleForm1}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleDescription1" placeholder="Description" name= "description" value = {user1.description} onChange = {handleForm1}/>
                            <button type = "submit" class="buttonsForms" onClick={onCreateUser}>SIGN UP!</button>
                        </div>
                    </form>
                    </div>
                    
                </div>
                
        );
    }
    else if (props.User === 2){
        return (
            <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputName2" aria-describedby="emailHelp" placeholder="Name" name = "name" value = {user2.name} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUserName2" placeholder="User Name" name = "username" value = {user2.username} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleemail2" placeholder="Email" name = "email" value = {user2.email} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleNum2" placeholder="Phone Number" name = "phoneNum" value = {user2.phoneNum} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="examplePW2" placeholder="Password" name = "pw" value = {user2.pw} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck2" placeholder="Address (House No, St. Block, City, Country)" name = "address" value = {user2.address} onChange = {handleForm2}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Description" name = "description" value = {user2.description} onChange = {handleForm2}/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword3" placeholder="Contact Name" name = "name2" value = {user2.name2} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck3" placeholder="Contact Number" name = "phoneNum2" value = {user2.phoneNum2} onChange = {handleForm2}/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck3" placeholder="Contact Email" name = "email2" value = {user2.email2} onChange = {handleForm2}/>
                        </div>
                        <button type = "submit" class="buttonsForms1" onClick={onCreateRest}>SIGN UP!</button>
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
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail42" aria-describedby="emailHelp" placeholder="Name" name = "name" value = {user3.name} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword41" placeholder="User Name" name = "username" value = {user3.username} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck46" placeholder="Email" name = "email" value = {user3.email} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck45" placeholder="Phone Number" name = "phoneNum" value = {user3.phoneNum} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="exampleCheck44" placeholder="Password" name = "pw" value = {user3.pw} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck43" placeholder="Address (House No, St. Block, City, Country)" name = "address" value = {user3.address} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck42" placeholder="Account Number" name = "bankAccount" value = {user3.bankAccount} onChange = {handleForm3}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12 ">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail5" aria-describedby="emailHelp" placeholder="Description" name = "description" value = {user3.description} onChange = {handleForm3}/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword5" placeholder="Contact Name" name = "name2" value = {user3.name2} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck52" placeholder="Contact Number" name = "phoneNum2" value = {user3.phoneNum2} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck51" placeholder="Contact Email" name = "email2" value = {user3.email2} onChange = {handleForm3}/>
                        </div>
                        <div class="form-group">
                            <label>Add Certification Email</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck5" placeholder="Add Certification Email"  onChange = {onFileChange}/>
                        </div>
                        <button type = "submit" class="buttonsForms1" onClick={onCreate}>SIGN UP!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Forms;