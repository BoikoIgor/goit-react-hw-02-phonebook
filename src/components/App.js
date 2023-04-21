import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  render() {
    return (
      <Layout>
        <div>
          <h1>Phonebook</h1>
          {/* <ContactForm ... /> */}

          <h2>Contacts</h2>
          {/* <Filter ... />
        <ContactList ... /> */}
        </div>
        <GlobalStyle />
      </Layout>
    );
  }
}