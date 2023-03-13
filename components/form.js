import AddUserForm from './addUserForm';
import UpdateUserForm from './updateUserForm';

export default function Form(){
    let flag = false;
    return(
        // <AddUserForm></AddUserForm>
        <div className="container mx-auto py-5">
        {flag ? <AddUserForm /> : <UpdateUserForm /> }
        </div>
    )
}