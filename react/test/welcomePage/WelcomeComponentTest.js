import WelcomeComponent from '../../src/welcomePage/WelcomeComponent';

describe('WelcomeComponent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <WelcomeComponent />
    );
  });

  it('should render 2 links', () => {
    expect(wrapper.find('a').length).toEqual(2);
  });

  it('should render 2 images', () => {
    expect(wrapper.find('img').length).toEqual(2);
  });

  it('should render an film reel image with the correct props', () => {
    expect(wrapper.find('img').at(0).props()).toEqual({
          src: 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-film-reel-filled-100.png',
          alt: "film reel",
          height: '150',
          width: '150'
    })
  });

  it('should render an pizza image with the correct props', () => {
    expect(wrapper.find('img').at(1).props()).toEqual({
          src: 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/pizza-slice-combo-clipart.png',
          alt: "pizza",
          height: '150',
          width: '150'
    })
  });
});
