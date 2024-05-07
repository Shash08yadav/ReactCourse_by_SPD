import React, { useEffect, useState } from 'react'
import "./style.css"
import Tab from './Tab'
import Drop from './Drop'
import Sidebar from './Sidebar'

const Wrapper = () => {
    // const [dataObj, setDataObj] = useState([])
    const [key, setKey] = useState("first");
    const [pack, setPack] = useState(0);

    const objectArr = {
        first : [
            {
                title: "Basic Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "900",
                time: "1 month",
                id: "fs-01",
                logo: "red",
                addmsg: "Falana wali ke pyaar mein"
            },
            {
                title: "Intermediate Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "1900",
                time: "2 month",
                id: "fs-02",
                logo: "red",
                addmsg: "Falana wali ke pyaar mein"
            },
            {
                title: "Advance Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "19000",
                time: "3 month",
                id: "fs-03",
                logo: "red",
                addmsg: "Falana wali ke pyaar mein"
            }
        ],
        second : [
            {
                title: "Eyecatchy Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "900",
                time: "1 month",
                id: "sec-01",
                logo: "red",
                addmsg: "Falana wali ke pyaar mein"
            },
            {
                title: "Intermediate Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "1900",
                time: "2 month",
                id: "sec-02"
            },
            {
                title: "Advance Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "19000",
                time: "3 month",
                id: "sec-03"
            }
        ],
        third : [
            {
                title: "Pro Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "900",
                time: "1 month",
                id: "th-01"
            },
            {
                title: "Intermediate Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "1900",
                time: "2 month",
                id: "th-02",
                logo: "red",
                addmsg: "Falana wali ke pyaar mein"
            },
            {
                title: "Advance Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "19000",
                time: "3 month",
                id: "th-03"
            }
        ],
        fourth : [
            {
                title: "VIP Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "900",
                time: "1 month",
                id: "fr-01"
            },
            {
                title: "Intermediate Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "1900",
                time: "2 month",
                id: "fr-02"
            },
            {
                title: "Advance Plan",
                desc: "Lite On your Purse, But heavy on the Body",
                discardPrice: "9000",
                price: "19000",
                time: "3 month",
                id: "fr-03",
                logo: "red",
                addmsg: "Falana wali ke pyaar mein"
            }
        ],
    }

    useEffect(()=>{
        console.log(objectArr[key]);
    }, [key])

  return (
    <div className='wrapper'>
        <div className="left">
        <Tab 
        whatsKey={setKey}/>

        <Drop
        objArr = {objectArr[key]}
        whichPack= {setPack}
        
        />
        </div>
        <div className="right">
        <Sidebar
        selectedObj={objectArr[key][pack]}/>
        </div>
    </div>
  )
}

export default Wrapper