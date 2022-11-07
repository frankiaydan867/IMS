
import { Component } from 'react'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'




const Table = () => {

    // const $ = require('jquery')
    // $.DataTable = require('datatables.net')


  return (
    <>
            <div className="container-fluid p-3">
            <table className="table table-bordered table-stiped display">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Config #</th>
                  <th>Host Name</th>                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>A012345</td>
                  <td>Franki - Mac Mini</td>
                </tr>
              </tbody>
            </table>
            </div>
    </>
  )
}

export default Table
