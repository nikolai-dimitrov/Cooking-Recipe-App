export const validateAuthForm = (event) => {
    const name = event.target.name;
    // const value = event.target.value.trim();
    const value = event.target.value;
    let err = {};
    let reg = /^\s|\s$/;
    // if (value.match(reg)) {
    //     console.log(`${name} can not start or end with whitespaces`);
    // }

    if (name === "firstName") {
        const regex = /^\s|\s$/;
        const isMatch = value.match(regex);
        if (value.length < 3 || value.length > 20) {
            err.firstName = "First name should be between 3 and 20 characters.";
        } else if (isMatch) {
            err.firstName = "First name can not start/end with whitespace";
        }
    }

    if (name === "lastName") {
        let regex = /^\s|\s$/;
        const isMatch = value.match(regex);
        if (value.length < 3 || value.length > 20) {
            err.lastName = "Last name should be between 3 and 20 characters.";
        } else if (isMatch) {
            err.lastName = "First name can not start/end with whitespace";
        }
    }

    if (name === "email") {
        const regex = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;
        const isMatch = value.match(regex);
        if (!isMatch) {
            err.email = "Please enter valid email.";
        }
    }

    if (name === "password") {
        const regex = /(^[a-zA-Z0-9]{6,16})$/;

        const isMatch = value.match(regex);
        if (!isMatch) {
            err.password =
                "Password should be between 6 and 16 characters, only letters and numbers";
        }
    }

    if (name === "rePass") {
        let regex = /(^[a-zA-Z0-9]{6,16})$/;
        const isMatch = value.match(regex);
        if (!isMatch) {
            err.rePass =
                "Confirm Password should be between 6 and 16 characters, only letters and numbers.";
        }
    }

    if (Object.entries(err).length == 0) {
        return { [event.target.name]: "" };
    }
    return err;
};

// /^[\w!@#$%^&*]{6,16}$/; pass regex
