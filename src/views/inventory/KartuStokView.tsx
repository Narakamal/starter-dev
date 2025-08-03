'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
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

// Type Definition
type ItemType = {
    id: string;
    name: string;
    stock: number;
}

// Dummy Data
const dummyItemsInStock: ItemType[] = [
    { id: 'BRG-001', name: 'Paracetamol 500mg', stock: 100 },
    { id: 'BRG-002', name: 'Amoxicillin 250mg', stock: 50 },
    { id: 'BRG-003', name: 'Perban Steril 10cm', stock: 200 },
]

const dummyTransactionHistory = [
    { date: '2024-07-01', type: 'Stok Awal', ref: 'OPN-001', in: 50, out: 0, balance: 50 },
    { date: '2024-07-05', type: 'Penerimaan', ref: 'RCV-012', in: 100, out: 0, balance: 150 },
    { date: '2024-07-10', type: 'Pengeluaran', ref: 'ISS-034', in: 0, out: 25, balance: 125 },
    { date: '2024-07-15', type: 'Retur', ref: 'RET-005', in: 0, out: 5, balance: 120 },
    { date: '2024-07-20', type: 'Penyesuaian', ref: 'ADJ-002', in: 0, out: 20, balance: 100 },
]

const KartuStokView = () => {
    // State for selected item. In a real app, selecting an item would trigger a data fetch.
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Kartu Stok Barang' />
                    <CardContent>
                        <Autocomplete
                            options={dummyItemsInStock}
                            getOptionLabel={(option) => `${option.name} (Stok: ${option.stock})`}
                            onChange={(event, newValue: ItemType | null) => setSelectedItem(newValue)}
                            renderInput={(params) => <TextField {...params} label='Pilih Barang untuk Melihat Kartu Stok' />}
                        />
                    </CardContent>
                </Card>
            </Grid>

            {selectedItem && (
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={`Riwayat Transaksi - ${selectedItem.name}`} />
                        <CardContent>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tanggal</TableCell>
                                            <TableCell>Tipe Transaksi</TableCell>
                                            <TableCell>No. Referensi</TableCell>
                                            <TableCell align='right'>Masuk</TableCell>
                                            <TableCell align='right'>Keluar</TableCell>
                                            <TableCell align='right'>Saldo</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dummyTransactionHistory.map((trx, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{trx.date}</TableCell>
                                                <TableCell>{trx.type}</TableCell>
                                                <TableCell>{trx.ref}</TableCell>
                                                <TableCell align='right'>{trx.in}</TableCell>
                                                <TableCell align='right'>{trx.out}</TableCell>
                                                <TableCell align='right'>{trx.balance}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default KartuStokView
