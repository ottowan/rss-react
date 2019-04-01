
import React, {  useState, useEffect  } from 'react';
import axios from 'axios';
import { Table, Tag } from "rbx";




function Projects(){
    const [data, setData] = useState([])

    async function fetchMyAPI() {
        const result = await axios(
            `${process.env.REACT_APP_ROOT_API_URL}/projects`
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

                        {(() => {
                            switch (item.project_status) {
                            case 0: return  <Tag color='warning'> รออนุมัติ </Tag>;
                            case 1: return  <Tag color='primary'> อนุมติ </Tag>;
                            case 2:  return <Tag color='danger'> ไม่อนุมติ </Tag>;
                            default: return <Tag color='warning'> รออนุมัติ </Tag>;
                            }
                        })()}


                    </Table.Cell>
                    <Table.Cell> - </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    )

}

export default Projects;

