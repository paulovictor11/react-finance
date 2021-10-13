import { useEffect, useState } from "react";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { TableArea } from "./components/TableArea";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";

export const App = () => {

  const [ list, setList ] = useState(items);
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
  const [ income, setIncome ] = useState(0);
  const [ expense, setExpense ] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    setList([...list, item]);
    console.log(list);
  }

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <InfoArea
          currentMonth={ currentMonth }
          onMonthChange={ handleMonthChange }
          income={ income }
          expense={ expense }
        />

        <InputArea onAdd={ handleAddItem } />

        <TableArea list={ filteredList }/>
      </Body>
    </Container>
  );
}
