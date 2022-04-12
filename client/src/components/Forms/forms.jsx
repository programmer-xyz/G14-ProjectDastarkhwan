import './forms.css';
function Forms (props) {
    if (props.User === 1){
        return(
                <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col1">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="exampleCheck1" placeholder="Password"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-4 col-sm-12 col2">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CNIC"/>                        
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description"/>
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
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="exampleCheck1" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Contact Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Contact Number"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck1" placeholder="Contact Email"/>
                        </div>
                        <button type = "submit" class="buttons">SIGN UP!</button>
                    </form>
                    </div>
                </div>
        );
    }
    else if (props.User == 3){
        return (
            <div class = "row newClass">
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control shadow-none" id="exampleCheck1" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Account Number"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12 ">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Contact Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Contact Number"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control shadow-none" id="exampleCheck1" placeholder="Contact Email"/>
                        </div>
                        <div class="form-group">
                            <label>Add Certification Email</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck1" placeholder="Add Certification Email"/>
                        </div>
                        <button type = "submit" class="buttons">SIGN UP!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Forms;