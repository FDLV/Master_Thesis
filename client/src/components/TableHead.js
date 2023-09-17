const TableHead = (props) => {
  const { titles, setSortedColumn } = props;

  return (
    <thead>
      <tr>
        {titles.map((el, i) => (
          <th key={i}>
            {el.name}
            <button onClick={() => setSortedColumn(i)}>⇵</button>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
