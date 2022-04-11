import './forms.css';
function Forms (props) {
    if (props.User === 1){
        return(
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
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CNIC"/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description"/>
                        </div>
                        <button type = "submit" class="buttons">SIGN UP!</button>
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
                    </form>
                    </div>
                    <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CNIC"/>                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description"/>
                        </div>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Forms;