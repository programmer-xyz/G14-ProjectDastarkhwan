import './dashboard.css';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx'
function Dashboard (){
    return(
        <div className = 'fullBody'>
            <div><NavBar></NavBar></div>
            <div class = 'row1'>
            <div class = 'nameUser'>Hello Jane!</div>
            <div class = 'welcome'>Welcome to your Dashboard, here you can edit your personal info, see stats and make donations!</div>
            </div>
            <div class = 'row2'>
                <Cards Resturant={2} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>
                <Cards2 class = "cards2"></Cards2>
            </div>
            <div><Footer user={true}/></div>
        </div>
    );
}
export default Dashboard;