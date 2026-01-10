import sharedDataType from "../types/sharedDataType";
import Heading from "./Heading";
import { bankIcon, loopTimeIcon, twoArrowsIcon, twoPeopleIcon } from "../assets/icons";
import CardCollapse from "./CardCollapse";




const shardData: sharedDataType[] = [
  { id: "data-1", icon: bankIcon, title: "Account details", details: "Account name, account number, account type and balance" },
  { id: "data-2", icon: loopTimeIcon, title: "Regular payments", details: "Payee agreements, direct debits, scheduled payments and Sending orders" },
  { id: "data-3", icon: twoArrowsIcon, title: "Account transactions", details: "Incoming and outgoing transaction amount, time, description and merchant details" },
  { id: "data-4", icon: twoPeopleIcon, title: "Contact and party details", details: "Full legal name, address, telephone numbers and email addresses of all individuals in the in the account(s)." },
]

export default function SharedData() {
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" size="lg" className="font-medium">You'll be sharing the following data</Heading>
        {shardData.map((data) => (
            <CardCollapse key={data.id} id={data.id} icon={data.icon} title={data.title} details={data.details} />
          ))}
    </section>
  );
}
