"use client";

import BankAccounts from "./components/BankAccounts";
import Cards from "./components/Cards";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Paragraph from "./components/Paragraph";
import SharedData from "./components/SharedData";
import { infoIcon } from "./assets/icons";
import Button from "./components/Button";
import Image from "next/image";
import { useBankAccountsStore } from "./stores/bankAccountsStore";
import { useCardsStore } from "./stores/cardsStore";

export default function Home() {
  const { selectedBankAccounts } = useBankAccountsStore();
  const { selectedCards } = useCardsStore();

  return (
    <main className="min-h-screen bg-main-background text-text-main">
      <div className="max-w-300 mx-auto flex flex-col px-4 py-8">
        <Navbar />
        <Heading as="h1" size="xl" className="mt-6 font-semibold">Connect with Malaa</Heading>
        <Paragraph size="md" className="text-text-secondary mt-2 mb-4">Select accounts and cards to share details</Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BankAccounts />
          <Cards />
          <SharedData />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <Paragraph size="sm" className="bg-background-secondary p-3 rounded-xl font-semibold sm:w-fit">Your data will be shared starting from 16/12/2024 until 16/12/2025. </Paragraph>
          <Paragraph size="sm" className="text-text-secondary">Malaa will have ongoing access to your data for 12 months. You can revoke these permissions at any time from the Settings. </Paragraph>
          <div className="flex items-start md:items-center gap-2 p-3 bg-background-secondary rounded-lg mt-2 sm:w-fit">
            <Image src={infoIcon} alt="info icon" className="w-4 h-4 mt-1 md:mt-0" />
            <Paragraph size="sm" className="font-bold ">By proceeding, you agree to our <span className="text-primary">terms & conditions</span> and will be securely redirected to Malaa.</Paragraph>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant={"danger"} size={"lg"}>Deny</Button>
            <Button disabled={selectedBankAccounts?.length === 0 || selectedCards?.length === 0} variant={"secondary"} size={"lg"}>Allow</Button>
          </div>
        </div>
      </div>

    </main>
  );
}
