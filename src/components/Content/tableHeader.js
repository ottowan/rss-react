import React, { Component } from 'react';

import "rbx/index.css";
import { Table } from "rbx";

class TableHeader extends Component {
    render() {
        return (
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
        )
    }

}

export default TableHeader;