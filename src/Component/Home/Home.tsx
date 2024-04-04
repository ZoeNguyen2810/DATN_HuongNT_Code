import React from "react";
import "./Home.scss";
import {
    GithubOutlined,
    GitlabOutlined,
    Html5Outlined,
} from "@ant-design/icons";
import { ToolTip } from "./ToolTipHead/ToolTip";
import { Video } from "./Video/Video";
import { Button } from "antd";

export const Home = () => {
    return (
        <div className="home-container">
            <span className="icon-head">
                <GitlabOutlined className="icon" style={{ fontSize: 40 }} />
                <Html5Outlined
                    className="icon"
                    style={{ fontSize: 40, color: "#ffa116" }}
                />
                <GithubOutlined className="icon" style={{ fontSize: 40 }} />
                <span style={{ marginLeft: 10, fontSize: "40px" }}>Let's Code !</span>
                <span style={{ float: "right", marginRight: 10, marginTop: -10 }}>
                    <ToolTip />
                </span>
            </span>
            <div>
                <span style={{ display: "flex" }}>
                    <span>
                        <div
                            style={{
                                marginTop: 70,
                                width: 600,
                                fontFamily: "inherit",
                                fontSize: 50,
                                lineHeight: "inherit",
                                fontStyle: "inherit",
                                color: "#ffa116",
                                textTransform: "uppercase",
                                fontWeight: 600,
                            }}
                        >
                            Discover and develop the skills that will shape the future !
                        </div>
                        {/* font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 148%;
                        letter-spacing: -.01em; */}
                        <p style={{
                            fontStyle: 'normal', fontWeight: 400, fontSize: 20,
                            lineHeight: '148%', letterSpacing: '-.01em', color: '#1677ff', width: 600
                        }}>
                            Whether you want to level up your skills or build a great team,
                            CodeSignal’s skills assessments and AI-powered learning tools get
                            you where you need to go.
                        </p>
                        <span>
                            <Button style={{ marginRight: 10, marginLeft: 100, color: "#1677ff" }}>START HIRING</Button>
                            <Button type="primary">START LEARNING</Button>
                        </span>
                    </span>

                    <span>
                        <Video />
                    </span>
                </span>
            </div>
        </div>
    );
};
