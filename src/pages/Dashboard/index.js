import React from "react";
import { useContext, useEffect, useState } from "react";

import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { GoGoal } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { BiDish } from "react-icons/bi";
import Rating from "@mui/material/Rating";

const dataset = [
  {
    seoul: 70,
    month: "5",
  },
  {
    seoul: 28,
    month: "0",
  },
  {
    seoul: 41,
    month: "11",
  },
  {
    seoul: 73,
    month: "13",
  },
  {
    seoul: 99,
    month: "15",
  },
  {
    seoul: 144,
    month: "17",
  },
  {
    seoul: 319,
    month: "19",
  },
  {
    seoul: 249,
    month: "21",
  },
  {
    seoul: 131,
    month: "23",
  },
  {
    seoul: 55,
    month: "25",
  },
  {
    seoul: 48,
    month: "27",
  },
  {
    seoul: 25,
    month: "29",
  },
];

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  series: [{ dataKey: "seoul", valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="right-content w-100">
        <div className="dashboardBoxes d-flex align-items-center">
          <div className="dashboardBox">
            <span
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: `rgba(41,52,91,0.7)` }}
            >
              <FaCartArrowDown style={{ color: "#4b6adf" }} />
            </span>

            <span className="title d-block mt-2">Total Orders</span>

            <div className="d-flex align-items-center">
              <span className="count">75</span>
              <span className="ml-auto text-success">
                <IoMdArrowDropup /> 3%
              </span>
            </div>
          </div>

          <div className="dashboardBox">
            <span
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: `rgba(27,83,74,0.7)` }}
            >
              <MdShoppingBag style={{ color: "#00cc8c" }} />
            </span>

            <span className="title d-block mt-2">Total Delivered</span>

            <div className="d-flex align-items-center">
              <span className="count">70</span>
              <span className="ml-auto text-danger">
                <MdOutlineArrowDropDown /> 3%
              </span>
            </div>
          </div>

          <div className="dashboardBox">
            <span
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: `rgba(91,53,52,0.7)` }}
            >
              <MdShoppingBag style={{ color: "#e86762" }} />
            </span>

            <span className="title d-block mt-2">Total Canceled</span>

            <div className="d-flex align-items-center">
              <span className="count">05</span>
              <span className="ml-auto text-success">
                <IoMdArrowDropup /> 3%
              </span>
            </div>
          </div>

          <div className="dashboardBox">
            <span
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: `rgba(85,51,75,0.7)` }}
            >
              <GiProfit style={{ color: "#cd5a9f" }} />
            </span>

            <span className="title d-block mt-2">Total Revenue</span>

            <div className="d-flex align-items-center">
              <span className="count">$12k</span>
              <span className="ml-auto text-danger">
                <IoMdArrowDropup /> 3%
              </span>
            </div>
          </div>

          <div className="dashboardBox last d-flex align-items-center">
            <div className="info">
              <span className="title d-block">Net Profit</span>
              <span className="count d-block">$ 6759.25</span>
              <span className=" d-block text-danger">
                <IoMdArrowDropup /> 3%
              </span>
            </div>

            <CircularProgressbar
              value={70}
              text={`${70}%`}
              className="counterSpiner"
              styles={buildStyles({
                pathColor: `#778ffb`,
                textColor: "#fff",
                trailColor: "#2e3056",
              })}
            />
          </div>
        </div>

        <div className="dataBox d-flex">
          <div className="part1">
            <div className="card shadow border-0 p-3 mt-4">
              <h3 className="hd">Activity</h3>
              <div style={{ width: "100%" }}>
                <BarChart
                  dataset={dataset}
                  xAxis={[
                    {
                      scaleType: "band",
                      dataKey: "month",
                    },
                  ]}
                  {...chartSetting}
                />
              </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
              <h3 className="hd">Recent Orders</h3>

              <div className="table-responsive mt-3">
                <table className="table v-align">
                  <thead className="thead-dark">
                    <tr>
                      <th>Customer</th>
                      <th style={{ width: "300px" }}>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center productBox">
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                            </span>
                          </div>
                          <div className="info pl-3">
                            <h6>Wade warren</h6>
                          </div>
                        </div>
                      </td>
                      <td>1234567895 </td>
                      <td>$124.00</td>
                      <td>
                        <span className="badge badge-success">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center productBox">
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                            </span>
                          </div>
                          <div className="info pl-3">
                            <h6>jane cooper</h6>
                          </div>
                        </div>
                      </td>
                      <td>48965786 </td>
                      <td>$124.00</td>
                      <td>
                        <span className="badge badge-danger">canceled</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center productBox">
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                            </span>
                          </div>
                          <div className="info pl-3">
                            <h6>Guy Hawkin</h6>
                          </div>
                        </div>
                      </td>
                      <td>78958215 </td>
                      <td>$124.00</td>
                      <td>
                        <span className="badge badge-success">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center productBox">
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                            </span>
                          </div>
                          <div className="info pl-3">
                            <h6>kristen watson</h6>
                          </div>
                        </div>
                      </td>
                      <td>20965732 </td>
                      <td>$124.00</td>
                      <td>
                        <span className="badge badge-danger">canceled</span>
                      </td>
                    </tr>

            

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="part2">
            <div className="card shadow border-0 p-3 mt-4">
              <div className="d-flex align-items-center flex-column columnParent">
                <div className="column d-flex align-items-center w-100">
                  <div className="info d-flex align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                      style={{ background: `rgba(96,50,53,0.7)` }}
                    >
                      <GoGoal style={{ color: "#c87a64" }} />
                    </span>

                    <span>Goals</span>
                  </div>

                  <span className="arrow ml-auto d-flex align-items-center justify-content-center rounded-circle">
                    <FaAngleRight />
                  </span>
                </div>

                <div className="column d-flex align-items-center w-100">
                  <div className="info d-flex align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                      style={{ background: `rgba(43,48,112,0.7)` }}
                    >
                      <BiDish style={{ color: "#4c58a0" }} />
                    </span>

                    <span>Popular Dishes</span>
                  </div>

                  <span className="arrow ml-auto d-flex align-items-center justify-content-center rounded-circle">
                    <FaAngleRight />
                  </span>
                </div>

                <div className="column d-flex align-items-center w-100">
                  <div className="info d-flex align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                      style={{ background: `rgba(28,74,89,0.7)` }}
                    >
                      <BiDish style={{ color: "#357aa1" }} />
                    </span>

                    <span>Menus</span>
                  </div>

                  <span className="arrow ml-auto d-flex align-items-center justify-content-center rounded-circle">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 p-3">
              <h3 className="hd">Customer's Feedback</h3>

              <div className="reviewsWrapper">
                <div className="reviews mt-3">
                  <div className="d-flex align-items-center mb-2">
                    <div class="userImg mr-2">
                      <span class="rounded-circle">
                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                      </span>
                    </div>

                    <h6 className="mb-0">Jenny Wilson</h6>
                  </div>

                  <Rating name="read-only" value={4} readOnly size="small" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>

                <div className="reviews mt-3">
                  <div className="d-flex align-items-center mb-2">
                    <div class="userImg mr-2">
                      <span class="rounded-circle">
                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                      </span>
                    </div>

                    <h6 className="mb-0">Dianne Russel</h6>
                  </div>

                  <Rating name="read-only" value={5} readOnly size="small" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>

                <div className="reviews mt-3">
                  <div className="d-flex align-items-center mb-2">
                    <div class="userImg mr-2">
                      <span class="rounded-circle">
                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                      </span>
                    </div>

                    <h6 className="mb-0">Devon lane</h6>
                  </div>

                  <Rating name="read-only" value={4} readOnly size="small" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>

                <div className="reviews mt-3">
                  <div className="d-flex align-items-center mb-2">
                    <div class="userImg mr-2">
                      <span class="rounded-circle">
                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                      </span>
                    </div>

                    <h6 className="mb-0">Jenny Wilson</h6>
                  </div>

                  <Rating name="read-only" value={4} readOnly size="small" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
