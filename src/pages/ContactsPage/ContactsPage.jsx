import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
