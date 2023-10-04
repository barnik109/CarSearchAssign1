// src/components/CarList.js
import React from 'react';
import CarCard from './Card';
import './CarList.css';

const CarList = ({ cars }) => {
    return (
        <div className="car-list">
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarList;
