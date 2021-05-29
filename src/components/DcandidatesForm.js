import { TextField, Grid, withStyles, Button } from '@material-ui/core';
import React,{useState} from 'react';
import useForm from './useForm';


const initialFieldValues = {
    Name :'',
    Email : '',
    AadharCard :'',
    Mobile :''
}



const styles = theme =>({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          minWidth: 230
        },
      },
      smMargin : {
        margin: theme.spacing(1),
        minWidth: 230
      }
})

const DcandidatesForm = ({classes, ...props}) =>{
   
    const validate = (fieldValues=values) =>{
        let temp ={}
        if('Name' in fieldValues)
        temp.Name = fieldValues.Name ? "" : "This field is required."

        if('Email' in fieldValues)
        //temp.Email = (/^$\.+@.+..+/).test(fieldValues.Email) ? "" : "Email is not valid"
        temp.Email = fieldValues.Email ? "" : "Email field is required."
        
        if('Mobile' in fieldValues)
        temp.Mobile = fieldValues.Mobile ? "" : "Mobile fieldis required."

        if('AadharCard' in fieldValues)
        temp.AadharCard = fieldValues.AadharCard ? "" : "AadharCard fieldis required."

        setErrors({
            ...temp
        })
    
    if(fieldValues == values)
        return Object.values(temp).every(x=>x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues,validate)

    const handleSubmit = e =>{
        debugger;
        e.preventDefault()
        if(validate()){
            window.alert('validation succeeded')
        }
        console.log(values)
    }

    return (
       <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
           <Grid container>
                <Grid item xs={6}>
                <TextField  id="standard-basic" {...(errors.Name && {error : true, helperText:errors.Name})}
                onChange={handleInputChange} value={values.Name} name="Name" label="Name"  />

                <TextField  id="standard-basic" {...(errors.Email && {error : true, helperText:errors.Email})}
                    onChange={handleInputChange} value={values.Email} name="Email" label="Email" />
                {/* <div>
                    <Button className={classes.smMargin} type="Submit" variant="contained" color="primary">Submit</Button>
                </div> 
                <div>
                    <Button className={classes.smMargin} variant="contained" color="secondary">Reset</Button>
                </div> */}
                </Grid>  
                <Grid item xs={6}>
                <TextField  id="standard-basic" {...(errors.Mobile && {error : true, helperText:errors.Mobile})}
                onChange={handleInputChange} value={values.Mobile} name="Mobile" label="Mobile"  />

                <TextField  id="standard-basic" {...(errors.AadharCard && {error : true, helperText:errors.AadharCard})}
                    onChange={handleInputChange} value={values.AadharCard} name="AadharCard" label="Aadhar Card" />
                <div>
                    <Button className={classes.smMargin} type="Submit" variant="contained" color="primary">Submit</Button>
                </div> 
                <div>
                    <Button className={classes.smMargin} variant="contained" color="secondary">Reset</Button>
                </div>
                </Grid>                    
           </Grid>
       </form>
    );
}

export default withStyles(styles)(DcandidatesForm);