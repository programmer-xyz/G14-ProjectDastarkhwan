import './cards.css';
import dollar from './Group 6036.svg';
import bag from './Santa_Bag_1.svg';
import Meals from './Group 6951.svg';
import mealsforres from './Group 6831.svg';
import ngodonated from './Group 6954.svg'
function Cards (props) {

    if(props.Resturant === 0)
    {
        return(
            <div class ="container">
            <h4 class ="heading">Summary</h4>
            <div class ="row">
                <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <div class="card first">
                        <div class="card-body">
                            <h5 class="card-title">Meals Donations</h5>
                            <p class="card-text">{props.mealsDonated}</p>
                            <img class ="Res" src={mealsforres}/>
                        </div>
                    </div>
                </div>
                <div class= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                <div class="card third" >
                        <div class="card-body">
                            <h5 class="card-title">Number of NGOs donated to</h5>
                            <p class="card-text">{props.ngosDonatedTo}</p>
                            <img alt="image1" class ="Res" src={ngodonated}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hr"></hr>
            <div class="row">
                <div class="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons">Make Donations</button>
                </div>
                <div class="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons white">Past Requests</button>
                </div>
            </div>
            </div>
        );
    }
    else if (props.Resturant === 1)
    {
        return(
            <div class= "container">
            <h4 class="heading">Summary</h4>
            <div class="row">
                <div class= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <div class="card first">
                        <div class="card-body">
                            <h5 class="card-title">Monetary Donations</h5>
                            <p class="card-text">${props.monetaryDonations}</p>
                            <img alt="image2" src={dollar} />
                        </div>
                    </div>
                </div>
                <div class= "col-lg-4 col-md-12 col-sm-12">
                <div class="card second">
                        <div class="card-body">
                            <h5 class="card-title">Ration Donations</h5>
                            <p class="card-text">{props.rationDonations}</p>
                            <img alt="image3" src={bag}/>
                        </div>
                    </div>
                </div>
                <div class= "col-lg-4 col-md-12 col-sm-12">
                <div class="card third" >
                        <div class="card-body">
                            <h5 class="card-title">Meals Donations</h5>
                            <p class="card-text">{props.mealDonations}</p>
                            <img alt="image4" src={Meals}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hr1"></hr>
            <div class="row">
                <div class="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons">Accept Donations</button>
                </div>
                <div class="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons white">Past Requests</button>
                </div>
            </div>
            </div>
        );
    }
    else if (props.Resturant === 2)
    {
        return(
            <div class= "container">
            <h4 class="heading">Summary</h4>
            <div class="row">
                <div class= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <div class="card first">
                        <div class="card-body">
                            <h5 class="card-title">Monetary Donations</h5>
                            <p class="card-text">${props.monetaryDonations}</p>
                            <img alt="image5" src={dollar}/>
                        </div>
                    </div>
                </div>
                <div class= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                <div class="card second">
                        <div class="card-body">
                            <h5 class="card-title">Ration Donations</h5>
                            <p class="card-text">{props.rationDonations}</p>
                            <img alt="image6" src={bag}/>
                        </div>
                    </div>
                </div>
                <div class= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                <div class="card third" >
                        <div class="card-body">
                            <h5 class="card-title">Meals Donations</h5>
                            <p class="card-text">{props.mealDonations}</p>
                            <img alt="image7" src={Meals}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hr1"></hr>
            <div class="row">
                <div class="col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons">Make Donations</button>
                </div>
                <div class="col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons white">Past Requests</button>
                </div>
                <div class="col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <button class="buttons white">Subscription</button>
                </div>
            </div>
            </div>
        );
    }
}

export default Cards;