import Card from "../components/Card.jsx"

import book from "../assets/book.svg"
import people from "../assets/people.svg"
import scissors from "../assets/scissors.svg"
import wallet from "../assets/wallet.svg"

export default function Services() {
  return (
    <>
    <section aria-labelledby="welcome-section" className="welcome text-center">
        <h1>Services</h1>
    </section>

    <section aria-labelledby="info-section" className="hero bg-white text-black">
      <h1 className="text-center">Explore the many services we offer</h1>
      <div className="grid-2">

        <Card styleNames= "bg-black text-white">
            <h2>Bookings</h2>
            <img src={book} alt="Booking Icon" className="img-responsive med"/>
            <p>Book your preferred services at your convenience.</p>
        </Card>
        <Card styleNames= "bg-black text-white">
            <h2>Consultations</h2>
            <img src={people} alt="Consultation Icon" className="img-responsive med"/>
            <p>Get expert advice and guidance from our professionals.</p>
        </Card>
        <Card styleNames = "bg-black text-white">
            <h2>Workshops</h2>
            <img src={scissors} alt="Workshop Icon" className="img-responsive med"/>
            <p>Participate in our educational workshops to enhance your skills.</p>
        </Card>
        <Card styleNames = "bg-black text-white">
            <h2>Payments</h2>
            <img src={wallet} alt="Payment Icon" className="img-responsive med"/>
            <p>Make secure and convenient payments for all our services.</p>
        </Card>
      </div>
    </section>
    </>
  );
}
