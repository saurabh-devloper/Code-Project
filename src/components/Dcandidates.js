import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/dCandidate'
import DcandidatesForm from './DcandidatesForm';
import { Grid, Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles} from '@material-ui/core'

const styles = theme =>({
    root :{
        "& .MuiTableHead":{
            fontSize : "1.25rem"
        }
    },
    paper : {
        margin : theme.spacing(2),
        Padding : theme.spacing(2)
    }
})

//props.classes
// const [classes, ...props] = props 
const Dcandidates = ({classes,...props}) =>{

       useEffect(() => {
        props.fetchAllDCandidates()
       
    }, [])

    return (
        <Paper className={classes.paper}>
            <Grid container>
                <Grid item xs={6}>
                    <DcandidatesForm />
                </Grid>
                <Grid item xs={6}>
                    <div>List of Candidates</div>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.dCandidateList.map((record,index)=>{
                                        return (
                                            <TableRow key={index} hover>
                                                <TableCell> {record.id} </TableCell>
                                                <TableCell> {record.name} </TableCell>
                                                <TableCell> {record.email} </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
  
        dCandidateList : state.dCandidate.list
  
})

const mapActionToProps = {
    fetchAllDCandidates : actions.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Dcandidates));
