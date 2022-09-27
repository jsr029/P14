import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "../FilterComponent";

const Table = props => {
  const columns = [
    {
      name: "firstname",
      selector: "firstname",
      sortable: true,
      grow: 2
    },
    {
      name: "email",
      selector: "email",
      sortable: true,
      hide: "sm"
    },
    {
      name: "lastname",
      selector: "lastname",
      sortable: true
    },
    {
      name: "street",
      selector: "street",
      sortable: true,
      hide: "md"
    },
    {
      name: "city",
      selector: "city",
      sortable: true,
      hide: "md"
    },
    {
      name: "Buttons",
      button: true,
      cell: row =>
        row.showButtons ? (
          <>
            <button
              onClick={() => props.click(row.name)}
              style={{ marginRight: "5px" }}
            >
              Edit
            </button>
            <button onClick={() => props.click(row.name)}>Delete</button>
          </>
        ) : null
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
