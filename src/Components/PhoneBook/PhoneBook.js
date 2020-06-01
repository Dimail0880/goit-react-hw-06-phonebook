import React, { Component } from "react";
// import Form from "../Form/Form";
import FormFormik from "../Form/FormFormik";

import ContactsList from "../ContactsList/ContactsList";
import ContactsFilterForm from "../ContactsFilter/ContactsFilterForm";
import "react-toastify/dist/ReactToastify.css";
import storage from "../../helpers/storage";
import { CSSTransition } from "react-transition-group";
import slideTransition from "../../animations/slide.module.css";

class PhoneBook extends Component {
  state = {};

  componentDidMount() {
    this.setState({ didMount: true });
  }

  componentDidUpdate(prevProps, prevState) {
    storage.save("contacts", this.props.contacts);
  }

  render() {
    const { didMount } = this.state;
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <CSSTransition
          in={didMount}
          classNames={slideTransition}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
        >
          <h2 className="title-phonebook">Phonebook</h2>
        </CSSTransition>
        {/* <Form contacts={contacts} addItem={this.props.addItem} /> */}
        <FormFormik contacts={contacts} addItem={this.props.addItem} />
        <h2>Contacts</h2>

        <CSSTransition
          in={contacts.length >= 2}
          classNames={slideTransition}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
          unmountOnExit
        >
          <ContactsFilterForm handleFilter={this.props.filterContacts} />
        </CSSTransition>

        <ContactsList
          contactList={filteredContacts}
          deleteContact={this.props.deleteItem}
        />
      </>
    );
  }
}

export default PhoneBook;
