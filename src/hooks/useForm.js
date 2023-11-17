import { useState } from "react";
export const useForm = (initialState, submitHandler) => {
    const [formValues, setFormValues] = useState(initialState);
    const onChange = (event) => {
        setFormValues((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submitHandler(formValues);
    };

    return {
        formValues,
        onChange,
        onSubmit,
    };
};
