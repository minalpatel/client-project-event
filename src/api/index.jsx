import axios from './axios';

const BASE = ''; //Proxy server

/////////////Event page//////////////
//get all event
export const reqGetAllCompetitions = () => axios.get('http://localhost:5000/api/event');

//add event
export const reqAddCompetition = (competition) => axios.post(BASE + '/api/event', competition);

//update event
export const reqUpdateCompetition = (competition) => axios.put('http://localhost:5000/api/event', competition);

// delete event
export const reqDeleteCompetition = (competition) => axios.delete('http://localhost:5000/api/event', {data : competition} );


//******************SEARCH APIs ******************//
//search by event date
export const reqSearchbydate = ({ searchName}) => axios.get('http://localhost:5000/api/event/searchDate/'+ searchName );
//search by event location
export const reqSearchbyLocation = ({searchName}) => axios.get('http://localhost:5000/api/event/searchLocation/'+ searchName);
//search by event Title
export const reqSearchbyTitle = ({searchName}) => axios.get('http://localhost:5000/api/event/searchTitle/'+ searchName);

//****************** REview ********************//
//http://localhost:5000/api/review

//get all the review
export const reqGetAllReview = () => axios.get('http://localhost:5000/api/review');

//add review 
export const reqAddReview = (review) => axios.post('http://localhost:5000/api/review', review);

