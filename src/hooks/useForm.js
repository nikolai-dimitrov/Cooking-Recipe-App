import { useState } from "react";
import { validateAuthForm } from "../utils/validateAuthForm";
import { validateRecipeForm } from "../utils/validateRecipeForm";
export const useForm = (initialState, submitHandler) => {
    const [formValues, setFormValues] = useState(initialState);
    // const [formErrors, setFormErrors] = useState(initialState);
    const [formErrors, setFormErrors] = useState(() => {
        let formErrorsState = {};
        if (initialState["difficulty"]) {
            formErrorsState = initialState["difficulty"] = "";
            return formErrorsState;
        }
        return initialState;
    });

    const [disable, setDisable] = useState(true);

    const onChange = (event) => {
        setFormValues((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };

    const onSubmit = (event, id) => {
        event.preventDefault();
        let initialEmptyFields = {};

        Object.entries(formValues).map(([k, v]) => {
            if (v == "" && k != "difficulty") {
                return (initialEmptyFields[k] = "This field is required");
            }
        });

        const emptyFieldsLen = Object.values(initialEmptyFields).length;
        const errorsLen = Object.values(formErrors).filter(
            (el) => el != ""
        ).length;

        setFormErrors((state) => ({
            ...formErrors,
            ...initialEmptyFields,
        }));

        if (errorsLen > 0 || emptyFieldsLen > 0) {
            return;
        }

        id ? submitHandler(formValues, id) : submitHandler(formValues);
    };

    const changeInitialValues = (values) => {
        setFormValues(values);
    };

    const validateInputHandler = (event, formType) => {
        // Pass validator as useForm param once and use it in function below (not as validateInputHandler param)
        let validator = null;
        formType == "auth"
            ? (validator = validateAuthForm)
            : (validator = validateRecipeForm);
        const err = validator(event);
        setFormErrors((state) => ({
            ...state,
            [event.target.name]: err[event.target.name],
        }));
    };

    const isReadyToSubmit = () => {
        const errors = Object.values(formErrors).every((v) => v == "");
        const formFields = Object.values(formValues).every((v) => v != "");
        if (errors && formFields) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    return {
        formValues,
        formErrors,
        disable,
        onChange,
        onSubmit,
        changeInitialValues,
        validateInputHandler,
        isReadyToSubmit,
    };
};

// if (initialEmptyFields) {
//     setFormErrors((state) => ({
//         ...formErrors,
//         ...initialEmptyFields,
//     }));
//     console.log("here");
//     return;
// }
