import React from 'react';
import {Table, Button} from 'reactstrap';

const BattingAvgTable =(props) => {
    const deleteBatAvg =(batavg) => {
        fetch(`http://localhost:3000/log/${batavg.id}`, {
            method: 'Delete',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        })
        .then (() => props.fetchBattingAvg())
    }
    
    const battingAvgMapper = () => {
        return props.batavgs.map((Batavg, index) => {
        return(
        <tr key ={index}>
        <th scope ="row"></th>
        <td>{Batavg.nameOfBallPark}</td>
        <td>{Batavg.date}</td>
        <td>{Batavg.location}</td>
        <td>{Batavg.numberOfGames}</td>
        <td>{Batavg.numberOfHits}</td>
        <td>{Batavg.numberOfAtBats}</td>
        <td>{Batavg.battingAvg}</td>
        <td>
            <Button id="updatebutton" onClick={() =>{props.editUpdateBatAvg(Batavg); props.updateOn()}}>Update</Button>
            <Button id="deletebutton" onClick={()=>{deleteBatAvg(Batavg)}}>Delete</Button>
        </td>
        </tr>
        )      
    })
}
        
        return(
            <>
            <h3 id="bah3">Batting Average to date</h3>
        <hr/>
        <Table id="BAtable" striped>
            <thead>
                <tr>
                    <th></th>
                    <th>Name of Ball Park</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Number of Games</th>
                    <th>Number of Hits</th>
                    <th>Number of At Bats</th>
                    <th>Batting Average to Date</th>
                </tr>
            </thead>
            <tbody>
                {battingAvgMapper()}
            </tbody>
        </Table>
    </>
    )
}

export default BattingAvgTable;