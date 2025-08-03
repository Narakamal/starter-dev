'use client'

// Redux Imports
import { useSelector } from 'react-redux'


// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import type { RootState } from '@/store'

const MasterBarangView = () => {
  // Hooks
  const items = useSelector((state: RootState) => state.masterBarang.items)

  return (
    <Card>
      <CardHeader
        title='Master Barang'
        action={
          <Button variant='contained' color='primary'>
            Tambah Barang Baru
          </Button>
        }
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID Barang</TableCell>
                <TableCell>Nama Barang</TableCell>
                <TableCell>Kategori</TableCell>
                <TableCell align='right'>Stok</TableCell>
                <TableCell>Satuan</TableCell>
                <TableCell align='center'>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(item => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {item.id}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell align='right'>{item.stock}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell align='center'>
                    <Button size='small' variant='outlined' sx={{ mr: 2 }}>
                      Edit
                    </Button>
                    <Button size='small' variant='outlined' color='error'>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default MasterBarangView
