import React from 'react'
import {Formik} from 'formik'
import {
    Form
} from 'reactstrap';

import Services from '../Servics'
// import userImage from '../assets/images/logo512.png'
import userImage from '../assets/images/woman.jpg'


const initialValues = {
    username: "",
    userdescription: ""
};


const Contents = props => {
    
    
    const onSubmit = async(values, {setSubmitting, setErrors}) => {
        Services.UserInfoService.create(values)
            .then(res => {
                if(res.success){
                    props.history.replace('/userinfo/all')
                } else{
                    setErrors({state: res.errorMsg});
                }
            }) ;
        setSubmitting(false) 
    }
    
    return (
        <>
            <div id="contents">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <img src={userImage} id="userImage" />
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div>
                            {/* <Formik 
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                render={
                                    ({
                                        values,
                                         errors,
                                         touched,
                                         status,
                                         dirty,
                                         handleChange,
                                         handleBlur,
                                         handleSubmit,
                                         isSubmitting,
                                         isValid,
                                    }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <input 
                                                type="text" 
                                                name="username"
                                                value={values.username}
                                                className="form-control" 
                                                placeholder="Enter your name..." 
                                                id="userNameInput" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <input 
                                                type="text" 
                                                name="userdescription"
                                                value={values.userdescription} 
                                                className="form-control" 
                                                id="userDescriptiton" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <button className="btn btn-success" type="submit"  id="btnSubmit" disabled={isSubmitting}>{isSubmitting? 'Waiting...': 'Submit'}</button>
                                        </Form>
                                    )
                                }
                                ></Formik> */}
                                <h1> keerthi</h1>
                                <p>I am a computer science student.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contents;