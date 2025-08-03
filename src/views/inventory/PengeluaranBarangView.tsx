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

// Dummy Data
const dummyUnits = [
  { id: 'UNIT-01', name: 'Unit Gawat Darurat (UGD)' },
  { id: 'UNIT-02', name: 'Rawat Inap Mawar' },
  { id: 'UNIT-03', name: 'Laboratorium' },
  { id: 'UNIT-04', name: 'Apotek' }
]

const dummyItemsInStock = [
    { id: 'BRG-001', name: 'Paracetamol 500mg', stock: 100 },
    { id: 'BRG-002', name: 'Amoxicillin 250mg', stock: 50 },
    { id: 'BRG-003', name: 'Perban Steril 10cm', stock: 200 },
    { id: 'BRG-004', name: 'Alkohol 70% 100ml', stock: 150 },
]

const PengeluaranBarangView = () => {
  // State
  const [issueItems, setIssueItems] = useState([{ itemId: '', quantity: 1 }])

  const handleAddItem = () => {
    setIssueItems([...issueItems, { itemId: '', quantity: 1 }])
  }

  const handleRemoveItem = (index: number) => {
    const newItems = issueItems.filter((_, i) => i !== index)

    setIssueItems(newItems)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Pengeluaran Barang ke Unit' />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  options={dummyUnits}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => <TextField {...params} label='Pilih Unit Tujuan' />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type='date'
                  label='Tanggal Pengeluaran'
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Item Barang yang Dikeluarkan' />
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: '60%' }}>Nama Barang</TableCell>
                    <TableCell align='right'>Jumlah</TableCell>
                    <TableCell align='center'>Aksi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {issueItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Autocomplete
                          options={dummyItemsInStock}
                          getOptionLabel={(option) => `${option.name} (Stok: ${option.stock})`}
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
            Simpan Pengeluaran
          </Button>
      </Grid>
    </Grid>
  )
}

export default PengeluaranBarangView
