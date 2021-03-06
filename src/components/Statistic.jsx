import React from "react";
import { Statistic as Stats, Row, Col, Button, Card, Skeleton } from "antd";
import { prettyPrintStats } from "../utils";

function Statistic({ countryInfo, isLoading, casesType, ...props }) {
    return (
        <Row gutter={[16, 16]}>
            <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                {isLoading ? (
                    <Card>
                        <Skeleton />
                    </Card>
                ) : (
                    <Card>
                        <Stats
                            title="Today Cases"
                            value={countryInfo.todayCases}
                        />
                        <h5>Total : {prettyPrintStats(countryInfo.cases)}</h5>
                        <Button
                            block
                            disabled={casesType === "cases"}
                            style={{ marginTop: 16 }}
                            type="danger"
                            onClick={e => props.setCasesType("cases")}
                        >
                            Details
                        </Button>
                    </Card>
                )}
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                {isLoading ? (
                    <Card>
                        <Skeleton />
                    </Card>
                ) : (
                    <Card>
                        <Stats
                            title="Today Recovered"
                            value={countryInfo.todayRecovered}
                            precision={2}
                        />
                        <h5>
                            Total : {prettyPrintStats(countryInfo.recovered)}
                        </h5>
                        <Button
                            block
                            disabled={casesType === "recovered"}
                            style={{ marginTop: 16 }}
                            type="primary"
                            onClick={e => props.setCasesType("recovered")}
                        >
                            Details
                        </Button>
                    </Card>
                )}
            </Col>
            <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                {isLoading ? (
                    <Card>
                        <Skeleton />
                    </Card>
                ) : (
                    <Card>
                        <Stats
                            title="Today Deaths"
                            value={countryInfo.todayDeaths}
                            precision={2}
                        />
                        <h5>Total : {prettyPrintStats(countryInfo.deaths)}</h5>
                        <Button
                            block
                            disabled={casesType === "deaths"}
                            style={{ marginTop: 16 }}
                            type="danger"
                            onClick={e => props.setCasesType("deaths")}
                        >
                            Details
                        </Button>
                    </Card>
                )}
            </Col>
        </Row>
    );
}

export default Statistic;
