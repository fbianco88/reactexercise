import React from "react";
import {movies} from "../constants"
import Table from "./Table"

function Movies (){
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <th>Title</th>
                            <th>Length</th>
                            <th>Rating</th>
                            <th>Gender</th>
                            <th>Awards</th>
                        </thead>    
                        <tbody>
                            {movies.map((movie,i) => <Table key= {movie + i} {...movie} />)} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Movies