"use client"

import { useCardsStore } from "../stores/cardsStore";
import CardSelection from "./CardSelection"
import Heading from "./Heading"

export default function Cards() {
  const { cards, selectedCards, addSelectedCards } = useCardsStore();
  return (
    <section className="flex flex-col gap-2">
      <Heading as="h2" size="lg" className="font-medium">Cards</Heading>
      {cards.map((card) => (
                <CardSelection onClick={() => addSelectedCards(card.id)} key={card.id} id={card.id} icon={card.icon} name={card.name} details={card.details} checked={selectedCards?.includes(card.id)} />
      ))}
    </section>
  )
}
