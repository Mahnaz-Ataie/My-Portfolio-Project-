import "./GoogleMap.css";
export default function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26350.901939229294!2d62.20349439999999!3d34.3539712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1701109901120!5m2!1sen!2s"
      width="300"
      height="200"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      style={{ border: "3px solid black" }}
    ></iframe>
  );
}
