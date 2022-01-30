import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {updateCarById} from "../../store/carSlice"
import {CarValidator} from "../../validator/car.validator";
import './CarForm.css';


export const CarForm = () => {

    const [formError, setFormError] = useState({});

    const { handleSubmit, reset, register, formState: { errors } } = useForm(
        { resolver: joiResolver(CarValidator), mode: "onTouched" });
    const dispatch = useDispatch();

    const onFormSubmit = (data) => {
        try {
            dispatch(updateCarById({ data }))
            reset();
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            Update Car:
            <div>
                <label> id: <input type="text" {...register('id')}/></label>
                {errors.id && <span className={'error'}>{errors.id.message}</span>}
            </div>

            <div>
                <label> Model: <input type="text" {...register('model')}/></label>
                {errors.model && <span className={'error'}>{errors.model.message}</span>}
            </div>

            <div>
                <label> Price: <input type="text" {...register('price')}/></label>
                {errors.price && <span className={'error'}>{errors.price.message}</span>}
            </div>

            <div>
                <label> Year: <input type="text" {...register('year')}/></label>
                {errors.year && <span className={'error'}>{errors.year.message}</span>}
            </div>


            <button>Save</button>
        </form>
    );
};

