import React from "react";
// import Analytics from "./Analytics";
import {
  FaBeer,
  FaBook,
  FaHamburger,
  FaHome,
  FaThumbsDown,
} from "react-icons/fa";
import Analytics from "./Analytics";
import { PieChart } from "@mui/x-charts";

const AttendanceDashboard = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full">
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      Monday <br /> 21/7/23
                    </th>
                    <th>
                      Tuesday <br />
                      22/7/23
                    </th>
                    <th>
                      Wednesday <br /> 23/7/23
                    </th>
                    <th>
                      {" "}
                      Thursday <br />
                      24/7/23{" "}
                    </th>
                    <th>
                      {" "}
                      Friday <br />
                      25/7/23{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="">
                    <td className="flex items-center gap-4">
                      <span> FN</span>{" "}
                      <button class="btn btn-success rounded-none"></button>
                    </td>
                    <td>
                      <button class="btn btn-success rounded-none"></button>
                    </td>
                    <td>
                      <button class="btn btn-success rounded-none"></button>
                    </td>
                    <td>
                      <button class="btn btn-success rounded-none"></button>
                    </td>

                    <td>
                      {" "}
                      <button class="btn bg-red-600 rounded-none"></button>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td className="flex items-center gap-4">
                      <span> FN</span>{" "}
                      <button class="btn bg-red-600 rounded-none"></button>
                    </td>
                    <td>
                      {" "}
                      <button class="btn btn-success rounded-none"></button>
                    </td>
                    <td>
                      {" "}
                      <button class="btn btn-success rounded-none"></button>
                    </td>
                    <td>
                      {" "}
                      <button class="btn bg-red-600 rounded-none"></button>
                    </td>
                    <td>
                      {" "}
                      <button class="btn bg-red-600 rounded-none"></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="grid grid-cols-2 mt-12  gap-8  bg-gray-200">
                <div>
                  <div className="  font-bold mb-4 w-full">
                    <h1>Homeworks</h1>
                  </div>

                  <div>
                    <div className=" grid grid-cols-2 my-4 font-semibold">
                      <p className="mb-2"> ENGLISH SOCIAL</p>
                      <p>SOCIAL</p>
                      <p>SCIENCE TAMIL</p>
                      <p className="mb-2">TAMIL</p>
                      <p>MATHS</p>
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  {" "}
                  <div className="">
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 70, label: "GOOD" },
                            { id: 1, value: 40, label: "BAD" },
                          ],
                        },
                      ]}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu font-semibold text-lg p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>
                {" "}
                <FaHome />
                Summary Dashboard
              </a>
            </li>
            <li>
              <a>
                {" "}
                <FaHamburger /> Attendance Tracking
              </a>
            </li>
            <li>
              <a> Behavioral Analytics</a>
            </li>
            <li>
              <a>
                {" "}
                <FaBook /> Academic Performance Tracking
              </a>
            </li>
          </ul>
        </div>
        <label
          htmlFor="my-drawer"
          className="btn text-3xl btn-primary drawer-button"
        >
          <FaHamburger />
        </label>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
