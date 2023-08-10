// CustomTable.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Table from "../../components/Table";

const data = [
  { Name: "Alice", Age: 30, Gender: "Female" },
  { Name: "Bob", Age: 25, Gender: "Male" },
  { Name: "Charlie", Age: 22, Gender: "Non-Binary" }
];

describe("CustomTable", () => {
  test("renders TableWithCheckbox when type is checkbox", () => {
    render(<Table data={data} type="checkbox" />);
    // Add assertions specific to the checkbox table
    // Example: Check if checkboxes are present
  });

  test("renders TableWithRadio when type is radio", () => {
    render(<Table data={data} type="radio" />);
    // Add assertions specific to the radio table
    // Example: Check if radio buttons are present
  });

  test("renders TableWithSorting when type is sort", () => {
    render(<Table data={data} type="sort" />);
    // Add assertions specific to the sorting table
    // Example: Check if sorting icons are present
  });

  // test("renders error message for invalid type", () => {
  //   render(<Table data={data} columns={columns} type="invalid" />);
  //   expect(
  //     screen.getByText(
  //       "Please specify a valid table type (checkbox, radio, sort)."
  //     )
  //   ).toBeInTheDocument();
  // });
});
