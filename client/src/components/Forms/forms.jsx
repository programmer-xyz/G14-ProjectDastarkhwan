import './forms.css';

const user1 ={
    name:""
}
function Forms (props) {


    if (props.User === 1){
        return(
                <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col1">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUser1" aria-describedby="emailHelp" placeholder="Name" name ="name" value={user1.name}/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUserName1" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleEmail1" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleNum1" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="examplePW1" placeholder="Password"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col2">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputCnic1" aria-describedby="emailHelp" placeholder="CNIC"/>                        
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputAddress1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleDescription1" placeholder="Description"/>
                            <button type = "submit" class="buttons">SIGN UP!</button>
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
                            <input type="text" class="form-control shadow-none" id="exampleInputName2" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputUserName2" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleemail2" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleNum2" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="examplePW2" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck2" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Description"/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword3" placeholder="Contact Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck3" placeholder="Contact Number"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck3" placeholder="Contact Email"/>
                        </div>
                        <button type = "submit" class="buttons">SIGN UP!</button>
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
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail42" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword41" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck46" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck45" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="exampleCheck44" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck43" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck42" placeholder="Account Number"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12 ">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail5" aria-describedby="emailHelp" placeholder="Description"/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword5" placeholder="Contact Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck52" placeholder="Contact Number"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck51" placeholder="Contact Email"/>
                        </div>
                        <div class="form-group">
                            <label>Add Certification Email</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck5" placeholder="Add Certification Email"/>
                        </div>
                        <button type = "submit" class="buttons">SIGN UP!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Forms;