import { create } from 'zustand'
import { primaryAccountIcon, subAccount1Icon, subAccount2Icon } from '../assets/icons'
import { cardTypes } from '../types/cardTypes'

const bankAccounts: cardTypes[] = [
    { id: "account-1", icon: primaryAccountIcon, name: "Primary account", details: "Ending with3785" },
    { id: "account-2", icon: subAccount1Icon, name: "Sub account", details: "Ending with 2341" },
    { id: "account-3", icon: subAccount2Icon, name: "Savings account", details: "Ending with 6789" },
]

interface bankAccountsStateStore {
    bankAccounts: cardTypes[];
    selectedBankAccounts: string[] | null;
    addSelectedBankAccounts: (id: string) => void;
}

export const useBankAccountsStore = create<bankAccountsStateStore>()((set) => ({
    bankAccounts: bankAccounts,
    selectedBankAccounts: null,
    addSelectedBankAccounts: (id: string) => set((state) => {
        const isAlreadySelected = state.selectedBankAccounts?.some(accountId => accountId === id);
        if (isAlreadySelected) {
            return {
                selectedBankAccounts: state.selectedBankAccounts?.filter(accountId => accountId !== id) || null
            };
        } else {
            return {
                selectedBankAccounts: state.selectedBankAccounts ? [...state.selectedBankAccounts, id] : [id]
            };
        }
    })
}))
