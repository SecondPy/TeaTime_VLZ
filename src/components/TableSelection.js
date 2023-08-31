import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const TableSelection = () => {
    const [selectedDatePublic, setSelectedDatePublic] = useState(null)
    const [selectedDateVip, setSelectedDateVip] = useState(null)

    const handleDateChange1 = (date) => {
        setSelectedDatePublic(date);

    };
    const handleDateChange2 = (date) => {
        setSelectedDateVip(date);

    };


    return (
        <div className="image-buttons-container">
            <div className="image-public_table_button">
                <h3>Выберите дату и время для общего стола:</h3>
                <DatePicker
                    selected={selectedDatePublic}
                    onChange={handleDateChange1}
                    showTimeSelect
                    timeIntervals={30}
                    dateFormat="dd/MM/yyyy HH:mm"
                    />
            </div>
            <div className="image-vip_table_button">
                <h3>Выберите дату и время для VIP-стола:</h3>
                <DatePicker
                    selected={selectedDateVip}
                    onChange={handleDateChange2}
                    showTimeSelect
                    timeIntervals={30}
                    dateFormat="dd/MM/yyyy HH:mm"
                    />
            </div>
        </div>
    );
};
//function TableSelection() {
//    return (
//        <div>
//            <h2>Выберите тип стола:</h2>
//            <button className="image-public_table_button">VIP стол</button>
//            <button className="image-vip_table_button">Общий стол</button>
//        </div>
//    );
//}
//
export default TableSelection;
