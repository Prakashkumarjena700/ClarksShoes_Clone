import React, { useEffect, useState } from 'react'

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineEdit } from "react-icons/ai"
import Skelitonforadmin from './Skelitonforadmin'

export default function Inventory() {
    const [dataArr, setDataArr] = useState([])
    const [update, setUpdate] = useState('')
    const [obj, setobj] = useState({})

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [img1, setImg1] = useState('')

    const [loading, setLoading] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = async () => {
        setLoading(true)
        try {
            await fetch("https://witty-loafers-elk.cyclic.app/data")
                .then(res => res.json())
                .then(res => setDataArr(res))
            setLoading(false)
        } catch (res) {
            console.log("Error")
            setLoading(false)
        }
    }

    const setupdateAndopenmodel = (id, ele) => {
        setobj(ele)
        setUpdate(id)
        onOpen()
    }

    const updateAndCloseFN = (id) => {
        setLoading(true)
        let payload = {
            name: name || obj.name,
            type: type || obj.type,
            gender: gender || obj.gender,
            color: color || obj.color,
            price: price || obj.price,
            rating: rating || obj.rating,
            img1: img1 || obj.img1
        }
        try {
            fetch(`https://witty-loafers-elk.cyclic.app/data/update/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then(res => {
                    setLoading(false)
                    getProductData()
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Data has been Updated',
                        description: 'You can see the result at the same time',
                        status: 'success',
                        duration: 5000,
                        isClosable: true
                    })
                })
        } catch (err) {
            toast({
                position: 'top',
                variant: 'top-accent',
                title: 'Not Updated',
                description: `Something went wrong`,
                status: 'error',
                duration: 5000,
                isClosable: true
            })
            console.log(err)
            setLoading(false)
        }
        onClose()
    }

    const DeleteFN = (id) => {
        setLoading(true)
        try {
            fetch(`https://witty-loafers-elk.cyclic.app/data/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
            .then(res => {
                if(res.msg==="Product has been Deleted"){
                    setLoading(false)
                    getProductData()
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Data has been Deleted',
                        description: 'You can see the result at the same time',
                        status: 'success',
                        duration: 5000,
                        isClosable: true
                    })
                }else{
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Not Deleted',
                        description: `Something went wrong`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true
                    })
                    setLoading(false)
                }

            })
        } catch (err) {
            toast({
                position: 'top',
                variant: 'top-accent',
                title: 'Not Deleted',
                description: `Something went wrong`,
                status: 'error',
                duration: 5000,
                isClosable: true
            })
            setLoading(false)
        }
    }
    return (
        <div >
            <div style={{backgroundColor:'#F3F3F3'}} className='IVtablerow' >
                <td>Image</td>
                <td>Name</td>
                <td>Type</td>
                <td>Gender</td>
                <td>Color</td>
                <td>Price</td>
                <td>Rating</td>
                <td>Edit</td>
                <td>Delete</td>
            </div>
            {loading ? <Skelitonforadmin/> : dataArr.map((ele) =>
                <div  className='IVtablerow' key={ele._id} >
                    <td><img src={ele.img1} alt="" /></td>
                    <td>{ele.name.substring(0, 10)}..</td>
                    <td>{ele.type}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.color}</td>
                    <td>${ele.price}</td>
                    <td>{ele.rating}</td>
                    <td>
                        <AiOutlineEdit style={{ fontSize: "20px", cursor: 'pointer' }} onClick={() => setupdateAndopenmodel(ele._id, ele)} />
                        <Modal isOpen={isOpen} onClose={onClose} >
                            {/* <ModalOverlay  /> */}
                            <ModalContent  >
                                <ModalHeader>New Data</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody className='modalbody' >
                                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder={'Name : ' + obj.name} />
                                    <input type="text" onChange={(e) => setType(e.target.value)} placeholder={'Type :' + obj.type} />
                                    <input type="text" onChange={(e) => setGender(e.target.value)} placeholder={'Gender :' + obj.gender} />
                                    <input type="text" onChange={(e) => setColor(e.target.value)} placeholder={'Color :' + obj.color} />
                                    <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder={'Price :' + obj.price} />
                                    <input type="text" onChange={(e) => setRating(e.target.value)} placeholder={'Rating :' + obj.rating} />
                                    <input type="text" onChange={(e) => setImg1(e.target.value)} placeholder={'Image :' + obj.img1} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={() => updateAndCloseFN(update)}>
                                        Save
                                    </Button>
                                    <Button variant='ghost' onClick={onClose} >Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </td>
                    <td><RiDeleteBinLine onClick={() => DeleteFN(ele._id)} style={{ fontSize: "20px", cursor: 'pointer' }} /></td>
                </div>
            )
            }
        </div>
    )
}
