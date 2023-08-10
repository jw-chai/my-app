import React, { useState } from "react";
import "./Table.styles.css";
import { sortData } from "../../utils/sorting";
import useWindowWidth from "../../utils/useWindowWidth";

const TableWithSorting = ({ columns, data, tableTitle, tintColor }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = React.useMemo(() => {
    return sortData(data, sortConfig);
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const isLayout1 = columns.length > 3;

  return (
    <>
      {isMobile && isLayout1 ? (
        <table className={`table ${isLayout1 ? "layout-1" : ""}`}>
          <thead>
            <tr>
              <th
                className={"row-header"}
                style={{ backgroundColor: tintColor }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className="row-header-text">
                    {tableTitle ? tableTitle : columns[0].label}
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <td>
              {sortedData.map((row, rowIndex) => (
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
              ))}
            </td>
          </tbody>
        </table>
      ) : (
        <table className={`table`}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} onClick={() => requestSort(column.field)}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {column.label}{" "}
                    {sortConfig?.key === column.field ? (
                      sortConfig.direction === "ascending" ? (
                        <span
                          className="sort-icon sort-asc"
                          style={{ backgroundColor: tintColor + "25" }}
                        >
                          ↑
                        </span>
                      ) : (
                        <span
                          className="sort-icon sort-desc"
                          style={{ backgroundColor: tintColor + "25" }}
                        >
                          ↓
                        </span>
                      )
                    ) : (
                      <span className="sort-icon sort-none">↕</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} data-label={column.label}>
                    {column.render ? column.render(row) : row[column.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableWithSorting;
