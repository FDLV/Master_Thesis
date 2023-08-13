// data - array, column - number, ascending - boolean

// ascending

export const sort_table_data = (data, column) => {
  data.sort((a, b) => {
    if (a.values[column] > b.values[column]) return 1;
    if (a.values[column] < b.values[column]) return -1;
    return 0;
  });
};
