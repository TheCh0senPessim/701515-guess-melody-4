import React from 'react';
// import PropTypes from 'prop-types';

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>

          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button" />
              <div className="track__status">
                <audio
                  src={this.props.question.song.src}
                />
              </div>
            </div>
          </div>

          <form className="game__artist" />
        </section>
      </section>
    );
  }
}

export default ArtistQuestionScreen;
