
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm} from 'react-material-ui-form-validator';
import { loginDetails } from '../action/loginAction';
import { connect } from 'react-redux';
import styles from '../style/style.css';

class LoginTab extends React.Component {
 
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      fields: {},
      errors: {}
    };
 
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
    componentDidMount() {
        ValidatorForm.addValidationRule((value) => {
            if (value !== this.state.user.username && this.state.user.password ) {
                return false;
            }
            return true;
        });
    }
 
 
    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }
 
    componentDidUpdate(nextProps) {
      if(this.props.loginReducer && this.props.loginReducer.dataList 
        !== nextProps.loginReducer.dataList && this.props.loginReducer.dataListSuccess === true) {
        
    
      }
    }

    dismissError() {
      this.setState({ error: '' });
    }
     
        handleSubmit(evt) {
          evt.preventDefault();
          if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
          }
      
          if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
          }
          
    // return this.setState({ error: '' });
          let userinfo = {
            error: '' ,
            username: this.state.username,
            password: this.state.password
        };
          // console.log(userinfo);
       
      
          this.props.onsubmitlogindetails(userinfo);
          return this.setState({ error: '' });
        
     
      
        }

        handleUserChange(evt) {
          this.setState({
            username: evt.target.value,
          });
        };
      
        handlePassChange(evt) {
          this.setState({
            password: evt.target.value,
          });
        }
      
    
 
    render() {
        // const { user } = this.state;
 
        return (
          <div style={styles.login}>
          <form onSubmit={this.handleSubmit}>
               {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
              <div>
                     <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <div>
                <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
         </div>
         <div style={styles.button}>
                <Button className="button" 
                  onSubmit={() => this.handleSubmit()}
                type="submit">Submit</Button>
                </div>
    </form>
    </div>
        );
    }
  }

  function mapStateToProps(state) {
    return {
      loginReducer: state.loginReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onsubmitlogindetails: submitbasicDetails =>
        dispatch(loginDetails(submitbasicDetails)),
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginTab);


