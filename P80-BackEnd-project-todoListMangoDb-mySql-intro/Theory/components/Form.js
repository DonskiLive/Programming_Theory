import React from 'react'
import { useForm } from "react-cool-form"
import Field from "./Field";
import {useDispatch} from 'react-redux'
import { addTodoAction } from '../store/todoReducer/TodoReducer';


const Form = () => {

    const dispatch = useDispatch()
    const {form, use} = useForm({
        defaultValues: {title: ''},
        onSubmit: (values, {reset}) => {
            dispatch(addTodoAction(values))
            //addToDoItem(values)
            reset()
        }
    })

    const errors = use("errors")

    return (
        <form ref={form} className="w-50 mx-auto mb-5" noValidate>
            <Field
                label="Enter New Item"
                name="title"
                id="title"
                type="text"
                required
                error={errors.title}
            />
        </form>
    )
}

export default Form