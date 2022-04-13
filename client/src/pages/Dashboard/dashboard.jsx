import './dashboard.css';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx'
function Dashboard (){
    return(
        <div className = 'fullBody'>
            <div>
            <NavBar/>
            </div>
            <div className = 'nameUser'>
            <h1>Hello Jane!</h1>
            </div>
            <div className = 'welcome'>
            <p>Welcome to your Dashboard, here you can edit your personal info, see stats and make donations!</p>
            </div>
            <div className="ddiv">
            <div className = "col1">
                <Cards Resturant={2} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>
            </div>
            <div className="column2">
                <Cards2/>
            </div>
            </div>
            <div className="column1">
            <Footer user={true}/>
            </div>
        </div>
    );
}
export default Dashboard;