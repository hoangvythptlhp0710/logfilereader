import './App.scss';
import { useState, useEffect } from 'react';
import ExcelLogo from './assets/excelLogo.png'
import User from './components/User';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentCompanyId, setCurrentCompanyId] = useState('all')
  const [currentElements, setCurrentElements] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [elementNumPerPage, setElementNumPerPage] = useState(20);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [searchingStatus, setSearchingStatus] = useState('') 
  const [downloadExcelLink, setDownloadExcelLink] = useState('')


  useEffect(() => {
    const currentDate = new Date();
    // Format the date as needed (e.g., YYYY-MM-DD)
    const formattedDate = currentDate.toISOString().split('T')[0];
    setToDate(formattedDate);
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts


  useEffect(() => {

  })


  const data = {
    "companies": [
      {
        "companyId": 3,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT"
      },
      {
        "companyId": 4,
        "companyName": "Coway Vina"
      }
    ],
    "loginRecords": [
      {
        "dateTime": "25-5-2023",
        "username": "DOÃN THỊ THÚY HÒA",
        "phoneNumber": "0914261181",
        "companyId": 3,
        "userId": 1876,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 4
      },
      {
        "dateTime": "25-5-2023",
        "username": "Nguyễn Hữu Thanh",
        "phoneNumber": "0365502241",
        "companyId": 3,
        "userId": 2453,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 12
      },
      {
        "dateTime": "25-5-2023",
        "username": "Unknown",
        "phoneNumber": "Unknown",
        "companyId": -1,
        "userId": 3030,
        "companyName": "Unknown",
        "loginCount": 6
      },
      {
        "dateTime": "25-5-2023",
        "username": "Vũ Đình Sâm",
        "phoneNumber": "0982941149",
        "companyId": 3,
        "userId": 3095,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 9
      },
      {
        "dateTime": "26-5-2023",
        "username": "ĐOÀN HUYỀN TRANG",
        "phoneNumber": "0936138679",
        "companyId": 3,
        "userId": 1841,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 4
      },
      {
        "dateTime": "26-5-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 6
      },
      {
        "dateTime": "26-5-2023",
        "username": "Nguyễn Hữu Thanh",
        "phoneNumber": "0365502241",
        "companyId": 3,
        "userId": 2453,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 4
      },
      {
        "dateTime": "26-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "27-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "28-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "29-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "30-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "31-5-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "1-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "2-6-2023",
        "username": "NGUYỄN THỊ MINH HƯƠNG",
        "phoneNumber": "0902207692",
        "companyId": 3,
        "userId": 1885,
        "companyName": "Công Ty Cổ Phần Thanh Toán Điện Tử VNPT",
        "loginCount": 1
      },
      {
        "dateTime": "3-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      },
      {
        "dateTime": "4-6-2023",
        "username": "TRAN THI THANH THAO",
        "phoneNumber": "0932016691",
        "companyId": 4,
        "userId": 2131,
        "companyName": "Coway Vina",
        "loginCount": 1
      }
    ]
  }

  

  useEffect(() => {

    const newPageIndex = 0;
    setCurrentPageIndex(newPageIndex);

    const totalPage = Math.ceil(users.length / parseInt(elementNumPerPage));
    setTotalPageCount(totalPage);

    const pageData = users.slice(newPageIndex * elementNumPerPage, (newPageIndex + 1) * elementNumPerPage);
    setCurrentElements(pageData);

    

  }, [elementNumPerPage])


  useEffect(() => {
    fetchData()
    console.log('from date', fromDate);
    console.log('to date', toDate);
    console.log('current company id', currentCompanyId);


    const fromDateParam = fromDate ? `from=${fromDate}` : "";
    const toDateParam = toDate ? `&to=${toDate}` : "";
    const companyIdParam = currentCompanyId != 'all' ? `&companyId=${currentCompanyId}` : "";

    const linkDownLoadExcel = `${process.env.REACT_APP_BACKEND_URL}/exportToExcel?${fromDateParam}${toDateParam}${companyIdParam}`
    setDownloadExcelLink(linkDownLoadExcel);
  }, [toDate, fromDate, currentCompanyId])



  const fetchData = async () => {
    const fromDateParam = fromDate ? `from=${fromDate}` : "";
    const toDateParam = toDate ? `&to=${toDate}` : "";
    const companyIdParam = currentCompanyId != 'all' ? `&companyId=${currentCompanyId}` : "";

    setSearchingStatus("Searching...");
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/countLogin?${fromDateParam}${toDateParam}${companyIdParam}`);
    setSearchingStatus("");


    const loginRecords = response.data.data.loginRecords;
    const companyInfor = response.data.data.companies;

    setUsers(loginRecords);

    // only set companies if there are companies (in the first time)
    if (companies.length == 0) {
      setCompanies(companyInfor);
    }
    // calculate total page
    const totalPage = Math.ceil(loginRecords.length / parseInt(elementNumPerPage));
    setTotalPageCount(totalPage);

    // set current page for the first time
    const pageData = loginRecords.slice(currentPageIndex * elementNumPerPage, (currentPageIndex + 1) * elementNumPerPage);
    setCurrentElements(pageData);

  }



  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      const pageData = users.slice((currentPageIndex - 1) * elementNumPerPage, currentPageIndex * elementNumPerPage);
      setCurrentElements(pageData);
    }
  }

  const handleNext = () => {
    if (currentPageIndex < totalPageCount - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      const pageData = users.slice((currentPageIndex + 1) * elementNumPerPage, (currentPageIndex + 2) * elementNumPerPage);
      setCurrentElements(pageData);
    }
  }

  const handleSetElementNumPerPage = (e) => {

    console.log('wowowadadad');
    setElementNumPerPage(e.target.value);

  }



  return (
    <div className="App">
      <div className="main">
        <div className="app-title">
          User Login Count
        </div>
        <div className="content">

          <div className="btn-container">
            <label htmlFor="">
              <span className="bold">From:</span>
              <input type="date" className="date from" value={fromDate} onChange={e => setFromDate(e.target.value)} />

            </label>

            <label htmlFor="">
              <span className="bold">To:</span>
              <input type="date" className="date to" value={toDate} onChange={e => setToDate(e.target.value)} />
            </label>


            <label htmlFor="">
              <span className="bold">Company:</span>
              <select value={currentCompanyId} onChange={e => setCurrentCompanyId(e.target.value)}>
                <option value="all">All</option>
                {companies.map((company, index) => {
                  return (
                    <option key={index} value={company.companyId}>{company.companyName}</option>
                  )
                })}
              </select>
            </label>

            {/* <div className="search-btn">Search</div> */}
          </div>
          <div className="lower-btn-container">
            <div className="excel-btn">
              <img src={ExcelLogo} alt="" />
              <a href={downloadExcelLink}>Export to Excel</a>
            </div>
            <div className="searching-status">
              {searchingStatus && <p>{searchingStatus}</p>}
            </div>
            <div className="paging-btn-container">
              <div className="element-per-page-setting">
                <select name="" id="" value={elementNumPerPage} onChange={e => handleSetElementNumPerPage(e)}>
                  <option value="20">20 per page</option>
                  <option value="50">50 per page</option>
                  <option value="100">100 per page</option>
                </select>
              </div>
              <div className="page-count">{currentPageIndex + 1}/{totalPageCount}</div>
              <div className="prev-btn" onClick={handlePrev}>Prev</div>
              <div className="next-btn" onClick={handleNext}>Next</div>
            </div>
          </div>

          <div className="user-container">
            <div className="table-heading">
              <div className="no">No</div>
              <div className="date">Date</div>
              <div className="name">Username</div>
              <div className="phone">Phone Number</div>
              <div className="comany-name">Company Name</div>
              <div className="login-count">Login Count</div>
            </div>
            {currentElements.map((user, index) => {
              return (
                <User key={index} {...user} index={index} />
              )
            })}


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
