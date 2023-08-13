const TableBodyDeleteMode = (props) => {
  const { data } = props;

  return (
    <tbody>
      {data.map((row, row_key) => (
        <tr key={row_key}>
          {row.values.map((cell, cell_key) => (
            <th key={cell_key}>{cell}</th>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyDeleteMode;
