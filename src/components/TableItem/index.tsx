import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { Category, TableColumn, TableLine, Value } from "./styles";

type TableItemProps = {
    item: Item;
}

export const TableItem = ({ item }: TableItemProps) => {
    return (
        <TableLine>
            <TableColumn>{ formatDate(item.date) }</TableColumn>
            <TableColumn>
                <Category color={ categories[item.category].color }>{ categories[item.category].title }</Category>
            </TableColumn>
            <TableColumn>{ item.title }</TableColumn>
            <TableColumn>
                <Value color={ categories[item.category].expense ? 'red' : 'green' } >R$ { item.value }</Value>
            </TableColumn>
        </TableLine>
    );
}
