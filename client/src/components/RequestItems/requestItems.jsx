import './requestItems.css';
import testImage from './testImage.jpeg';
import {IoChevronForwardCircle}  from 'react-icons/io5'

function RequestItems(props)
{
    if(props.NGOrequests)
    {
        return (
            <div class="container reqitem">
                <div class="row">
                <div class="col-lg-4 col-sm-12 firstC">
                    <img class= "image1" src={props.image}/>
                </div>
                <div class="col-lg-4 col-sm-12 secondC">
                    <h4 class="headings1">{props.name}</h4>
                    <h5 class = "headings2">{props.heading1}:</h5>
                    <p class="ptag1">{props.pargaraph1}</p>
                    <h5 class="headings3">{props.heading2}:</h5>
                    <p class="ptag">{props.date} | {props.time}</p>
                </div>
                <div class="col-lg-4 col-sm-12 thirdC">
                    <button className="Accept">Accept</button>
                    <button className="View-Details"><IoChevronForwardCircle size={40} color="#E76F51"/></button>
                </div>
                </div>
            </div>
        )

    }
    else if (props.userRequests)
    {
        return (
            <div class="container useritem">
                <div class="row row1">
                <div class="col-lg-4 col-sm-12 firstC1">
                    <img class= "image1" src={props.image}/>
                </div>
                <div class="col-lg-4 col-sm-12 secondC1">
                    <h4 class={"headings11"+(props.Resreq && props.userRequests?' reqAccept':' userAccept')}>{props.name}</h4>
                    <h5 class = {"headings21"+(props.Resreq && props.userRequests?' reqAccept':' userAccept')}>{props.heading1}:</h5>
                    <p class="ptag12">{props.pargaraph1}</p>
                    <h5 class={"headings31"+(props.Resreq && props.userRequests?' reqAccept':' userAccept')}>{props.heading2}:</h5>
                    <p class="ptag11">{props.date} | {props.time}</p>
                </div>
                <div class="col-lg-4 col-sm-12 thirdC1">
                    {props.buttonStat === 0 && <button className="userbutton pending">Pending</button>}
                    {props.buttonStat === 1 && <button className="userbutton expired">Expired</button>}
                    {props.buttonStat === 2 && <button className="userbutton completed">Completed</button>}
                </div>
                </div>
            </div>
        )
    }
   
}

export default RequestItems;