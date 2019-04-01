
import React, {  useState, useEffect  } from 'react';
import axios from 'axios';
import { Table, Tag } from "rbx";




function ProjectsApproved(){
    const [data, setData] = useState([])

    async function fetchMyAPI() {
        const result = await axios(
            'http://localhost:1337/projects?project_status=0',
          );
          console.log(result.data)
          setData(result.data)
    }

    useEffect( () => {
        fetchMyAPI();

    }, [])

    return (
        <Table.Body >
            {data.map((item, index) => (
                <Table.Row key={item.id}>
                    <Table.Heading>{index+1}</Table.Heading>
                    <Table.Cell>
                        <a
                        href={item.name}
                        title={item.name}
                        >
                        {item.name}
                        </a>{' '}
                        <strong>(C)</strong>
                    </Table.Cell>
                    <Table.Cell>xxx</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>{item.created_at}</Table.Cell>
                    <Table.Cell>{item.requset_date}</Table.Cell>                    
                    <Table.Cell>
                        <Tag color='warning'> รอตรวจอนุมัติ </Tag> 
                    </Table.Cell>
                    <Table.Cell> - </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    )

}

export default ProjectsApproved;

