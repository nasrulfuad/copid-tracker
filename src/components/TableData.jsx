import React from "react";
import { Card, List, Avatar, Skeleton } from "antd";
import "../styles/TableData.css";

function TableData({ countries, isLoading }) {
    return (
        <Card title="Live by country">
            <div className="tableData">
                {isLoading ? (
                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={[1, 2, 3]}
                        renderItem={item => <Skeleton active avatar />}
                    />
                ) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={countries}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={item.countryInfo.flag} />
                                    }
                                    title={item.country}
                                />
                                <div>{item.cases}</div>
                            </List.Item>
                        )}
                    />
                )}
            </div>
        </Card>
    );
}

export default TableData;
