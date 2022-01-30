import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {getAllCars} from "../store/carSlice";
import {CarDetails} from "../components/CarDetails";
import {CarForm} from "../components/car-form/CarForm";
import {carsService} from "../services/cars.service";

const CarsPage = () => {
    const { cars, status, error } = useSelector(state => state['carsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div>
            <div>
                <CarForm/>
                <hr/>
            </div>
            <div>
                {status === 'loading' && <h3>LOADING...</h3>}
                {error && <h3>{error}</h3>}
                {!!cars.length && cars.map(car => <CarDetails key={car.id} car={car}/>)}
            </div>

        </div>
    );
};

export default CarsPage;
