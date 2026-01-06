"use client";
import React, { SetStateAction, useState } from "react";
import s from "./ContactForm.module.css";
import {
	ErrorMessage,
	Field,
	FieldProps,
	Form,
	Formik,
	FormikHelpers,
} from "formik";
import SuccessModdal from "./SuccessModdal/SuccessModdal";
import { ValidationSchemaCallback } from "../validationSchema";

type Props = {
	setOpenModal?: React.Dispatch<SetStateAction<boolean>>;
};

type InitialValuesType = {
	name: string;
	phone: string;
};

const ContactForm = ({ setOpenModal }: Props) => {
	const [successMessage, setSuccessMessage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const initialValues = {
		name: "",
		phone: "",
	};

	const hundlerSubmit = async (
		values: InitialValuesType,
		{ resetForm }: FormikHelpers<InitialValuesType>
	) => {
		const data = {
			name: values.name,
			phone: `+38${values.phone}`,
		};

		try {
			setIsLoading(true);
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setSuccessMessage(true);
				resetForm();
			}
		} catch (error) {
			console.error("Error sending email:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={s.formWrapper}>
			<div className={s.infoBlock}>
				<h3 className={s.title}>Потрібна допомога?</h3>
				<p className={s.text}>
					Вкажіть контактні дані, і ми зателефонуємо для консультації
				</p>
			</div>

			<Formik
				initialValues={initialValues}
				validationSchema={ValidationSchemaCallback}
				onSubmit={hundlerSubmit}
			>
				{({ isValid, dirty }) => (
					<Form className={s.form}>
						<div className={s.blockInputs}>
							<label className={s.label}>
								<span className={s.labelSpan}>ПІБ</span>
								{/* <Field
									type="text"
									name="name"
									className={s.input}
									placeholder="Введіть своє ПІБ"
								/> */}
								<Field name="name">
									{({ field, meta }: FieldProps) => (
										<input
											{...field}
											type="text"
											placeholder="Введіть своє ПІБ"
											className={`${s.input} ${
												meta.touched && meta.error ? s.inputError : ""
											}`}
										/>
									)}
								</Field>
								<ErrorMessage name="name" component="p" className={s.error} />
							</label>
							<label className={s.label}>
								<span className={s.labelSpan}>Телефон</span>
								{/* <Field
									type="text"
									name="phone"
									className={s.input}
									placeholder="+380 (00) 000 00 00 "
								/> */}
								<Field name="phone">
									{({ field, meta }: FieldProps) => (
										<input
											{...field}
											type="text"
											placeholder="+380 (00) 000 00 00"
											className={`${s.input} ${
												meta.touched && meta.error ? s.inputError : ""
											}`}
										/>
									)}
								</Field>
								<ErrorMessage name="phone" component="p" className={s.error} />
							</label>
						</div>

						<div className={s.btnBlock}>
							<button
								type="submit"
								className={s.btnSend}
								disabled={!(isValid && dirty)}
							>
								{isLoading ? "Відсилання..." : "Відправити"}
							</button>
							<p className={s.text}>
								Із радістю допоможемо розібратися з усіма питаннями!
							</p>
						</div>
					</Form>
				)}
			</Formik>

			{successMessage && (
				<SuccessModdal
					setSuccessMessage={setSuccessMessage}
					setOpenModal={setOpenModal}
				/>
			)}
		</div>
	);
};

export default ContactForm;
