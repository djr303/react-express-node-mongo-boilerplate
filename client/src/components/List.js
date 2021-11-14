import React, { Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const styles = {
  color: "#777",
  borderBottom: "1px dotted #777"
}

const List = () => (
  <Fragment>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={styles}>Dessert (100g serving)</TableCell>
            <TableCell sx={styles} align="right">Calories</TableCell>
            <TableCell sx={styles} align="right">Fat&nbsp;(g)</TableCell>
            <TableCell sx={styles} align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell sx={styles} align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell sx={styles} scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={styles} align="right">{row.calories}</TableCell>
              <TableCell sx={styles} align="right">{row.fat}</TableCell>
              <TableCell sx={styles} align="right">{row.carbs}</TableCell>
              <TableCell sx={styles} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Fragment>
);

export default List;
