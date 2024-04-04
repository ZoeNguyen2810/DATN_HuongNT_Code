import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SignUp } from '../../../Type/Auth'
import { Form, Button, Input } from 'antd'
import './SignUp.scss'

const SignIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, control, watch } = useForm<SignUp>()
    const onSubmit = (data: SignUp) => {
        console.log(data)
    }

    const watchPassword = watch('password')


    return (
        <>
            <Form layout='vertical' onFinish={handleSubmit(onSubmit)} className='SignUp'>
                <Form.Item
                    label='Username'
                    validateStatus={errors.userName ? "error" : ''}
                    required
                    help={errors.email ? errors.email.message : ''}
                >
                    <Controller
                        control={control}
                        name='userName'
                        defaultValue=''
                        rules={{
                            required: 'Không được bỏ trống tên đăng nhập',
                            maxLength: {
                                value: 50,
                                message: 'Độ dài tên không quá 50 kí tự'
                            }
                        }}
                        render={({ field }) => <Input {...field} />} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    validateStatus={errors.password ? "error" : ''}
                    required
                    help={errors.password ? errors.password.message : ''}
                >
                    <Controller
                        control={control}
                        name='password'
                        defaultValue=''
                        rules={{
                            required: 'Không được bỏ trống mật khẩu',
                            maxLength: {
                                value: 8,
                                message: 'Mật khẩu không dài quá 8 kí tự'
                            }
                        }}
                        render={({ field }) => <Input {...field} />} />
                </Form.Item>
                <Form.Item
                    label='ConFirm Password'
                    validateStatus={errors.confirmPassword ? 'error' : ''}
                    required
                    help={errors.confirmPassword ? errors.confirmPassword.message : ''}
                >
                    <Controller
                        control={control}
                        name='confirmPassword'
                        defaultValue=''
                        rules={{
                            required: '',
                            maxLength: {
                                value: 8,
                                message: 'Mật khẩu không dài quá 8 kí tự'
                            },
                            validate: value => value === watchPassword || "Mật khẩu không khớp"
                        }}
                        render={({ field }) => <Input {...field} />} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    validateStatus={errors.email ? "error" : ''}
                    required
                    help={errors.email ? errors.email.message : ''}
                >
                    <Controller
                        control={control}
                        name='email'
                        defaultValue=''
                        rules={{
                            required: 'Không được bỏ trống mật khẩu',
                            maxLength: {
                                value: 8,
                                message: 'Mật khẩu không dài quá 8 kí tự'
                            }
                        }}
                        render={({ field }) => <Input {...field} />} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ marginLeft: '150px' }}>Đăng Kí</Button>
                </Form.Item>
            </Form>
        </>

    )
}

export default SignIn
