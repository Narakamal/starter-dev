'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

const LaporanView = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Dasbor Laporan Inventaris' />
          <CardContent>
            <Grid container spacing={4}>
              {/* Metric Cards */}
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant='h6'>Rp 150.000.000</Typography>
                  <Typography variant='body2'>Total Nilai Stok</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant='h6'>5</Typography>
                  <Typography variant='body2'>Item Stok Kritis</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant='h6'>3</Typography>
                  <Typography variant='body2'>Purchase Order Tertunda</Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Daftar Laporan Tersedia' />
          <CardContent>
            <List component={Paper}>
              <ListItem button>
                <ListItemText primary="Laporan Stok Saat Ini" secondary="Menampilkan semua item beserta stok terakhir." />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Laporan Penerimaan Barang" secondary="Menampilkan riwayat semua barang yang diterima dari supplier." />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Laporan Pengeluaran Barang" secondary="Menampilkan riwayat semua barang yang dikeluarkan ke unit." />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Laporan Retur Barang" secondary="Menampilkan riwayat semua barang yang dikembalikan ke supplier." />
              </ListItem>
               <Divider />
              <ListItem button>
                <ListItemText primary="Laporan Stok Opname" secondary="Menampilkan riwayat hasil stok opname dan penyesuaian." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default LaporanView
