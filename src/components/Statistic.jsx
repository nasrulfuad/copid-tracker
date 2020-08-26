import React from "react";
import { Statistic as Stats, Row, Col, Button, Card } from "antd";
import { prettyPrintStats } from "../utils";

function Statistic({ countryInfo }) {
    return (
        <Row gutter={[16, 16]}>
            <Col span={8}>
                <Card>
                    <Stats title="Cases" value={countryInfo.todayCases} />
                    <h5>Total : {prettyPrintStats(countryInfo.cases)}</h5>
                    <Button style={{ marginTop: 16 }} type="danger">
                        Details
                    </Button>
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Stats
                        title="Recovered"
                        value={countryInfo.todayRecovered}
                        precision={2}
                    />
                    <h5>Total : {prettyPrintStats(countryInfo.recovered)}</h5>
                    <Button style={{ marginTop: 16 }} type="primary">
                        Details
                    </Button>
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Stats
                        title="Deaths"
                        value={countryInfo.todayDeaths}
                        precision={2}
                    />
                    <h5>Total : {prettyPrintStats(countryInfo.deaths)}</h5>
                    <Button style={{ marginTop: 16 }} type="danger">
                        Details
                    </Button>
                </Card>
            </Col>
        </Row>
    );
}

export default Statistic;
