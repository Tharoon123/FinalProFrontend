// import logo from "./logo.svg";
import AdminContainer from "../Admin/AdminContainer";
import CustomerContainer from "../CustomerContainer/CustomerContainer";
import HeaderS from "../Header/HeaderS";

function AdminCustomerContainer(props) {
    return (
        <> {props?.isAdmin ? (
            <AdminContainer {...props} />
        ) : (
            <CustomerContainer {...props} />
            
        )}
        </>
    );
}

export default AdminCustomerContainer;
