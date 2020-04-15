// import React from 'react'
// import { Field, reduxForm } from 'react-redux-form'

// const onSubmit =(values) =>{
//     alert(JSON.stringify(values));
// }
// const required =(value) =>{
//     const errors={}
//     if(!value){
//         errors="invalid username"
//     }
//     return errors
// }
// const renderfield=({input,meta : {error}}) =>(
// <div>
//     <input {...input} type="text" />   
//     {error}
//     </div>)

// const Simplefrom =(props) =>{
//     const {handleSubmit,pristine,submitting,reset} = props
//     return(
      
//             <form onSubmit={handleSubmit}>
//                   <div>
//             <Field name="username" type="text" component={renderfield} placeholder="text"
//             validate={required}/>
//             <button type="submit" disabled={submitting}>submit</button>
//             <button type="button"  disabled ={pristine||submitting} onClick={reset}>reset</button>
//             </div>
//             </form>
        
//     );
// };
// export default reduxForm({
//       form:' Simplefrom' 
//     //   onSubmit
//     })(Simplefrom);


// import React from 'react'
// import { Field, reduxForm } from 'react-redux-form'

// const onSubmit =(values) =>
// {alert(JSON.stringify(values))}

// const required = value => value ? undefined : 'Required'
// const maxLength =  value =>
//    value.length > 15 ? `Must be 15 characters or less` : undefined
// // const maxLength15 = maxLength(15)

// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)

// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

// const FieldLevelValidationForm = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field name="username" type="text"
//         component={renderField} label="Username"
//         validate={[ required, maxLength ]}
//       />
//       <Field name="email" type="email"
//         component={renderField} label="Email"
//         validate={email}
//         warn={aol}
//       />
//       <Field name="age" type="number"
//         component={renderField} label="Age"
//         validate={[ required, number, minValue18 ]}
//         warn={tooOld}
//       />
//       <div>
//         <button type="submit" disabled={pristine || submitting} >Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({
//   form: 'fieldLevelValidation' ,// a unique identifier for this form
//   onSubmit
// })(FieldLevelValidationForm)

// import React from 'react';
// import { Field, reduxForm } from 'redux-form';
// const onSubmit =(v) =>{
// alert(JSON.stringify(v));
// }
// //const required=  value => value.length > 15 ? `Must be 15 characters or less` : undefined
// const required =(values) =>{
//     if (!values.username) {
//         'Required'
//       } else if (values.username.length > 15) {
//         'Must be 15 characters or less'
//       }

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//       <div>
//         <label>{label}</label>
//         <div>
//           <input {...input} placeholder={label} type={type}/>
//           {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//         </div>
//       </div>
//     )
// const Simpleform = props => {
//   const { handleSubmit, pristine, reset, submitting } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>First Name</label>
//         <div>
//         <Field name="username" type="text"
//         component={renderField} label="Username"
//         validate={required}
//       />
//         </div>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   );
// };

// export default reduxForm({
//   form: 'simple', 
//   onSubmit
// })(Simpleform);

import React from 'react'
import { Field, reduxForm } from 'redux-form'

const onSubmit =(values) =>
{alert(JSON.stringify(values))}

const required = value => value ? undefined : 'Required'
const maxLength =  value =>
   value.length > 15 ? `Must be 15 characters or less` : undefined
// // const maxLength15 = maxLength(15)

// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)

// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const Simplefrom = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        component={renderField} label="Username"
        validate={[ required, maxLength ]}
      />
      {/* <Field name="email" type="email"
        component={renderField} label="Email"
        validate={email}
        warn={aol}
      />
      <Field name="age" type="number"
        component={renderField} label="Age"
        validate={[ required, number, minValue18 ]}
        warn={tooOld}
      /> */}
      <div>
        <button type="submit" disabled={pristine || submitting} >Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' ,// a unique identifier for this form
  onSubmit
})(Simplefrom)