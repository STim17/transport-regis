import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ReactToExcel from 'react-html-table-to-excel';
import './styles.css';

const Item = () => {

    const { id } = useParams();
    const [ans, setAns] = useState([]);

    useEffect(() => {
        axios.get(`https://transt-api.herokuapp.com/read`)
            .then((response) => {
                const { data } = response;

                const one = data.find(d => d._id === id);
                console.log(one);
                setAns(one);

            }).catch(() => {
                console.log('my Error!');
            })
    }, []);

    return (
        <div className="mt-2" key={ans._id} >
            <table border="1" id='table-to-xls' >

                <tr>
                    <th colspan="2">Место прозедения проверки техничечкого состояние</th>
                    <th>Государственный регистраци знак</th>
                    <th>Ф.И.О</th>
                </tr>

                <tr style={{textAlign: 'center'}}>
                    <td colspan="2">{ans.city}</td>
                    <td >{ans.znak}</td>
                    <td >{ans.FIO}</td>
                </tr>

                <tr>
                    <th>Год выпуска</th>
                    <th>Марка, модель</th>
                    <th colspan="2">Номер машины </th>
                </tr>
                <tr style={{textAlign: 'center'}}>
                    <td>{ans.year}</td>
                    <td>{ans.model}</td>
                    <td colspan="2">{ans.CarNumber}</td>
                </tr>

                <tr>
                    <th>Мощность двигателя</th>
                    <th>N кузова</th>
                    <th>N, масси</th>
                    <th>Цвет</th>
                </tr>
                <tr style={{textAlign: 'center'}}>
                    <td>{ans.enginePower}</td>
                    <td>{ans.kuzuf}</td>
                    <td>{ans.weight}</td>
                    <td>{ans.color}</td>
                </tr>

                <tr >
                    <th colSpan="1">Регистрационний знак</th>
                    <td colSpan="3" style={{textAlign: 'center'}}>{ans.RegZnak}</td>

                </tr>


            </table><br />
            <ReactToExcel
                table='table-to-xls'
                filename='TransportInExcel'
                sheet='sheet 1'
                buttonText='Download'
            />

        </div>
    )
}


export default Item;


