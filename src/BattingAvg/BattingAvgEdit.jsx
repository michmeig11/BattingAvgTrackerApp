import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environments';

const BattingAvgEdit =(props) => {
    const [editNOBP, setEditNOBP] = useState(props.batAvgToUpdate.nameOfBallPark);
    const [editDate, setEditDate] = useState(props.batAvgToUpdate.date);
    const [editLocation, setEditLocation] = useState(props.batAvgToUpdate.location);
    const [editNOG, setEditNOG] = useState(props.batAvgToUpdate.numberOfGames);
    const [editNOH, setEditNOH] = useState(props.batAvgToUpdate.numberOfHits);
    const [editNOAB, setEditNOAB] = useState(props.batAvgToUpdate.numberOfAtBats);
    const [editBA, setEditBA] = useState(props.batAvgToUpdate.battingAvg);

    const batAvgUpdate = (event, batAvg) => {
        event.preventDefault();
        fetch(`${APIURL}/log/${props.batAvgToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({nameOfBallPark: editNOBP, date: editDate, location: editLocation, numberOfGames: editNOG, numberedOfHits: editNOH, numberOfAtBats: setEditNOAB, battingAvg: setEditBA}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then ((res) => {
            props.fetchBattingAvg();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Log a Batting Average</ModalHeader>
            <ModalBody>
                <Form onSubmit={batAvgUpdate}>
                <FormGroup>
                <Label htmlFor ="NameofBallPark" />
                <Input type="text" name = "nameofballpark" value = {editNOBP} onChange={(e) => setEditNOBP(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="Date" />
                <Input type ="date" name="Date" value={editDate} onChange={(e) => setEditDate(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="Location"/>
                <Input type= "textarea" name = "location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="NumberofGames"/>
                <Input type="number" name = "numberofgames" value={editNOG} onChange={(e) => setEditNOG(e.target.value)}/>
            </FormGroup>
            
            <FormGroup>
                <Label htmlFor="NumberofHits"/>
                <Input type="number" name = "numberofhits" value={editNOH} onChange={(e) => setEditNOH(e.target.value)}/>
            </FormGroup>
            
            <FormGroup>
                <Label htmlFor="NumberofAtBats"/>
                <Input type="number" name = "numberofatbats" value={editNOAB} onChange={(e) => setEditNOAB(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="BattingAverage"/>
                <Input type="number" name = "battingavg" value={editBA} onChange={(e) => setEditBA(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
            </Form>
            </ModalBody>
        </Modal>
    )
}

export default BattingAvgEdit;  