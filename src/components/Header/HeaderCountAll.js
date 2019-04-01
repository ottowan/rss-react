import React, {  useState, useEffect  } from 'react';
import axios from 'axios';

function HeaderCountAll(){
    const [countAll, setCountAll] = useState(0)

    async function fetchMyAPI() {
        const result = await axios(
            'http://localhost:1337/projects/count',
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

