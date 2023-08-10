// CustomTable.jsx
import React, { useEffect, useState } from "react";
import TableWithCheckbox from "./TableWithCheckbox";
import TableWithRadio from "./TableWithRadio";
import TableWithSorting from "./TableWithSorting";
import PropTypes from "prop-types";

const Table = ({ data, type, tableTitle, tintColor }) => {
  const [tableData, setTableData] = useState({ columns: [], data: [] });

  useEffect(() => {
    if (!data) {
      console.log("throw no data error");
      throw new Error("data cannot be null");
    }
    if (data?.length > 0) {
      const reStrutureData = () => {
        try {
          const parsedJson = JSON.parse(data);
          if (Array.isArray(parsedJson) && parsedJson.length > 0) {
            const columns = Object.keys(parsedJson[0]).map((key) => ({
              label: key,
              field: key,
            }));
            setTableData({ columns, data: parsedJson });
          } else {
            alert("Invalid JSON format. Please enter an array of objects.");
          }
        } catch (error) {
          alert("Error parsing JSON. Please check the input.");
        }
      };
      reStrutureData();
    }
  }, [data]);

  switch (type) {
    case "checkbox":
      return (
        <TableWithCheckbox
          data={tableData.data}
          columns={tableData.columns}
          tableTile={tableTitle}
          tintColor={tintColor}
        />
      );
    case "radio":
      return (
        <TableWithRadio
          data={tableData.data}
          columns={tableData.columns}
          tableTile={tableTitle}
          tintColor={tintColor}
        />
      );
    case "sorting":
      return (
        <TableWithSorting
          data={tableData.data}
          columns={tableData.columns}
          tableTile={tableTitle}
          tintColor={tintColor}
        />
      );
    default:
      return (
        <TableWithSorting
          data={tableData.data}
          columns={tableData.columns}
          tableTile={tableTitle}
          tintColor={tintColor}
        />
      );
  }
};

export default Table;

Table.propTypes = {
  /**
   * data source
   */
  data: PropTypes.string.isRequired,
  /**
   * what type of table to render
   */
  type: PropTypes.oneOf(["checkbox", "radio", "sorting"]),
  /**
   * title of table for mobile view
   */
  tableTitle: PropTypes.string,
  /** theme */
  tintColor: PropTypes.string,
};

Table.defaultProps = {
  data: "",
  type: "sorting",
  tableTitle: "",
  tintColor: "#5C50BB",
};
