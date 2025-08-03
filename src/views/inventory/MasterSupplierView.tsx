'use client'

// React Imports
import { useState } from 'react'

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

// Dummy Data
const dummySuppliers = [
  { id: 'SUP-001', name: 'PT Bio Farma', contactPerson: 'Andi Wijaya', phone: '081234567890', address: 'Jl. Pasteur No. 28, Bandung' },
  { id: 'SUP-002', name: 'CV Medika Jaya', contactPerson: 'Budi Santoso', phone: '082345678901', address: 'Jl. Sudirman No. 15, Jakarta' },
  { id: 'SUP-003', name: 'PT Kimia Farma', contactPerson: 'Citra Lestari', phone: '083456789012', address: 'Jl. Diponegoro No. 45, Surabaya' },
]

const MasterSupplierView = () => {
  // State
  const [suppliers] = useState(dummySuppliers)

  return (
    <Card>
      <CardHeader
        title='Master Supplier'
        action={
          <Button variant='contained' color='primary'>
            Tambah Supplier Baru
          </Button>
        }
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID Supplier</TableCell>
                <TableCell>Nama Supplier</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Telepon</TableCell>
                <TableCell>Alamat</TableCell>
                <TableCell align='center'>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers.map(supplier => (
                <TableRow key={supplier.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {supplier.id}
                  </TableCell>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.contactPerson}</TableCell>
                  <TableCell>{supplier.phone}</TableCell>
                  <TableCell>{supplier.address}</TableCell>
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

export default MasterSupplierView
