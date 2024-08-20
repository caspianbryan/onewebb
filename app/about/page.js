const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api");
  if (!res.ok) {
    throw new Error("Failed to fetch data from endpoint");
  }
  return res.json();
};

const About = async () => {
  const services = await fetchData();

  return (
    <div className="text-center mt-20">
      <h1>About Us</h1>
      <p>
        We build high-quality static websites using the latest technologies.
      </p>
      <ul>
        {services.map((service) => (
          <li key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
