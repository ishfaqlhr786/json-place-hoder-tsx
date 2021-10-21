import userEvent from '@testing-library/user-event';
import { title } from 'process';
import React, {Fragment } from 'react';
import { createEmitAndSemanticDiagnosticsBuilderProgram, isTemplateSpan } from 'typescript';
import Users, { TUserList } from './Users';

interface UserListProps {
  //  items: TUserList // don't have to redeclare the object again
   items:{}
};

const UserList1: React.FC<UserListProps> = (props) => {
    return (
        <Fragment>
         {
            props.items
         }
        </Fragment>
    );
};

export default UserList1;