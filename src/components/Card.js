
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGauge } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.img_url} alt={car.name} />
            <div className="car-details">
                <h2>{car.name}</h2>
                <h3>{car.year}</h3>
                <div className="features">
                    
                    <span className='User'><FontAwesomeIcon icon={faUser} style={{ color: "#3a78e4", backgroundColor:"white"}} />  4 People</span>
                    <span className='petrol'><FontAwesomeIcon icon={faGasPump} style={{ color: "#3a78e4", backgroundColor: "white" }} />  Hybrid</span>
                    <span className='speed'><FontAwesomeIcon icon={faGauge} style={{ color: "#3a78e4", backgroundColor: "white" }} /> 6.1km / 1-litre</span>
                    <span className='gear'><FontAwesomeIcon icon={faGear} style={{ color: "#3a78e4", backgroundColor: "white" }} />  Automatic</span>
                </div>
                
            </div>
            <div className="checklist">
            <p className="avg-price"><span className='price'>   ${car.avg_price}</span> /month</p>
                <button className="love-react-btn"><FontAwesomeIcon icon={faHeart} style={{ color: "#6a9ffb", backgroundColor:"#b2d4d9"}} /></button>
                <button className="rent-now-btn">Rent Now</button>
            </div>
        </div>
    );
};

export default CarCard;
