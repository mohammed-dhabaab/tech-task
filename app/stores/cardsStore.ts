import { create } from 'zustand'
import { cashbackCardIcon, pettyCardIcon } from '../assets/icons'
import { cardTypes } from '../types/cardTypes'

const cards: cardTypes[] = [
  { id: "card-1", icon: pettyCardIcon, name: "Petty cash card", details: "Ending with 1457" },
  { id: "card-2", icon: cashbackCardIcon, name: "Cashback credit card", details: "Ending with 7806" },
]

interface cardsStateStore {
    cards: cardTypes[];
    selectedCards: string[] | null;
    addSelectedCards: (id: string) => void;
}

export const useCardsStore = create<cardsStateStore>()((set) => ({
    cards: cards,
    selectedCards: null,
    addSelectedCards: (id: string) => set((state) => {
        const isAlreadySelected = state.selectedCards?.some(accountId => accountId === id);
        if (isAlreadySelected) {
            return {
                selectedCards: state.selectedCards?.filter(accountId => accountId !== id) || null
            };
        } else {
            return {
                selectedCards: state.selectedCards ? [...state.selectedCards, id] : [id]
            };
        }
    })
}))
