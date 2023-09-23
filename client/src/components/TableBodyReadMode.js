import { useNavigate } from "react-router-dom";

const TableBodyReadMode = (props) => {
  const { data, navigate_from_row } = props;

  const click_row = (row) => {
    if (row.redirect_to === null || row.redirect_to === undefined) return;
    navigate_from_row(row.redirect_to, row.id);
  };

  return (
    <tbody>
      {data.map((row, row_key) => (
        <tr key={row_key} onClick={() => click_row(row)}>
          {row.values.map((cell, cell_key) => (
            <th key={cell_key}>{cell}</th>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyReadMode;
