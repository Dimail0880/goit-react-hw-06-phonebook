import PhoneBook from "./PhoneBook";
import { connect } from "react-redux";
import {
  addItem,
  deleteItem,
  filterContacts,
} from "../../redux/Actions/PhoneBookActions";

const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = {
  addItem,
  deleteItem,
  filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
