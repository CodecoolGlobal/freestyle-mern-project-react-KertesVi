import "./AdoptedCats.css";

export default function AdoptedCats() {
  return (
    <div className="body">
      <div className="title">Successful Adoption Story of the Month</div>
      <div className="container">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"
            alt="Plotting Cat"
          />
          <div className="card__head">Domino the elegant cat</div>
        </div>
        <div className="card">
          <img
            src="https://www.comfortzone.com/-/media/Project/OneWeb/ComfortZone/Images/Blog/adopting-an-older-cat.jpg"
            alt="Hug Cat"
          />
          <div className="card__head">Honey in the owners hands</div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"
            alt="Curious Cat"
          />
          <div className="card__head">Wonder Whiskey the curious Cat</div>
        </div>
        <div className="card">
          <img
            src="https://d.newsweek.com/en/full/2221075/bonded-cats-melt-hearts-online.png?w=1600&h=1200&q=88&f=b0de66ddd8207f53d35bcebee1d87a45"
            alt="Brothers"
          />
          <div className="card__head">Brothers Together: Leo & Oliver</div>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"
            alt="Sleepy Cat"
          />
          <div className="card__head">Luna the sleepy cat</div>
        </div>
      </div>
    </div>
  );
}
