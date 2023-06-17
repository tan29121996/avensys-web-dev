import { useFormik } from 'formik';

function RegistrationForm() {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        },

        validate: (data) => {
            let errors = { }

            if (!data.username) {
                errors.username = "You need to enter your username"
            }
            if (!data.password) {
                errors.password = "You need to enter your password"
            }
            if (data.password) {
                if (data.password.length < 6 || data.password.length > 20) {
                    errors.password1 = "Passwords should be between 6 and 20 characters."
                } else {

                }
            }
            if (!data.email) {
                errors.email = "You need to enter your email"
            }
            return errors
        }
    })

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "50vw" }}>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" name="username" value={formik.values.username} onChange={formik.handleChange} />
                        { formik.errors.username ? <div>{formik.errors.username}</div> : null }
                    </div>
                    <br />
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" value={formik.values.password} onChange={formik.handleChange} />
                        { formik.errors.password ? <div>{formik.errors.password}</div> : null }
                        { formik.errors.password1 ? <div>{formik.errors.password1}</div> : null}
                    </div>
                    <br />
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} />
                        { formik.errors.email ? <div>{formik.errors.email}</div> : null }
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm