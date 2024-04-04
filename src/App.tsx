import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Route, Routes, useRoutes, useNavigate, useLocation } from 'react-router-dom';
import LogIn from './Component/Auth/Login/login';
import SignIn from './Component/Auth/SignUp/SignUp';
import ForgotPass from './Component/Auth/Fogotpassword/forgotPass';
import AppLayout from './Component/AppLayout/SideNav/Sidenav';
import { Exam } from './Component/Exam/Exam';
import { Menu } from 'antd';
import { BookOutlined, FormOutlined, HomeOutlined, LoginOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './App.scss';
import { Home } from './Component/Home/Home';

function App() {
  const [currentPath, setCurrentPath] = useState('/'); // State để lưu trữ đường dẫn hiện tại
  const location = useLocation(); // Hook của react-router-dom để lấy đường dẫn hiện tại
  const navigate = useNavigate();
  const [show, setShow] = useState(true)

  useEffect(() => {
    setCurrentPath(location.pathname); // Cập nhật đường dẫn hiện tại khi location thay đổi
    if (location.pathname === '/login' || location.pathname === '/forgot-password' || location.pathname === '/create-account') {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [location]);

  const handleNavigate = (key: string) => {
    switch (key) {
      case "/login":
        navigate(key);
        break;
      case "/forgot-password":
        navigate(key);
        break

      default:
        navigate(key);
        break;
    }
  };
  const routes = useRoutes([
    {
      path: "/login",
      element: <LogIn />
    }, {
      path: '/create-account',
      element: <SignIn />
    }, {
      path: '/forgot-password',
      element: <ForgotPass />
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/exam',
      element: <ForgotPass />
    }, {}
  ])

  const menuItems = [
    { key: '/', label: 'Home', icon: <HomeOutlined style={{ fontSize: 15 }} /> },
    { key: '/exam', label: 'Exam', icon: <FormOutlined /> },
    {
      key: '/support',
      label: 'Support',
      icon: <QuestionCircleOutlined style={{ fontSize: 15 }} />,
      children: [
        { key: '/support/chatGPT', label: 'chatGPT' },
        { key: '/support/anotherOption', label: 'Another Option' }
      ]
    },
    { key: '/lesson-learn', label: "Lesson Learn", icon: <BookOutlined /> },
    { key: '/login', label: 'Log Out', icon: <LoginOutlined /> }
  ];

  return (
    <>
      {routes}
      {
        show && (
          <div
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
            className='sidebar'
          >
            <Menu theme="dark" mode='vertical' selectedKeys={[currentPath]} style={{ width: '230px', height: '1500px' }}>
              {menuItems.map(item => (
                item.children ?
                  <Menu.SubMenu key={item.key} title={<span>{item.icon}   {item.label}</span>} onTitleClick={() => handleNavigate(item.key)} className='active' >
                    {item.children.map(child => (
                      <Menu.Item key={child.key} onClick={() => handleNavigate(child.key)} className='active'>{child.label}</Menu.Item>
                    ))}
                  </Menu.SubMenu> :
                  <Menu.Item key={item.key} onClick={() => handleNavigate(item.key)}
                    className='active'>{item.icon}  {item.label}</Menu.Item>
              ))}
            </Menu>
          </div>
        )
      }

    </>
  )
}

export default App;
