// Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarList from '../components/CarList';
import Pagination from '../components/Pagination';
import carsData from '../data/cars';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const carsPerPage = 6;
    const totalPages = Math.ceil(carsData.length / carsPerPage);
    const navigate = useNavigate();

    useEffect(() => {
        const startIndex = (currentPage - 1) * carsPerPage;
        const endIndex = startIndex + carsPerPage;
        const filteredCars = carsData.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const fetchedCars = filteredCars.slice(startIndex, endIndex);
        setCars(fetchedCars);
    }, [currentPage, searchTerm]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        navigate(`/page/${newPage}`);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleNext = () => {
        const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
        setCurrentPage(nextPage);
    };

    const handlePrevious = () => {
        const prevPage = currentPage > 1 ? currentPage - 1 : 1;
        setCurrentPage(prevPage);
    };

    const handleBeginning = () => {
        setCurrentPage(1);
    };

    return (
        <div className="container">
            <div className="input-group mb-3 mt-3 custom-input-group">

                <input
                    type="text"
                    className="form-control searchbar"
                    placeholder="Search cars..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ borderRight: 'none' }} 
                />

                <div className="input-group-prepend">
                    <span className="input-group-text text-dark">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#6a9ffb", backgroundColor: "white", cursor: "pointer" }} />
                    </span>
                </div>

                <div className="input-group-prepend">
                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Relevance
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" >Relevance</a>
                        <a className="dropdown-item" >Price - Low to High</a>
                        <a className="dropdown-item" >Price - High to Low</a>
                    </div>
                </div>

                <div className="input-group-prepend">
                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Brands
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" >All Brands</a>
                        <a className="dropdown-item" >Brand 1</a>
                        <a className="dropdown-item" >Brand 2</a>
                    </div>
                </div>
            </div>

            <CarList cars={cars} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onBeginning={handleBeginning}
            />
        </div>
    );
};

export default Home;
