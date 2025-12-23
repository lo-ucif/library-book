import "./Question-module.css";
import Aquetioncadre from "./aquetioncadre";
import Atitle from "./atitle";

export default function Question() {
  return (
    <div className="question">
      <Atitle
        text03="Find answers to what matters most about using our library services."
        text02="Questions"
      />
      <Aquetioncadre
        titleq="How long can I borrow books?"
        textq="Most books can be borrowed for three weeks. Renewals are available if no one else has placed a hold. Digital materials have their own lending periods depending on the format."
      />
      <Aquetioncadre
        titleq="What does membership cost?"
        textq="A library card is free for all residents in our service area. You'll need proof of address and a valid ID to apply. Online registration is available if you prefer to start from home."
      />
      <Aquetioncadre
        titleq="Are your digital resources free?"
        textq="Yes, all digital materials including ebooks, audiobooks, and databases are included with your membership at no extra cost. Access them anytime from your device."
      />
      <Aquetioncadre
        titleq="What are your opening hours?"
        textq="We're open Monday through Friday from nine in the morning until eight at night. Weekends we open at ten in the morning and close at six in the evening. Holidays may affect our schedule."
      />
      <Aquetioncadre
        titleq="Can I place a hold on books?"
        textq="Absolutely. You can place holds on books through our catalog online or ask staff at the desk. We'll notify you when your item is ready for pickup."
      />
      <Atitle
        text02="Need more help?"
        text03="Reach out to our team directly for assistance."
      />
      <button className="qbutcon">Contact</button>
    </div>
  );
}
