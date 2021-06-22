import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const addList = [
    "Andijon viloyati", "Buxoro viloyati", "Fargʻona viloyati", "Jizzax viloyati",
    "Xorazm viloyati", "Namangan viloyati", "Navoiy viloyati", "Qashqadaryo viloyati",
    "Toshkent viloyati", "Toshkent shahar", "Samarqand viloyati", "Surxondaryo viloyati",
]

const CreatePut = () => {

    // const [city, setCity] = useState("");
    const [znak, setZnak] = useState();
    const [fio, setFIO] = useState();
    const [CarNumber, setCarNumber] = useState();

    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [enginePower, setEnginePower] = useState();
    const [kuzuf, setKuzuf] = useState();

    const [weight, setWeight] = useState();
    const [color, setColor] = useState();
    const [RegZnak, setRegZnak] = useState();

    const [addType, setAddType] = useState();
  
   
    const [keep, setKeep] = useState([]);

    const AddRes = (idj) => {

        // console.log("asdf");
        axios.put('https://transt-api.herokuapp.com/change', {
            id: idj,
            city: addType,
            znak: znak,
            fio: fio,
            CarNumber: CarNumber,
            model: model,
            year: year,
            enginePower: enginePower,
            kuzuf: kuzuf,
            weight: weight,
            color: color,
            RegZnak: RegZnak,
          
        })
            .then(() => {
                setKeep(keep.map((val) => {
                    return val._id === idj 
                        ? {
                            _id: idj,
                            city: addType,
                            znak: znak,
                            FIO: fio,
                            CarNumber: CarNumber,
                            model: model,
                            year: year,
                            enginePower: enginePower,
                            kuzuf: kuzuf,
                            weight: weight,
                            color: color,
                            RegZnak: RegZnak,
                        }
                        : val
                       
                }))
                alert('chenged bro!')
            }).catch(() => {
                alert('nothing changed')
            })
    }

    // console.log(window.location.pathname)
    const { id } = useParams();

    const [changing, setChanging] = useState([]);

    useEffect(() => {
        axios.get('https://transt-api.herokuapp.com/read')
            .then((response) => {
                
                const {data} = response;
                const oneId = data.find(f => f._id === id);
                setChanging(oneId);
            })
            .catch(() => console.log('Error here!'));
    }, []);


    let onchanges2 = (e) => setZnak(e.target.value);
      
    let onchanges3 = (e) => setFIO(e.target.value);

    let onchanges4 = (e) => setCarNumber(e.target.value);

    let onchanges5 = (e) => setModel(e.target.value);

    let onchanges6 = (e) => setYear(e.target.value);

    let onchanges7 = (e) => setEnginePower(e.target.value);

    let onchanges8 = (e) => setKuzuf(e.target.value);

    let onchanges9 = (e) => setWeight(e.target.value);

    let onchanges10 = (e) => setColor(e.target.value);

    let onchanges11 = (e) => setRegZnak(e.target.value);

 
    return (
        
        <div className="">
            <div className="col-lg-12 mt-2  text-center h5">Пожалуйста заполните бланку</div><br />

            <form >

                {/* section1 */}
                <div className="row mb-3">
                    <div className="col-lg-7">

                        <label >Место прозедения проверки техничечкого состояние </label>
                        < select
                            onChange={e => setAddType(e.target.value)}
                            className="browser-default custom-select">
                            
                            {addList.map((address, key) => <option value={address } key={key} >{address}</option>)}
                        </select >

                    </div>

                    <div className="col-lg-5">
                        <label >Государственный регистраци знак</label>
                        <input type='number' onChange={onchanges2}  type="text" className="form-control form-control-sm"  placeholder="123456 Ташкент" />
                    </div>
                </div>
                {/* section2 */}
                <div className="row mb-3">
                    <div className="col-lg-12">
                        <label >Ф.И.О</label>
                        <input onChange={onchanges3}   type="text" className="form-control form-control-sm"  placeholder="Abdullaev Abdulla Abdulayevich" />

                    </div>
                </div>

                {/* section3 */}
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <label >Номер машины </label>
                        <input onChange={onchanges4}  type="text" className="form-control form-control-sm"  placeholder="01 F 760 LI" />

                    </div>

                    <div className="col-lg-3">
                        <label >Марка, модель</label>
                        <input onChange={onchanges5}  type="text" className="form-control form-control-sm"  placeholder="e38 740Li" />
                    </div>

                    <div className="col-lg-3">
                        <label >Год выпуска</label>
                        <input onChange={onchanges6} type="text" className="form-control form-control-sm"  placeholder="2001" />
                    </div>
                </div>
                {/* section4 */}
                <div className="row mb-3">

                    <div className="col-lg-6">
                        <label >Мощность двигателя</label>
                        <input onChange={onchanges7}  type="text" className="form-control form-control-sm"  placeholder="160 л.с" />

                    </div>

                    <div className="col-lg-3">
                        <label >N кузова</label>
                        <input onChange={onchanges8}  type="text"  className="form-control form-control-sm"  placeholder="Седан, Хетчбэк" />
                    </div>

                    <div className="col-lg-3">
                        <label >N, масси</label>
                        <input onChange={onchanges9}  type="text" className="form-control form-control-sm"  placeholder="1700кг" />
                    </div>
                </div>

                {/* section5 */}
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <label >Цвет</label>
                        <input onChange={onchanges10}  type="text" className="form-control form-control-sm"  placeholder="чёрный " />

                    </div>

                    <div className="col-lg-6">
                        <label >Регистрационний знак</label>
                        <input onChange={onchanges11}  type="text" className="form-control form-control-sm"  placeholder="E087ME33" />

                    </div>
                </div>

                <button onClick={()=> AddRes(changing._id)} className='btn btn-primary btn-sm mb-3' >change</button>

            </form>

        </div>
    )
}

export default CreatePut;