import './formsProfile.css';
function FormsProfile (props) {
    if (props.User === 1){
        return(
            <div class = "container cardsNew">
                <div class = "row newClass">
                <label>User Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Bio"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="CNIC"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Password Settings</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password"/>
                        </div>
                        <button class = "buttonsNew">Delete Profile</button>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password"/>
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
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Bio"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Point of Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Password Settings</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password"/>
                        </div>
                        <button class = "buttonsNew">Delete Profile</button>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password"/>
                        </div>
                        <button class = "buttonsNew">Save Changes</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.User == 3){
        return (
            <div class = "container cardsNew">
                <div class = "row newClass">
                <label>NGO Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Description"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Account Number"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                    </form>
                    </div>
                    <br></br>
                    <hr></hr>
                    <label>Point of Contact Info</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                    </form>
                    </div>
                    <hr></hr>
                    <label>Password Settings</label>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password"/>
                        </div>
                        <button class = "buttonsNew">Delete Profile</button>
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-controlNew shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password"/>
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