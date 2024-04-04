import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { Login } from '../../../Type/Auth';
import './login.scss'

const LogIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm<Login>();

    const onSubmit = async (data: Login) => {
        console.log(data);
    }


    return (
        <Form layout='vertical' onFinish={handleSubmit(onSubmit)} className='login'>
            <Form.Item
                label="Email"
                validateStatus={errors.email ? 'error' : ''}
                required
                help={errors.email ? errors.email.message : ''}>
                <Controller
                    control={control}
                    name='email'
                    defaultValue=''
                    rules={{
                        required: " Hãy nhập email",
                        maxLength: {
                            value: 255,
                            message: "Độ dài tối đa 255 kí tự"
                        }
                    }}
                    render={({ field }) => <Input {...field} />}

                />

            </Form.Item>
            <Form.Item
                label="Password"
                validateStatus={errors.password ? 'error' : ''}
                required
                help={errors.password ? errors.password.message : ''}>
                <Controller
                    control={control}
                    name='password'
                    defaultValue=''
                    rules={{
                        required: " Hãy nhập mật khẩu",
                        maxLength: {
                            value: 8,
                            message: "Độ dài tối đa 8 kí tự"
                        }
                    }}
                    render={({ field }) => <Input {...field} />}
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='primary' style={{ marginLeft: '150px' }} >Login</Button>
            </Form.Item>
            <div> Bạn chưa có tài khoản ?
                <Link to='/create-account'>  Đăng Kí </Link>
            </div>
            <Link to="/forgot-password">Quên mật khẩu ?</Link>

        </Form >
    );
};

export default LogIn;
