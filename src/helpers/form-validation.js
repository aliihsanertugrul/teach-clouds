export const getYupErrors = (errors) => {
	const errObj = {};
	errors.forEach((error) => (errObj[error.path] = error.message));

	return {
		message: "",
		errors: errObj,
        success:false
	};
};

export const convertFormDataToJson = (formData) =>
	Object.fromEntries(formData.entries());