import React, {  useState, useEffect  } from 'react';
import axios from 'axios';

function HeaderCountAll(){
    const [countAll, setCountAll] = useState(0)

    async function fetchMyAPI() {
        const result = await axios(
            `${process.env.REACT_APP_ROOT_API_URL}/projects/count`,
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

export default HeaderCountAll;

