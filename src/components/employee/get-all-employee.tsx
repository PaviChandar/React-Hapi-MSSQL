import { Button, Space } from "antd";
import Table from "antd/es/table";
import { FormEvent, useEffect, useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../../shared/components/header";
import Navbar from "../../shared/components/navbar";
import "../../assets/getall.module.css"

interface Props extends MouseEvent<FormEvent> {
  handleEmployee: Function,
  handleDelete: Function
}

const GetAllEmployee = (props : any) => {

  const { t } = useTranslation()

  const [data, setdata] = useState([])
  const [success, setSuccess] = useState(false)
  const userdata  = useSelector((state: any) => state.employeeData.employees)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUpdate = (id: number) => {
    navigate(`/admin/update/${id}`)
  }
  
  useEffect(() => {
    if(success) {
      alert("Employee deleted successfully!")
    }
  }, [success, userdata])

  useEffect(() => {
    const dataSource = userdata.map((e: any) => {
      return({
          "Employee_ID": e.id,
          "Name": e.name,
          "City": e.city,
          "Age": e.age,
          "Salary": e.salary
      })
    })
    setdata(dataSource)
  },[userdata])

  const column = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name'
    },
    {
      title: 'City',
      dataIndex: 'City',
      key: 'City'
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age'
    },
    {
      title: 'Salary',
      dataIndex: 'Salary',
      key: 'Salary'
    },
    {
      title: 'Action',
      key: 'Action',
      render: (userdata: { Employee_ID: number }) => (
          <Space size="middle">
              <Button onClick={() => handleUpdate(userdata.Employee_ID)} className="action">Update</Button>
              <Button onClick={() => props.handleDelete(dispatch, userdata.Employee_ID, setSuccess)} className="action" >Delete</Button>
          </Space>
      )
  },
  ]

  return(
      <div>
          <Navbar />
          <Header />
          {
            userdata.length? userdata.length===0 ? <h5>No Employees Found</h5>: <Table columns={ column } dataSource= { data } /> : <h3>Loading</h3>
          }
          <Button onClick={() => navigate('/admin/create')} className="create" >{t("add")}</Button>
      </div>
  )
}

export default GetAllEmployee