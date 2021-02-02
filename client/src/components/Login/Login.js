import React, {useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4} from 'uuid';

const Login = ({onIdSubmit}) => {

    const idRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }

    const createANewId = () => {
        onIdSubmit(uuidV4())
    }

    return (
        <div>
            <Container 
                className='align-ite,s-center d-flex'
                style={{height: '100vh'}}
            >
                <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group>
                        <Form.Label>Enter you Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required/>
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                    <Button onClick={createANewId} variant="secondary">Create a New Id</Button>
                </Form>
            </Container>           
        </div>
    )
}

export default Login;