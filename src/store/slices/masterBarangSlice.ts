import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface MasterBarangState {
  items: { id: string; name: string; category: string; stock: number; unit: string; }[]
}

// Define the initial state using that type
const initialState: MasterBarangState = {
  items: [
    { id: 'BRG-001', name: 'Paracetamol 500mg', category: 'Obat', stock: 100, unit: 'Tablet' },
    { id: 'BRG-002', name: 'Amoxicillin 250mg', category: 'Antibiotik', stock: 50, unit: 'Kapsul' },
    { id: 'BRG-003', name: 'Perban Steril 10cm', category: 'Alat Medis', stock: 200, unit: 'Roll' },
    { id: 'BRG-004', name: 'Alkohol 70% 100ml', category: 'Cairan Medis', stock: 150, unit: 'Botol' }
  ]
}

export const masterBarangSlice = createSlice({
  name: 'masterBarang',
  initialState,
  reducers: {
    // Reducers untuk add, update, delete akan ditambahkan di sini.
    // Contoh:
    // addItem: (state, action: PayloadAction<{ name: string; category: string }>) => {
    //   const newItem = { ...action.payload, id: `BRG-${state.items.length + 1}`, stock: 0, unit: 'Unit' };
    //   state.items.push(newItem);
    // },
  }
})

// Action creators are generated for each case reducer function
// export const { addItem } = masterBarangSlice.actions

export default masterBarangSlice.reducer
