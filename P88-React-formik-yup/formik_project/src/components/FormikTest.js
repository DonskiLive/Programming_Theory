import React from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'

const FormikTest = () => {
	const validationsSchema = yup.object().shape({
		name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
		email: yup.string().email('Введите верный email').required('Обязательно'),
		confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')], 'Email не совпадают').required('Обязательно')
	})
	return (
		<>
			<h1>Formik Test</h1>
			<div>
				<Formik
					initialValues={{
						name: '',
						secondName: '',
						password: '',
						confirmPassword: '',
						email: '',
						confirmEmail: ''
					}}
					validateOnBlur
					onSubmit={(values) => { console.log(values) }}
					validationSchema={validationsSchema}
				>
					{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
						<div className={`from`}>
							<p>
								<label htmlFor={`name`}>Имя</label><br />
								<input
									className={'input'}
									type={`text`}
									name={`name`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
							</p>
							{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
							<p>
								<label htmlFor={`secondName`}>Фамилия</label><br />
								<input
									className={'input'}
									type={`text`}
									name={`secondName`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.secondName}
								/>
							</p>
							{touched.secondName && errors.secondName && <p className={'error'}>{errors.secondName}</p>}
							<p>
								<label htmlFor={`secondName`}>Пароль</label><br />
								<input
									className={'input'}
									type={`password`}
									name={`password`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
							</p>
							{touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
							<p>
								<label htmlFor={`confirmPassword`}>Подтвердите пароль</label><br />
								<input
									className={'input'}
									type={`password`}
									name={`confirmPassword`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.confirmPassword}
								/>
							</p>
							{touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
							<p>
								<label htmlFor={`email`}>Email</label><br />
								<input
									className={'input'}
									type={`email`}
									name={`email`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
							</p>
							{touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
							<p>
								<label htmlFor={`confirmEmail`}>Подтвердите email</label><br />
								<input
									className={'input'}
									type={`email`}
									name={`confirmEmail`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.confirmEmail}
								/>
							</p>
							{touched.confirmEmail && errors.confirmEmail && <p className={'error'}>{errors.confirmEmail}</p>}
							<button
								disabled={!isValid || !dirty}
								onClick={handleSubmit}
								type={`submit`}
							>Отправить</button>
						</div>
					)}
				</Formik>
			</div>
		</>
	)
}

export default FormikTest