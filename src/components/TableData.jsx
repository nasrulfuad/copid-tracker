import React from "react";
import { Card, List, Avatar } from "antd";
import "../styles/TableData.css";

function TableData({ countries }) {
    return (
        <Card title="Live by country">
            <div className="tableData">
                <List
                    itemLayout="horizontal"
                    dataSource={countries}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.countryInfo.flag} />}
                                title={item.country}
                            />
                            <div>{item.cases}</div>
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    );
}

export default TableData;
