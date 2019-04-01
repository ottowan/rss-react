import React, { Component } from 'react';

import "rbx/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Section, Card, Column, Title, Control, Icon, Input, Table } from "rbx";

import {  Route, } from 'react-router-dom'

import Projects from '../../Handlers/Projects'
import ProjectsApproved from '../../Handlers/ProjectsApproved'
import ProjectsNotApproved from '../../Handlers/ProjectsNotApproved'
import ProjectsWaitApproved from '../../Handlers/ProjectsWaitApproved'

class Content extends Component {
    render() {
      return (


        <Section>

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
                        <Route exact path="/" component={Projects}/>
                        <Route exact path="/approves" component={ProjectsApproved}/>
                        <Route exact path="/notapproves" component={ProjectsNotApproved}/>
                        <Route exact path="/waitapproves" component={ProjectsWaitApproved}/>
                        <Route exact path="/document" component={Projects}/>
                    </Table>
                
                </Card.Content>
            </Card>
        </Section>
    );
}

}


  

export default Content;