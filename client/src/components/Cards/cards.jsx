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
            <div className= "container-fluid">
            <h4 className="heading">Summary</h4>
            <div className="row">
                <div className= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <div className="card first">
                        <div className="card-body">
                            <h5 className="card-title">Meals Donations</h5>
                            <p className="card-text">{props.mealsDonated}</p>
                            <img className ="Res" src={mealsforres}/>
                        </div>
                    </div>
                </div>
                <div className= "col-lg-6 col-xs-12 col-md-12 col-sm-12">
                <div className="card third" >
                        <div className="card-body">
                            <h5 className="card-title">Number of NGOs donated to</h5>
                            <p className="card-text">{props.ngosDonatedTo}</p>
                            <img alt="image1" className ="Res" src={ngodonated}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="row">
                <div className="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons">Make Donations</button>
                </div>
                <div className="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons white">Past Requests</button>
                </div>
            </div>
            </div>
        );
    }
    else if (props.Resturant === 1)
    {
        return(
            <div className= "container-fluid">
            <h4 className="heading">Summary</h4>
            <div className="row">
                <div className= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <div className="card first">
                        <div className="card-body">
                            <h5 className="card-title">Monetary Donations</h5>
                            <p className="card-text">${props.monetaryDonations}</p>
                            <img alt="image2" src={dollar} />
                        </div>
                    </div>
                </div>
                <div className= "col-lg-4 col-md-12 col-sm-12">
                <div className="card second">
                        <div className="card-body">
                            <h5 className="card-title">Ration Donations</h5>
                            <p className="card-text">{props.rationDonations}</p>
                            <img alt="image3" src={bag}/>
                        </div>
                    </div>
                </div>
                <div className= "col-lg-4 col-md-12 col-sm-12">
                <div className="card third" >
                        <div className="card-body">
                            <h5 className="card-title">Meals Donations</h5>
                            <p className="card-text">{props.mealDonations}</p>
                            <img alt="image4" src={Meals}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr1"></hr>
            <div className="row">
                <div className="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons">Accept Donations</button>
                </div>
                <div className="col-lg-6 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons white">Past Requests</button>
                </div>
            </div>
            </div>
        );
    }
    else if (props.Resturant === 2)
    {
        return(
            <div className= "container-fluid">
            <h4 className="heading">Summary</h4>
            <div className="row">
                <div className= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <div className="card first">
                        <div className="card-body">
                            <h5 className="card-title">Monetary Donations</h5>
                            <p className="card-text">${props.monetaryDonations}</p>
                            <img alt="image5" src={dollar}/>
                        </div>
                    </div>
                </div>
                <div className= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                <div className="card second">
                        <div className="card-body">
                            <h5 className="card-title">Ration Donations</h5>
                            <p className="card-text">{props.rationDonations}</p>
                            <img alt="image6" src={bag}/>
                        </div>
                    </div>
                </div>
                <div className= "col-lg-4 col-xs-12 col-md-12 col-sm-12">
                <div className="card third" >
                        <div className="card-body">
                            <h5 className="card-title">Meals Donations</h5>
                            <p className="card-text">{props.mealDonations}</p>
                            <img alt="image7" src={Meals}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr1"></hr>
            <div className="row">
                <div className="col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons">Make Donations</button>
                </div>
                <div className="col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons white">Past Requests</button>
                </div>
                <div className="col-lg-4 col-xs-12 col-md-12 col-sm-12">
                    <button className="buttons white">Subscription</button>
                </div>
            </div>
            </div>
        );
    }
    
}

export default Cards;