import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from "./styles";

type InfoAreaProps = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: InfoAreaProps) => {

    const handlePrevMonth = () => {
        let [ year, month ] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [ year, month ] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={ handlePrevMonth }>&laquo;</MonthArrow>
                <MonthTitle>{ formatCurrentMonth(currentMonth) }</MonthTitle>
                <MonthArrow onClick={ handleNextMonth }>&raquo;</MonthArrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem title="Receitas" value={ income } />
                <ResumeItem title="Despesas" value={ expense } />
                <ResumeItem title="Balanço" value={ income - expense } color={ (income - expense) < 0 ? 'red' : 'green' } />
            </ResumeArea>
        </Container>
    );
}
