
import './AdoptedCats.css'; // Import the CSS file with the styling

export default function AdoptedCats() {
  return (
    <div className="container">
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" alt="Plotting Cat" />
        <div className="card__head">Plotting Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg" alt="Angry Cat" />
        <div className="card__head">Angry Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" alt="Curious Cat" />
        <div className="card__head">Curious Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg" alt="Prowling Cat" />
        <div className="card__head">Prowling Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg" alt="Sleepy Cat" />
        <div className="card__head">Sleepy Cat</div>
      </div>
    </div>
  );
}