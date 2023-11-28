import { useState } from "react";
export const useForm = (initialState, submitHandler) => {
    const [formValues, setFormValues] = useState(initialState);
    const onChange = (event) => {
        setFormValues((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };

    const onSubmit = (event, id) => {
        event.preventDefault();
        id ? submitHandler(formValues, id) : submitHandler(formValues);
    };

    const changeInitialValues = (values) => {
        setFormValues(values);
    };

    return {
        formValues,
        onChange,
        onSubmit,
        changeInitialValues,
    };
};
