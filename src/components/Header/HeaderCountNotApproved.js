import React, {  useState, useEffect  } from 'react';
import axios from 'axios';

function HeaderCountNotApproved(){
    const [countAll, setCountAll] = useState(0)

    async function fetchMyAPI() {
        const result = await axios(
            'http://localhost:1337/projects/count?project_status=2',
          );
          console.log(result.data)
          setCountAll(result.data)
    }

    useEffect( () => {
        fetchMyAPI();

    })

    return (
       <span>{countAll}</span>
    )

}

export default HeaderCountNotApproved;

