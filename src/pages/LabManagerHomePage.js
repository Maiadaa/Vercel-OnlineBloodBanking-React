import { useState } from "react";
import MenuList from "../components/BloodInventory/MenuList";
const LabAdminHomePage = () => 
{
    const [options, setOptions] = useState([]);

    const optionsArray = 
    [
        {
            optionID : 1,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'View Pending Requests',
            optionDesc: 'View all pending blood bag insertion requests submited by your hospital Lab Admin'
        },
        {
            optionID : 2,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'View Blood Inventory',
            optionDesc: 'View available blood bags in your hospital inventory'
        },
        {
            optionID : 3,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'View Doctors Requests',
            optionDesc: 'View blood bag requests made by doctors within you hospital'
        }
    ]

    const onButtonClickHandler = () =>
    {
        setOptions(optionsArray);
        document.getElementById("button").style.display = "none";
    };
    return (
    <div className="inline flex-col items-center justify-center">
        <button id = "button" className="bg-slate-800 text-white py-3 px-10 my-10 font-bold rounded-xl" onClick={onButtonClickHandler}>
        Get Started!
        </button>
        <MenuList options = {options}></MenuList>
    </div>
    );
};

export default LabAdminHomePage;