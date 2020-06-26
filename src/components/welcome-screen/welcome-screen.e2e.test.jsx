import React from 'react';
import WelcomeScreen from './welcome-screen.jsx';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WelcomeScreen Component`, () => {
  it(`Should welcome button be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();
    const preventDefault = jest.fn();

    const welcomeScreen = mount(
        <WelcomeScreen
          errorsCount={3}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`, {
      preventDefault
    });

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
