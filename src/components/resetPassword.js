/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'

const sendEmail = ({ handleSubmit, ...props }) => {
    return (
        <div className=' ed-grid card'>
            <form onSubmit={handleSubmit}>
                <h1 className='s-75 m-50 lg-40 s-to-left m-to-center'>Reset Your Password</h1>
                <p className='s-75 m-50 lg-40 s-to-left m-to-center'>To reset your password, enter your email below and submit. <br />
                    An email will be sent to you with instructions about how to <br />
                    complete the process. </p>

                <div className='s-75 m-50 lg-40 s-to-left m-to-center'>
                    <b>Email Address</b>
                    <input
                        type="text"
                        value={props.userEmail}
                        name="userEmail"
                        placeholder='write your email'
                    ></input>
                </div>
                <br></br>
                <div className='s-75 m-50 lg-40 s-to-left m-to-center'>
                    <a className="button big">Reset Password</a>
                </div>
            </form>
        </div>
    )
}
sendEmail.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    userEmail: PropTypes.string.isRequired,
}
export default sendEmail;