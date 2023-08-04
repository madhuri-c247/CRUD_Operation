import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Crud = () => {
    const url = `https://64cb6a68700d50e3c705dc59.mockapi.io/employee/`
    const [datas, setdata] = useState([])
    const [update, setupdate] = useState(false)
    const [toggle, settoggle] = useState(false)
    const [ids, setid] = useState(0)
    const [newdata, setnewdata] = useState({
        id: '',
        name: '',
        email: '',
        number: '',
        createdAt: ''
    })

    const deleteData = (id) => {
        console.log('delete', id)
        // axios.delete(url+`${id}`).then(res=>{
        //     console.log(res.data)  
        //     getData()
        // }).catch(err=>console.log(err))
        const updatedItems = datas.filter((item) => item.id !== id);
        console.log(updatedItems)
        setdata(updatedItems)
    }

    const getData = () => {
        axios.get(url).then(res => {
            setdata(res.data)
        }).catch(err => {
            console.log("err: ", err)
        })
    }


    const editData = (ide) => {
        const toEdit = datas[ide]
        setid(ide)
        setnewdata({
            ...toEdit
        })
        setupdate(true)
    }

    const updatedata = () => {
        // datas.push(newdata)
        console.log(newdata)
        setupdate(false)
        settoggle(false)
         axios.post(url, newdata.toAdd).then(res=>{ 
            console.log(res.data)
            datas.push(res.data)

         }).catch(err=>{
            console.log('err', err)
         })
    }

    const editdata = () => {
        datas.splice(ids, 1, newdata)
        setupdate(false)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setnewdata({
            ...newdata,
            [e.target.name]: value
        });
    }

    const addData = () => {
        const toAdd = []
        setnewdata({
            toAdd
        })
        setupdate(true)
        settoggle(true)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            {/* <button onClick={addData}>Add Data</button> */}
            {update ?
                <div className='form-main-div'>
                    {datas ?
                        <form className='update-form-main'>
                            <h3>Update Here</h3>
                            <input type="text" placeholder='Enter ID' name='id' value={newdata.id} onChange={handleChange} />
                            <input type="text" placeholder='Enter Name' name='name' value={newdata.name} onChange={handleChange} />
                            <input type="text" placeholder='Enter Email' name='email' value={newdata.email} onChange={handleChange} />
                            <input type="text" placeholder='Enter Number' name='number' value={newdata.number} onChange={handleChange} />
                            <input type="text" placeholder='Enter Created Data' name='createdAt' value={newdata.createdAt} onChange={handleChange} />
                            <button className='btn' onClick={() => { toggle ? updatedata() : editdata() }}>{toggle ? 'update' : 'Edit'}</button>
                        </form> : 'No Data Found'}
                </div>
                :
                <>
                
                    <h1 className='data-txt'>My Data</h1>
                <div className='table-main'>
                    <table border={1} >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Created At</th>
                                <th colSpan={2}><button className='add-btn' onClick={addData} >Add</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas ? datas.map((value, index) => {
                                return <>
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.number}</td>
                                        <td>{value.createdAt}</td>
                                        <td><button className='delete-btn' onClick={() => deleteData(value.id)}> Delete </button></td>
                                        <td><button className='edit-btn' onClick={() => editData(index)}>  Edit </button></td>
                                    </tr>
                                </>
                            }) : 'data not found'}
                        </tbody>
                    </table>
                </div>
                            </>
            }
        </>
    );
}

export default Crud;
