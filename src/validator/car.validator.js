import Joi from "joi";

export const CarValidator = Joi.object({
    id: Joi.number().required().min(1).message({
        'number.empty': '"id" musn\'t be empty',
        'number.base': '"id" only number'
    }),
    model: Joi.string().required().alphanum().min(3).max(20).message({
        'string.empty': '"model" musn\'t be empty',
        'string.base': 'only alphabetic letters min 3 max 20'
    }),
    price: Joi.number().integer().default(0).min(1).max(1000000).message({
        'number.base': 'Price must be between 1 - 1 000 000',
        'number.min': 'Price must be higher 0',
        'number.max': 'Price must be lower 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year must be between 1900 to today'
    })


})
