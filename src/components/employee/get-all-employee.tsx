import { Button, Space } from "antd";
import Table from "antd/es/table";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../../shared/components/header";
import Navbar from "../../shared/components/navbar";
import "../../assets/get-all.css"
import employeeContainer from "../../store/action/employee_action";
import { Employee, InputField } from "../../shared/interface/employee.interface";

const GetAllEmployee = () => {

  const { t } = useTranslation()
  const { deleteEmployee } = employeeContainer()

  const [data, setdata] = useState([])
  const [success, setSuccess] = useState(false)
  const userdata  = useSelector((state: Employee) => state.employeeData.employees)
  const navigate = useNavigate()

  const handleUpdate = (id: number) => {
    navigate(`/admin/update/${id}`)
  }

  const handleDelete = (id: number) => {
    deleteEmployee(id)
    if(window.confirm("Are you sure that you want to delete the Employee?")) {
      setSuccess(true)
    }
  }
  
  useEffect(() => {
    if(success) {
      alert("Employee deleted successfully!")
    }
  }, [success, userdata])

  useEffect(() => {
    const dataSource = userdata.map((e: InputField) => {
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
          <Button onClick={() => handleUpdate(userdata.Employee_ID)} className="action" id="update">{t("update_btn")}</Button>
          <Button onClick={() => handleDelete(userdata.Employee_ID)} className="action" id="delete">{t("delete_btn")}</Button>
        </Space>
      )
  },
  ]

  return(
    <div key={userdata.id} className="home_table">
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