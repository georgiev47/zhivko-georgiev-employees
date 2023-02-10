import React, { useEffect, useState } from 'react'
import csvToJson from '../helpers/csvToJson'
import setToDateTime from '../helpers/setToDateTime'
import calculateOverlap from '../helpers/calculateOverlap'

function LoadFile({ setBestPair }) {
    const [data, setData] = useState([]);

    function readFile(e) {
        const file = e.target.files[0]; // TODO: Validate that only one file is used
        const reader = new FileReader();
        let dataFromFile = [];

        reader.readAsText(file);

        reader.onload = function() {
            dataFromFile = reader.result;
            setData(csvToJson(dataFromFile));
        };
    }

    function findBestPair(input) {
        if(input.length === 0) return null;
        
        let bestPair = null;
        let maxOverlap = 0;

        for(let i = 0; i < input.length; i++) {
            let emp1 = input[i];

            for(let k = i + 1; k < input.length; k++) {
                let emp2 = input[k];
                
                if(emp1['ProjectID'] === emp2['ProjectID']) {
                    const dateFrom1 = setToDateTime(emp1['DateFrom']);
                    const dateTo1 = setToDateTime(emp1['DateTo']);

                    const dateFrom2 = setToDateTime(emp2['DateFrom']);
                    const dateTo2 = setToDateTime(emp2['DateTo']);

                    const overlap = calculateOverlap(dateFrom1, dateTo1, dateFrom2, dateTo2);
                    
                    if(overlap > maxOverlap) {
                        maxOverlap = overlap;
                        bestPair = {
                            empId1: emp1['EmpID'],
                            empId2: emp2['EmpID'],
                            projectID: emp1['ProjectID'],
                            days: overlap
                        };
                    }
                }
            }
        }

        return bestPair;
    }

    useEffect(() => {
        const best = findBestPair(data);
        setBestPair(best);
    }, [data, setBestPair])

    return (
        <div className='load-file'>
            Please choose a file <input type='file' accept='.csv' onChange={(e) => readFile(e)} />
        </div>
    )
}

export default LoadFile