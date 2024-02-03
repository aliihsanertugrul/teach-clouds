"use client";

import { createLessonAction } from "@/actions/lesson-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";

import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";


const NewLessonForm = () => {
	const [state, dispatch] = useFormState(createLessonAction, initialResponse);

	return (
		<div className="container ">
			<div className="card">
				<div className="card-body">
					<div className="card-title">New</div>

					<form action={dispatch} noValidate>
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.lessonName
										)}`}
										id="lessonName"
										name="lessonName"
										placeholder="Lesson Name"
									/>
									<label htmlFor="name">Lesson Name</label>
									<div className="invalid-feedback">
										{state.errors?.lessonName}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.creditScore
										)}`}
										id="creditScore"
										name="creditScore"
										placeholder="Credit Score"
									/>
									<label htmlFor="surname">Credit Score</label>
									<div className="invalid-feedback">
										{state.errors?.creditScore}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.compulsory
										)}`}
										id="compulsory"
										name="compulsory"
										
									>
										
										<option
												value="select"
												disabled
												
											>
												Select
											</option>
											<option
												value="true"
												
											>
												True
											</option>
											<option
												value="false"
												
											>
												False
											</option>
										
									</select>
									<label htmlFor="compulsory">Compulsory</label>
									<div className="invalid-feedback">
										{state.errors?.compulsory}
									</div>
								</div>
							</div>
							
						</div>

						<div className="d-flex align-items-center justify-content-center gap-3">
							<CancelButton />
							<SubmitButton title="Create" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewLessonForm;
