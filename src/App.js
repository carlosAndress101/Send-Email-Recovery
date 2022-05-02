/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/styles.scss';
const App = () => {
  
  return (
    <div className=' ed-grid card'>
      <form>
        <h1 className='s-75 m-50 lg-40 s-to-left m-to-center'>Reset Your Password</h1>
        <p className='s-75 m-50 lg-40 s-to-left m-to-center'>To reset your password, enter your email below and submit. <br />
          An email will be sent to you with instructions about how to <br />
          complete the process. </p>

        <div className='s-75 m-50 lg-40 s-to-left m-to-center'>
          <b>Email Address</b>
          <input type="text"></input>
        </div>
        <br></br>
        <div className='s-75 m-50 lg-40 s-to-left m-to-center'>
          <a className="button big">Reset Password</a>
        </div>
      </form>
    </div>
  );
}

export default App;
//yarn add ed-grid edteam-style-guides sass
