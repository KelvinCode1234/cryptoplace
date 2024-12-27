import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=> {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      case "ngn": {
        setCurrency({name: "ngn", symbol: "₦"});
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }


  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="logo"className='logo'/>
      </Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li><Link to={'/features'}>Features</Link></li>
            <li><Link to={'/pricing'}>Pricing</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="ngn">NGN</option>
            </select>
        </div> 
    </div>
  )
}

export default Navbar
