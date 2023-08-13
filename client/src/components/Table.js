import { useState, useEffect, useCallback } from "react";
import TableHead from "./TableHead";
import TableBodyCreateMode from "./TableBodyCreateMode.js";
import TableBodyReadMode from "./TableBodyReadMode.js";
import TableBodyUpdateMode from "./TableBodyUpdateMode.js";
import TableBodyDeleteMode from "./TableBodyDeleteMode.js";
import { sort_table_data } from "../functions/sort.js";
import "../styles/table.css";

const Table = (props) => {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [TableBody, setTableBody] = useState(null);

  const set_table_body = useCallback(() => {
    const modes = [
      { name: "create", component: TableBodyCreateMode },
      { name: "read", component: TableBodyReadMode },
      { name: "update", component: TableBodyUpdateMode },
      { name: "delete", component: TableBodyDeleteMode },
    ];

    const mode = modes.find((el) => el.name === props.mode);
    const ComponentByMode = mode.component;
    setTableBody(<ComponentByMode data={props.data} />);
  }, [props]);

  // избытычный юзэффект, при изменении пропсов будет делать лишние операции
  useEffect(() => {
    if (sortedColumn !== null) sort_table_data(props.data, sortedColumn);
    set_table_body();
  }, [props, sortedColumn, set_table_body]);

  return (
    <div className="table__wrapper">
      <table className="table__main">
        <TableHead titles={props.titles} data={props.data} setSortedColumn={setSortedColumn} />
        {TableBody}
      </table>
    </div>
  );
};

export default Table;
