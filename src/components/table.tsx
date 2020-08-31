import React from 'react';
import { Table, Button } from "react-bootstrap";

export const UserTable = (prop: UserProp) => (
    <div>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>中文名</th>
                <th>英文名</th>
                <th>邮箱</th>
                <th>微信</th>
                <th>职务</th>
                <th>教育经历</th>
                <th>被授权</th>
                <th>修改</th>
            </tr>
            </thead>
            <tbody>
            {
                prop.users.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.chineseName}</td>
                        <td>{user.engName}</td>
                        <td>{user.email}</td>
                        <td>{user.wechat}</td>
                        <td>{user.role}</td>
                        <td>{user.education}</td>
                        <td>{user.isAuthorized}</td>
                        <td>
                            <Button>修改</Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    </div>
)

interface UserProp {
    role: string,
    users: User[]
}


interface User {
    id: number,
    chineseName: string,
    engName: string,
    email: string,
    wechat: string,
    role: string,
    education: string,
    isAuthorized: boolean
}
