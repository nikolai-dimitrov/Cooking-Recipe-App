export const validateAuthForm = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    let err = {};

    if (name === "firstName" && (value.length < 3 || value.length > 20)) {
        err.firstName = "First name should be between 3 and 20 characters.";
    }

    if (name === "lastName" && (value.length < 3 || value.length > 20)) {
        err.lastName = "Last name should be between 3 and 20 characters.";
    }

    if (name === "email" && (value.length < 3 || value.length > 20)) {
        err.email = "Email should be between 3 and 20 characters.";
    }

    if (name === "email" && !value.includes("@")) {
        err.email = "Email must include @.";
    }

    if (name === "password" && (value.length < 5 || value.length > 20)) {
        err.password = "Password should be more than 5 characters.";
    }
    if (name === "rePass" && (value.length < 5 || value.length > 20)) {
        err.rePass = "Confirm Password should be more than 5 characters.";
    }
    if (Object.entries(err).length == 0) {
        return { [event.target.name]: "" };
    }
    return err;
};
