import React, { Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function createData(id, publisher, title, url, tags, date) {
  return { id, publisher, title, url, tags, date };
}

const rows = [
  createData(28, 'the guardian', 'It beggers belief', 'www.example.com', 'jesus, politics', '11/08/21'),
  createData(19, 'the times', 'boris gets it the back', 'www.example.com', 'tory, westminster, politics', '12/09/21'),
  createData(15, 'the sun', 'football crazy', 'www.example.com', 'sport, politics, money', '14/09/21'),
  createData(70, 'medium', 'hello world version 500', 'www.example.com', 'tutorials, python, tech', '13/09/20'),
];

const rowStyles = {
  color: "#777",
  borderBottom: "1px dotted #777"
}

const headerStyles = { ...rowStyles, fontWeight: 'bold'}

const List = () => (
  <Fragment>
    <TableContainer>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyles} align="left">publisher</TableCell>
            <TableCell sx={headerStyles} align="left">article title</TableCell>
            <TableCell sx={headerStyles} align="left">url</TableCell>
            <TableCell sx={headerStyles} align="left">tags</TableCell>
            <TableCell sx={headerStyles} align="left">date</TableCell>
            <TableCell sx={headerStyles} align="left">edit/view</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell sx={rowStyles} scope="row">
                {row.publisher} 
              </TableCell>
              <TableCell sx={rowStyles} align="left">{row.title}</TableCell>
              <TableCell sx={rowStyles} align="left"><a href={row.url}>{row.url}</a></TableCell>
              <TableCell sx={rowStyles} align="left">{row.tags}</TableCell>
              <TableCell sx={rowStyles} align="left">{row.date}</TableCell>
              <TableCell sx={rowStyles} align="left">
                <Button href={`/edit:${row.id}`}>Edit/View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Fragment>
);

export default List;
