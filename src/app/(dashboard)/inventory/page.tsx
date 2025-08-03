'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// MUI Icon Imports
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import UndoIcon from '@mui/icons-material/Undo';
import OutputIcon from '@mui/icons-material/Output';
import ArticleIcon from '@mui/icons-material/Article';
import RuleIcon from '@mui/icons-material/Rule';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const menuItems = [
  {
    title: 'Master Barang',
    href: '/inventory/master-barang',
    description: 'Kelola daftar semua barang di inventaris.',
    icon: <InventoryIcon fontSize='large' />
  },
  {
    title: 'Master Supplier',
    href: '/inventory/master-supplier',
    description: 'Kelola daftar semua supplier atau pemasok.',
    icon: <PeopleAltIcon fontSize='large' />
  },
  {
    title: 'Buat PO',
    href: '/inventory/purchase-order',
    description: 'Buat Purchase Order (PO) baru ke supplier.',
    icon: <ShoppingCartIcon fontSize='large' />
  },
  {
    title: 'Terima Barang',
    href: '/inventory/penerimaan-barang',
    description: 'Catat penerimaan barang dari supplier.',
    icon: <CallReceivedIcon fontSize='large' />
  },
  {
    title: 'Retur Barang',
    href: '/inventory/retur-barang',
    description: 'Kembalikan barang ke supplier.',
    icon: <UndoIcon fontSize='large' />
  },
  {
    title: 'Pengeluaran Barang',
    href: '/inventory/pengeluaran-barang',
    description: 'Catat pengeluaran barang ke unit internal.',
    icon: <OutputIcon fontSize='large' />
  },
  {
    title: 'Kartu Stok',
    href: '/inventory/kartu-stok',
    description: 'Lacak riwayat transaksi untuk setiap barang.',
    icon: <ArticleIcon fontSize='large' />
  },
  {
    title: 'Stok Opname',
    href: '/inventory/stok-opname',
    description: 'Lakukan perhitungan dan penyesuaian stok fisik.',
    icon: <RuleIcon fontSize='large' />
  },
  {
    title: 'Laporan',
    href: '/inventory/laporan',
    description: 'Lihat dasbor dan laporan inventaris.',
    icon: <LeaderboardIcon fontSize='large' />
  }
]

export default function InventoryDashboard() {
  return (
    <Box>
        <Typography variant='h4' sx={{ mb: 6 }}>
            Manajemen Inventaris
        </Typography>
        <Grid container spacing={6}>
        {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={item.href} passHref style={{ textDecoration: 'none' }}>
                <Card>
                <CardActionArea sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 2, color: 'primary.main' }}>{item.icon}</Box>
                    <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {item.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {item.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Link>
            </Grid>
        ))}
        </Grid>
    </Box>
  )
}
