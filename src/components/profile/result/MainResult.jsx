import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Result from './Result';
import ReactPaginate from 'react-paginate';
import './pagin.css';

const MainResult = () => {

    const [numberOfUsers, setNumberOfUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPage = 4;
    const pageVisited = pageNumber * usersPage;


    const allUsers = numberOfUsers
        .slice(pageVisited, pageVisited + usersPage)
        .map(m =>  <Result callb={m} key={m._id} setListOfUsers={setNumberOfUsers} listOfUsers={numberOfUsers} /> )
         
    useEffect(() => {
        axios.get('https://transt-api.herokuapp.com/read')
            .then((response) => {
                setNumberOfUsers(response.data.slice(0, 50))
            })
            .catch(() => console.log('Error here!'));
    }, []);



    const pageCount = Math.ceil(numberOfUsers.length / usersPage)
  
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className='container'>
            <div className="font-weight-bold text-center mt-2 h4">Осмотр Автотранспортных Средств</div><br />
           
            {allUsers}
            
            <ReactPaginate
                previousLabel={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                }
                nextLabel={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                }
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginBtn"}
                previousClassName={"previousBtn"}
                nextClassName={"nextBtn"}
                disabledClassName={"paginDisble"}
                activeClassName={"paginActive"}
            />


        </div>
    )
}

export default MainResult;

