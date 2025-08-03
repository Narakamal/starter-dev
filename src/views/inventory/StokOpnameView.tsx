'use client'

// React Imports
import { useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Dummy Data
const dummyStockList = [
    { id: 'BRG-001', name: 'Paracetamol 500mg', systemStock: 100 },
    { id: 'BRG-002', name: 'Amoxicillin 250mg', systemStock: 50 },
    { id: 'BRG-003', name: 'Perban Steril 10cm', systemStock: 200 },
    { id: 'BRG-004', name: 'Alkohol 70% 100ml', systemStock: 150 },
    { id: 'BRG-005', name: 'Betadine 60ml', systemStock: 75 },
]

const StokOpnameView = () => {
    // State to hold the physical counts entered by the user
    const [physicalCounts, setPhysicalCounts] = useState<{ [key: string]: number }>({})

    const handleCountChange = (itemId: string, count: number) => {
        setPhysicalCounts(prev => ({ ...prev, [itemId]: count }))
    }

    const opnameData = useMemo(() => {
        return dummyStockList.map(item => {
            const physicalCount = physicalCounts[item.id] ?? item.systemStock;
            const variance = physicalCount - item.systemStock;


return {
                ...item,
                physicalCount,
                variance
            }
        })
    }, [physicalCounts])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Stok Opname / Perhitungan Fisik Stok' />
                    <CardContent>
                        <Typography variant='body2'>
                            Gunakan halaman ini untuk mencatat hasil perhitungan fisik stok barang. Masukkan jumlah fisik pada kolom &apos;Stok Fisik&apos;.
                            Sistem akan otomatis menghitung selisihnya.
                        </Typography>
                        <Box sx={{ my: 4 }}>
                            <TextField
                                fullWidth
                                type='date'
                                label='Tanggal Stok Opname'
                                InputLabelProps={{ shrink: true }}
                                sx={{ maxWidth: 300 }}
                            />
                        </Box>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID Barang</TableCell>
                                        <TableCell>Nama Barang</TableCell>
                                        <TableCell align='right'>Stok Sistem</TableCell>
                                        <TableCell align='right'>Stok Fisik</TableCell>
                                        <TableCell align='right'>Selisih</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {opnameData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell align='right'>{item.systemStock}</TableCell>
                                            <TableCell align='right'>
                                                <TextField
                                                    type='number'
                                                    value={item.physicalCount}
                                                    onChange={(e) => handleCountChange(item.id, parseInt(e.target.value) || 0)}
                                                    sx={{ maxWidth: 120 }}
                                                    inputProps={{style: { textAlign: 'right' }}}
                                                />
                                            </TableCell>
                                            <TableCell align='right' style={{ color: item.variance !== 0 ? 'red' : 'inherit' }}>
                                                {item.variance}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} className='flex justify-end'>
                <Button variant='contained' color='primary'>
                    Simpan & Buat Penyesuaian Stok
                </Button>
            </Grid>
        </Grid>
    )
}

export default StokOpnameView
