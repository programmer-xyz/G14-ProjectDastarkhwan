import './forms.css';
import { useState } from 'react';
const user1 ={
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
}

const user2 ={
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
}

const user3 ={
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
    file:"",
    bankAccount:""
}

function Forms (props) {
    const [user1, setUser1] = useState(user1);
    const [user2, setUser2] = useState(user2);
    const [user3, setUser3] = useState(user3);

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

    if (props.User === 1){
        return(
                <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col1">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUser1" aria-describedby="emailHelp" placeholder="Name" name ="name" value={user1.name}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUserName1" placeholder="User Name" name= "username" value = {user1.username}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleEmail1" placeholder="Email" name="email" value = {user1.email}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleNum1" placeholder="Phone Number" name="phoneNum" value = {user1.phoneNum}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="examplePW1" placeholder="Password" name= "pw" value = {user1.pw}/>
                        </div>
                    </form>
                    </div>

                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col2">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputCnic1" aria-describedby="emailHelp" placeholder="CNIC" name= "cnic" value = {user1.cnic} />                        
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputAddress1" placeholder="Address (House No, St. Block, City, Country)" name= "address" value = {user1.address}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleDescription1" placeholder="Description" name= "description" value = {user1.description}/>
                            <button type = "submit" class="buttons" onClick={handleForm1}>SIGN UP!</button>
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
                            <input type="text" class="form-control shadow-none" id="exampleInputName2" aria-describedby="emailHelp" placeholder="Name" name = "name" value = {user2.name}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUserName2" placeholder="User Name" name = "username" value = {user2.username}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleemail2" placeholder="Email" name = "email" value = {user2.email}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleNum2" placeholder="Phone Number" name = "phoneNum" value = {user2.phoneNum}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="examplePW2" placeholder="Password"name = "pw" value = {user2.pw}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck2" placeholder="Address (House No, St. Block, City, Country)" name = "address" value = {user2.address}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Description" name = "description" value = {user2.description}/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword3" placeholder="Contact Name" name = "name2" value = {user2.name2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck3" placeholder="Contact Number" name = "phoneNum2" value = {user2.phoneNum2}/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck3" placeholder="Contact Email" name = "email2" value = {user2.email2}/>
                        </div>
                        <button type = "submit" class="buttons"  onClick={handleForm2}>SIGN UP!</button>
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
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail42" aria-describedby="emailHelp" placeholder="Name" name = "name" value = {user3.name}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword41" placeholder="User Name" name = "username" value = {user3.username}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck46" placeholder="Email" name = "email" value = {user3.email}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck45" placeholder="Phone Number" name = "phoneNum" value = {user3.phoneNum}/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="exampleCheck44" placeholder="Password" name = "pw" value = {user3.name}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck43" placeholder="Address (House No, St. Block, City, Country)" name = "address" value = {user3.address}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck42" placeholder="Account Number" name = "bankAccount" value = {user3.bankAccount}/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12 ">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail5" aria-describedby="emailHelp" placeholder="Description" name = "description" value = {user3.description}/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword5" placeholder="Contact Name" name = "name2" value = {user3.name2}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck52" placeholder="Contact Number" name = "phoneNum2" value = {user3.phoneNum2}/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck51" placeholder="Contact Email" name = "email2" value = {user3.email2}/>
                        </div>
                        <div class="form-group">
                            <label>Add Certification Email</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck5" placeholder="Add Certification Email" name = "file" value = {user3.file}/>
                        </div>
                        <button type = "submit" class="buttons"  onClick={handleForm3}>SIGN UP!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Forms;