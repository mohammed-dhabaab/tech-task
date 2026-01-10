"use client"

import CardSelection from "./CardSelection";
import Heading from "./Heading"
import { useBankAccountsStore } from "../stores/bankAccountsStore";

export default function BankAccounts() {
  const { bankAccounts, selectedBankAccounts, addSelectedBankAccounts } = useBankAccountsStore();
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" size="lg" className="font-medium">Bank accounts</Heading>
      {bankAccounts.map((account) => (
        <CardSelection onClick={() => addSelectedBankAccounts(account.id)} key={account.id} id={account.id} icon={account.icon} name={account.name} details={account.details} checked={selectedBankAccounts?.includes(account.id)} />
      ))}
    </section>
  )
}
