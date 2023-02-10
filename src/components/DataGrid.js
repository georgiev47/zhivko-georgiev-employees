import React from 'react'
import '../index.css'
import { ID_EMPLOYEE_1, ID_EMPLOYEE_2, PROJECT_ID, DAYS_WORKED } from '../helpers/constants'

function DataGrid({ bestPair }) {
  return (
    <div className='data-container'>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>{ID_EMPLOYEE_1}</th>
                    <th>{ID_EMPLOYEE_2}</th>
                    <th>{PROJECT_ID}</th>
                    <th>{DAYS_WORKED}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{bestPair?.empId1 || '-'}</td>
                    <td>{bestPair?.empId2 || '-'}</td>
                    <td>{bestPair?.projectID || '-'}</td>
                    <td>{bestPair?.days || '-'}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
  )
}

export default DataGrid