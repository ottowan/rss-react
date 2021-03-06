import React, {  useState, useEffect  } from 'react';
import axios from 'axios';

function HeaderCountWaitApproved(){
    const [countAll, setCountAll] = useState(0)

    async function fetchMyAPI() {
        const result = await axios(
            `${process.env.REACT_APP_ROOT_API_URL}/projects/count?project_status=0`,
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

export default HeaderCountWaitApproved;

