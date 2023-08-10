// TableWithRadio.jsx
import React, { useState } from "react";
import CustomRadio from "../CustomIcon/CustomRadio";
import "./Table.styles.css";
import useWindowWidth from "../../utils/useWindowWidth";

const TableWithRadio = ({ columns, data, tableTitle, tintColor }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const isLayout1 = columns.length > 3;

  return (
    <>
      {isMobile && isLayout1 ? (
        <table className={`table layout-1}`}>
          <thead>
            <tr>
              <th style={{ width: isMobile ? "24px" : "32px" }}></th>{" "}
              <th className={"row-header"}>
                {/* Empty header for radio buttons */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className="row-header-text">
                    {tableTitle ? tableTitle : columns[0].label}
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => setSelectedRow(rowIndex)}
                style={{
                  backgroundColor:
                    selectedRow === rowIndex ? tintColor + "25" : "transparent",
                }} // Highlight selected row
              >
                <td>
                  <CustomRadio
                    checked={selectedRow === rowIndex}
                    tintColor={tintColor}
                  />
                </td>
                <td>
                  <div className="row-container">
                    {columns.map((column, colIndex) => (
                      <div className="row-item">
                        <div>
                          <strong>
                            <p className="row-title">{column.label}:</p>
                          </strong>
                        </div>
                        <div>
                          <p className="row-text">
                            {column.render
                              ? column.render(row)
                              : row[column.field]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className={`table`}>
          <thead>
            <tr>
              <th style={{ width: "32px" }}></th>{" "}
              {/* Empty header for radio buttons */}
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => setSelectedRow(rowIndex)}
                style={{
                  backgroundColor:
                    selectedRow === rowIndex ? tintColor + "25" : "transparent",
                }} // Highlight selected row
              >
                <td>
                  <CustomRadio
                    checked={selectedRow === rowIndex}
                    tintColor={tintColor}
                  />
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column.field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableWithRadio;
