import api from "./api"

export const ACTION_TYPE ={
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

export const fetchAll = () => dispatch =>{
api.dCandidate().fetchAll()
.then(response=>{
    console.log(response)
    dispatch({
        type : ACTION_TYPE.FETCH_ALL,
        payload : response.data
    })
})
.catch(error=>{console.log(error)})    
}
