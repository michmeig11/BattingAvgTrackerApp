import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import BattingAvgCreate from './BattingAvgCreate';
import BattingAvgTable from './BattingAvgTable';
import BattingAvgEdit from './BattingAvgEdit';

const BattingAvgIndex = (props) => {
    const [batavgs, setBatAvgs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [batAvgToUpdate, setBatAvgToUpdate] =useState ({});
    const editUpdateBatAvg = (batavg) => {
        setBatAvgToUpdate(batavg);
        console.log(batavg);
    }
    const updateOn= () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    } 

    const fetchBattingAvg = () => {
        fetch('http://localhost:3000/log', {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization' : props.token
        })
    })
    .then( (res) => res.json())
    .then((logData) => {
        console.log(logData)
        setBatAvgs(logData.bat)
    })
}

useEffect(() => {
    fetchBattingAvg();
}, [])

   return(
        <Container>
            <Row>
                <Col md='3'>
                    <BattingAvgCreate fetchBattingAvg={fetchBattingAvg} token={props.token}/>
                </Col>
                <Col md="9">
                    <BattingAvgTable batavgs ={batavgs} editUpdateBatAvg={setBatAvgToUpdate}
                    updateOn ={updateOn} fetchBattingAvg = {fetchBattingAvg} token = {props.token}/>
                </Col>
                {updateActive ? <BattingAvgEdit batAvgToUpdate ={batAvgToUpdate}
                updateOff ={updateOff} token={props.token} fetchBattingAvg={fetchBattingAvg}/> : <></>}
            </Row>
        </Container>
    )
}
export default BattingAvgIndex;