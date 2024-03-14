import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Customer, CustomersTableType } from '@/app/lib/definitions';

export type customerState = {
    customerList: Customer[];
    customerWithInvoiceInfoList: CustomersTableType[];
};

export const initialState: customerState = {
    customerList: [],
    customerWithInvoiceInfoList: [],
};

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setCustomers: (state, action: PayloadAction<Customer[]>) => {
            state.customerList = action.payload;
        },
        setCustomersWithInvoiceInfo: (state, action: PayloadAction<CustomersTableType[]>) => {
            state.customerWithInvoiceInfoList = action.payload;
        },
        addCustomer: (state, action) => {
            state.customerList.push(action.payload);
        },
        removeCustomer: (state, action) => {
            state.customerList = state.customerList.filter((customer) => customer._id !== action.payload);
        }
    },
});

export const { setCustomers, setCustomersWithInvoiceInfo, addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;