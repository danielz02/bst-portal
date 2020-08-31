import React from 'react';
import userList from "./static/users.json"
import { UserTable } from "./components/table";

export const Users = () => (
    <UserTable role={"总管理员"} users={userList.user}/>
)
