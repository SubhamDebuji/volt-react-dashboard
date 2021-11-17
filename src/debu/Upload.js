import React from 'react'
import Form from 'react-bootstrap/Form'
import firebase from '../pages/examples/firebase-config'


const Upload = () => {
    const [medName, setMedName] = useState();
    const [days, setDays] = useState({});
    const [time, setTime] = useState()
    // const ref=firebase.firestore.collection
    const updateData = (e) => {
        e.preventDefault();
        firebase.firestore.collection("Medicines").doc("user1").collection(`${medName}`).doc(`${days}`).update({
        //JSON Object
        });
      
        setUpdatedCustomerPassword("");
        setUpdatedCustomerName("");
        setDataIdToBeUpdated("");
      };

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name of the Medicine</Form.Label>
                    <Form.Control placeholder="Enter Medicine" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Days you need to take the Medicine</Form.Label>
                    {/* <Form.Control type="" placeholder="Password" /> */}
                    <div key={`inline-checkbox`} className="mb-3">
                        <Form.Check
                            inline
                            label="Mon"
                            name="group1"
                            type="checkbox"
                            onChange={handleDay}
                            id={`inline-checkbox-1`}
                        />
                        <Form.Check
                            inline
                            label="Tues"
                            name="group1"
                            type="checkbox"
                            onChange={handleDay}
                            id={`inline-checkbox-2`}
                        />
                        <Form.Check
                            inline
                            label="Wed"
                            type="checkbox"
                            onChange={handleDay}
                            id={`inline-checkbox-3`}
                        />
                        {/* <Form.Check
                            inline
                            label="All Days"
                            name="group1"
                            type="checkbox"
                            onChange={handleDay}
                            id={`inline-checkbox-2`}
                        /> */}
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Times of the day</Form.Label>
                    {/* <Form.Control type="" placeholder="Password" /> */}
                    <div key={`inline-checkbox`} className="mb-3">
                        <Form.Check
                            inline
                            label="9:00 AM"
                            name="group1"
                            type="checkbox"
                            onChange={handleTime}
                            id={`inline-checkbox-1`}
                        />
                        <Form.Check
                            inline
                            label="1:00 PM"
                            name="group1"
                            type="checkbox"
                            onChange={handleTime}
                            id={`inline-checkbox-2`}
                        />
                        <Form.Check
                            inline
                            label="8:00 PM"
                            type="checkbox"
                            onChange={handleTime}
                            id={`inline-checkbox-3`}
                        />
                        {/* <Form.Check
                            inline
                            label="All Days"
                            name="group1"
                            type="checkbox"
                            onChange={handleDay}
                            id={`inline-checkbox-2`}
                        /> */}
                    </div>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Upload
