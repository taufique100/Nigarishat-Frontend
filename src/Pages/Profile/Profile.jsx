import React, { useState } from 'react'
import profileImage from '../../assets/profile.png'
import './Profile.css'
import { Button, Form } from 'react-bootstrap'

export default function Profile() {

    const [isEditable, setIsEditable] = useState(true)
    const handleEditProfile = () => {
        setIsEditable(prev => !prev)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsEditable(prev => !prev)
    }
    return (
        <>
            <div className="profile_container">
                <div className='d-flex align-items-center justify-content-between gap-3 flex-wrap'>
                    <div className="profile_header d-flex align-items-center gap-3">
                        <div>
                            <img src={profileImage} alt="profileImage" />
                        </div>
                        <div>
                            <h1>Abdur Rahman Qasmi</h1>
                            <p>alexarawles@gmail.com</p>
                        </div>
                    </div>
                    <Button onClick={handleEditProfile}>{isEditable ? 'Edit' : 'Cancel'}</Button>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='d-flex form_input jusfify-content-between align-items-center gap-3 mt-3'>
                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                type="text"
                                placeholder="Enter Full Name"
                                disabled={isEditable} />
                        </Form.Group>

                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicPassword">
                            <Form.Label>Gender</Form.Label>
                            <div className="mb-3">
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="gender"
                                    disabled={isEditable}
                                    type={'radio'}
                                    id={`Male`}
                                />
                                <Form.Check
                                    inline
                                    name='gender'
                                    disabled={isEditable}
                                    label="Female"
                                    type={'radio'}
                                    id={`Female`}
                                />
                            </div>
                        </Form.Group>
                    </div>
                    <div className='d-flex form_input jusfify-content-between align-items-center gap-3'>
                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicEmail">
                            <Form.Label>Number</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                type="text"
                                placeholder="Enter Number"
                                disabled={isEditable} />
                        </Form.Group>

                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicPassword">
                            <Form.Label>Country Name</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                type="text"
                                placeholder="Enter Country Name"
                                disabled={isEditable} />
                        </Form.Group>
                    </div>
                    <div className='d-flex form_input jusfify-content-between align-items-center gap-3'>
                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicEmail">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                type="text"
                                placeholder="Enter State"
                                disabled={isEditable} />
                        </Form.Group>

                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicPassword">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                type="text"
                                placeholder="Enter City Name"
                                disabled={isEditable} />
                        </Form.Group>
                    </div>
                    <div className='d-flex form_input jusfify-content-between align-items-start gap-3'>
                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicEmail">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                as="textarea"
                                rows={3}
                                placeholder="Enter Street Address"
                                disabled={isEditable} />
                        </Form.Group>

                        <Form.Group className="mb-2 flex-grow-1" controlId="formBasicPassword">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                className={`${!isEditable && 'bg-white'}`}
                                type="text"
                                placeholder="Enter City Name"
                                disabled={isEditable} />
                        </Form.Group>
                    </div>
                    {!isEditable && <div className='d-flex align-items-center justify-content-center my-3'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>}
                </Form>
            </div>
        </>
    )
}
