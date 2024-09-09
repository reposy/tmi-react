import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ExchangeRates() {
  // Redux 상태에서 환율 데이터를 가져옴
  const rates = useSelector((state) => state.exchangeRates.rates);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>화폐명</TableCell>
            <TableCell>단위</TableCell>
            <TableCell>원화가치</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rates.map((rate, index) => (
            <TableRow key={index}>
              <TableCell>{rate.currency}</TableCell>
              <TableCell>{rate.unit}</TableCell>
              <TableCell>{rate.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExchangeRates;