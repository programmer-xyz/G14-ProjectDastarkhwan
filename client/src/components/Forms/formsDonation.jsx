import './formsDonation.css';

function FormsDonation (props) {
    
    if (props.User === 1){
        return(
                <div class = "row newClass">
                    <form>
                        <div class="form-group">
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO">
                                <option selected>Select NGO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Amount ($)"/>
                            <p class="details">Card Details</p>
                        </div>
                        
                        <div class="form-group">
                            {/* <label>Card Details</label> */}
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Name On Card"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Card Number"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Expiry Date"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="CVC"/>
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
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO">
                                <option selected>Select NGO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                            <p class="details1">Ration Details</p>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description"/>
                        </div>
                        <div class="form-group">
                            <label>Upload Ration Image</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck1" placeholder="Add Ration Image"/>
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
                            <select class="form-select shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NGO">
                                <option selected>Select NGO</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleInputPassword1" placeholder="Address (House No, St. Block, City, Country)"/>
                            <p class="details1">Meal Details</p>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control shadow-none" id="exampleCheck1" placeholder="Description"/>
                        </div>
                        <div class="form-group">
                            <label>Upload Meal Image</label>
                            <input type="file" class="form-control shadow-none" id="exampleCheck1" placeholder="Add Ration Image"/>
                        </div>
                        <button type = "submit" class="buttons">Confirm Donation!</button>
                    </form>
                    </div>
                </div>
        );
    }
}
export default FormsDonation;