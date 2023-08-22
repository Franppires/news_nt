
export default function Contact() {
  return (

    <div className="text-black bg-gray-100">
      <div className="col-span-2 bg-red-800 h-16 flex items-center justify-center">
        <h1 className="text-3xl font-bold uppercase text-white">Contact</h1>
      </div>
     
      <div className=" flex p-4 gap-4">
        <div>
          <h3 className="text-4xl mb-2">Let Talk</h3>
          <p className="text-xl mb-8">You have any news? So get in touch, we love to spread the word!</p>
          <p className="text-2xl">Our opening hours are</p>
          <p className="text-xl mb-8"> 08:00 to 18:00 from Monday to Saturday</p>
          <p className="text-2xl">E-mail</p>
          <p className="text-xl mb-8">contatoechonews@gmail.com</p>
          <p className="text-2xl">Phone</p>
          <p className="text-xl">(99) 9999-9999</p>
        </div>
        <div className="w-1/2"> {/* Set width to 50% */}
          <form className="bg-gray-200 p-4 rounded ">
            <legend className="text-3xl">Contact</legend>
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full rounded " />
            </div>
            <div className="mb-4">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="w-full rounded " />
            </div>
            <div className="mb-4">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" className="w-full rounded " />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="w-full rounded " />
            </div>
            <div className="mb-4">
              <label htmlFor="message">Message</label>
              <input type="text" id="message" className="w-full" />
            </div>
            <button className="w-full rounded text-xl bg-gray-200 hover:bg-gray-300  mt-2">Send</button>
          </form>
        </div>  
      </div>

    </div>

  );
}
