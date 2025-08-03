'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

// Dummy Data (In a real app, this would come from an API)
const dummySuppliers = [
  { id: 'SUP-001', name: 'PT Bio Farma' },
  { id: 'SUP-002', name: 'CV Medika Jaya' },
  { id: 'SUP-003', name: 'PT Kimia Farma' }
]

const dummyItems = [
  { id: 'BRG-001', name: 'Paracetamol 500mg' },
  { id: 'BRG-002', name: 'Amoxicillin 250mg' },
  { id: 'BRG-003', name: 'Perban Steril 10cm' },
  { id: 'BRG-004', name: 'Alkohol 70% 100ml' }
]

const PurchaseOrderView = () => {
  // State
  const [poItems, setPoItems] = useState([{ itemId: '', quantity: 1 }])

  const handleAddItem = () => {
    setPoItems([...poItems, { itemId: '', quantity: 1 }])
  }

  const handleRemoveItem = (index: number) => {
    const newItems = poItems.filter((_, i) => i !== index)

    setPoItems(newItems)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Buat Purchase Order (PO) Baru' />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  options={dummySuppliers}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => <TextField {...params} label='Pilih Supplier' />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type='date'
                  label='Tanggal PO'
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Item Barang' />
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nama Barang</TableCell>
                    <TableCell align='right'>Jumlah</TableCell>
                    <TableCell align='center'>Aksi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {poItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ width: '60%' }}>
                        <Autocomplete
                          options={dummyItems}
                          getOptionLabel={(option) => option.name}
                          renderInput={(params) => <TextField {...params} label='Pilih Barang' />}
                        />
                      </TableCell>
                      <TableCell align='right'>
                        <TextField type='number' defaultValue={1} sx={{ maxWidth: 100 }}/>
                      </TableCell>
                      <TableCell align='center'>
                        <IconButton color='error' onClick={() => handleRemoveItem(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant='contained'
              startIcon={<AddIcon />}
              onClick={handleAddItem}
              sx={{ mt: 4 }}
            >
              Tambah Item
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} className='flex justify-end'>
          <Button variant='contained' color='primary'>
            Simpan PO
          </Button>
      </Grid>
    </Grid>
  )
}

export default PurchaseOrderView
