import React, { Component } from 'react';

import "rbx/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Section, Card, Column, Title, Control, Icon, Input, Table } from "rbx";


import ConnectDB from '../../models/ConnectDB'
import {  Route, } from 'react-router-dom'

class Content extends Component {
    render() {
      return (

        

        <Section>
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/requests" component={About}/>
            <Route exact path="/approves" component={Topics}/>
            <Route exact path="/document" component={Topics}/>
            <Card>
                <Card.Content>
                    <Column.Group>
                        <Column size="9">
                            <Title size="5">
                                รายการคำขอครุภัณฑ์
                            </Title>
                            <Title subtitle  size="6">หน่วยงาน : ศาลจังหวัดธัญบุรี</Title>
                        </Column>
                        <Column size="3">
                            <Title subtitle  size="6">

                            <Control iconLeft iconRight>
                                <Input type="text" placeholder="ค้นหา" />
                                <Icon align="left">
                                <FontAwesomeIcon icon={faSearch} />
                                </Icon>
                            </Control>
                            
                            </Title>
                        </Column>
                    </Column.Group>

                    <Table fullwidth narrow>
                        <Table.Head>
                            <Table.Row>
                                <Table.Heading>
                                    <abbr title="Position">ลำดับ</abbr>
                                </Table.Heading>
                                <Table.Heading>รายการคำขอ</Table.Heading>
                                <Table.Heading>
                                    <abbr title="Played">จำนวน</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Won">ความสำคัญ</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Drawn">วันที่ขอ</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Lost">วันที่ต้องการใช้</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Points">ผลการอนุมัติ</abbr>
                                </Table.Heading>
                                <Table.Heading>หมายเหตุ</Table.Heading>
                            </Table.Row>
                        </Table.Head>
                        <Table.Foot>
                            <Table.Row>
                                <Table.Heading>
                                    <abbr title="Position">ลำดับ</abbr>
                                </Table.Heading>
                                <Table.Heading>รายการคำขอ</Table.Heading>
                                <Table.Heading>
                                    <abbr title="Played">จำนวน</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Won">ความสำคัญ</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Drawn">วันที่ขอ</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Lost">วันที่ต้องการใช้</abbr>
                                </Table.Heading>
                                <Table.Heading>
                                    <abbr title="Points">ผลการอนุมัติ</abbr>
                                </Table.Heading>
                                <Table.Heading>หมายเหตุ</Table.Heading>
                            </Table.Row>
                        </Table.Foot>
                        <Table.Body>
                            <Table.Row>
                            <Table.Heading>1</Table.Heading>
                            <Table.Cell>
                                <a
                                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                                title="Leicester City F.C."
                                >
                                โครงการ
                                </a>{' '}
                                <strong>(C)</strong>
                            </Table.Cell>
                            <Table.Cell>38</Table.Cell>
                            <Table.Cell>23</Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>68</Table.Cell>
                            <Table.Cell>
                                Qualification for the{' '}
                                <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                                title="2016–17 UEFA Champions League"
                                >
                                Champions League group stage
                                </a>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Heading>2</Table.Heading>
                            <Table.Cell>
                                <a
                                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                                title="Leicester City F.C."
                                >
                                Leicester City
                                </a>{' '}
                                <strong>(C)</strong>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>68</Table.Cell>
                            <Table.Cell>36</Table.Cell>
                            <Table.Cell>+32</Table.Cell>
                            <Table.Cell>81</Table.Cell>
                            <Table.Cell>
                                Qualification for the{' '}
                                <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                                title="2016–17 UEFA Champions League"
                                >
                                Champions League group stage
                                </a>
                            </Table.Cell>
                            </Table.Row>                   
                            <Table.Row selected>
                            <Table.Heading>3</Table.Heading>
                            <Table.Cell>
                                <a
                                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                                title="Leicester City F.C."
                                >
                                Leicester City
                                </a>{' '}
                                <strong>(C)</strong>
                            </Table.Cell>
                            <Table.Cell>38</Table.Cell>
                            <Table.Cell>23</Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>+32</Table.Cell>
                            <Table.Cell>81</Table.Cell>
                            <Table.Cell>
                                Qualification for the{' '}
                                <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                                title="2016–17 UEFA Champions League"
                                >
                                Champions League group stage
                                </a>
                            </Table.Cell>
                            </Table.Row>                    
                        </Table.Body>
                    </Table>
                
                </Card.Content>
            </Card>
        </Section>
    );
}

}


  
const Home = () => (
    <div>
      <h2>Home</h2>
      <ConnectDB/>
    </div>
  )
  
  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )
  const Topics= () => (
    <div>
      <h2>Topics</h2>
    </div>
  )
  

export default Content;