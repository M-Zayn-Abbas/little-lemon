import { useReducer } from 'react';
import Booking from './Booking';
import { useNavigate } from 'react-router-dom';


const Main = () => {

    const seedRandom = seed =>{

        var m = 2**35 -31;
        var a = 185852;
        var s = seed %m ;
        return function(){
            return (s = s *a %m)/ m;
        }

    }

    const fetchAPI= function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for(let i=17 ; i<=23 ; i++){
            if(random() < 0.5){
                result.push(i +' : 00');
            }
            if(random() > 0.5){
                result.push(i + ' : 30');
            }

        }
        return result;

    }

    const inititalState = {availableTimes : fetchAPI(new Date())};
    const[state,dispatch] = useReducer(updateTimes,inititalState);

    function updateTimes(state,date){
        return {availableTimes : fetchAPI(new Date())}
    }

    const submitAPI = formData => {
        return true;
    }

    const navigate = useNavigate();
    
    function SubmitForm(formData){
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
    }


    return (
        <main className='main'>
           <Booking availableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm}/>
        </main>
    )
}

export default Main;