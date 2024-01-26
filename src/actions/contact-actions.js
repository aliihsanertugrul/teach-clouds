"use server";

import { convertFormDataToJson, getYupErrors } from "@/helpers/form-validation";
import { createMessage } from "@/services/contact-service";
import * as Yup from "yup";

const FormSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	subject: Yup.string().required("Required"),
	message: Yup.string().required("Required"),
});

export const createMessageAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			console.log(data);
			throw (data?.validations);
		}

		return {
			success: true,
			message: "Your message was sent",
		};
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
            console.log(err.inner);
            console.log(getYupErrors(err.inner))
			return getYupErrors(err.inner);
		}

        
		return {
			success: false,
			message: '',
			errors: err,
		};
	}
};