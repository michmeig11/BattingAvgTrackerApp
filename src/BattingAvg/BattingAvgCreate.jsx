import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environments';


const BattingAvgCreate = (props) => {
    const [nameOfBallPark, SetNameOfBallPark] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [numberOfGames, SetNumberOfGames] = useState('');
    const [numberOfHits, setNumberOfHits] = useState('');
    const [numberOfAtBats, setNumberOfAtBats] = useState('');
    const [battingAvg, setBattingAvg] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        fetch(`${APIURL}/log/`, {
        method: 'POST',
        body: JSON.stringify ({nameOfBallPark: nameOfBallPark, date: date, location: location, numberOfGames: numberOfGames, numberOfHits: numberOfHits, numberOfAtBats: numberOfAtBats, battingAvg: battingAvg}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization' : props.token
        })
    })
    .then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        SetNameOfBallPark ('');
        setDate ('');
        setLocation ('');
        SetNumberOfGames ('');
        setNumberOfHits ('');
        setNumberOfAtBats ('');
        setBattingAvg ('');
        props.fetchBattingAvg();
    })
}

useEffect(() => {
    console.log(props.token);
}, []) 

    return (
        <>
        <h3 id="deth3">Details</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor ="NameofBallPark" />
                <Input type="text" name = "nameofballpark" value = {nameOfBallPark} onChange={(e) => SetNameOfBallPark(e.target.value)} placeholder="Name of Ball Park"/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="Date" />
                <Input type ="date" name="Date" value={date} onChange={(e) => setDate(e.target.value)} >
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="Location"/>
                <Input type= "textarea" name = "location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City/Location"/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="NumberofGames"/>
                <Input type="number" name = "numberofgames" value={numberOfGames} onChange={(e) => SetNumberOfGames(e.target.value)} placeholder="Number of Games played"/>
            </FormGroup>
            
            <FormGroup>
                <Label htmlFor="NumberofHits"/>
                <Input type="number" name = "numberofhits" value={numberOfHits} onChange={(e) => setNumberOfHits(e.target.value)} placeholder="Number of Hits"/>
            </FormGroup>
            
            <FormGroup>
                <Label htmlFor="NumberofAtBats"/>
                <Input type="number" name = "numberofatbats" value={numberOfAtBats} onChange={(e) => setNumberOfAtBats(e.target.value)} placeholder="Number of Times at Bats"/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="BattingAverage"/>
                <Input type="number" name = "battingavg" value={battingAvg} onChange={(e) => setBattingAvg(e.target.value)} placeholder="Batting Avg"/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
        </Form>
        </>
    )
}

export default BattingAvgCreate;


