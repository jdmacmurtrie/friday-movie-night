import FinalMovie from '../../../src/wantMovies/components/FinalMovie';

describe('FinalMovie', () => {
  let wrapper
  let movie = {
        id: 1,
        title: "Star Wars",
        description: "Pretty great movie",
        poster: "imastarwarsposter"
      }

  beforeEach(() => {
    wrapper = mount(
      <FinalMovie
        movie={movie}
      />
    );
  });

  it('should render with the correct props', () => {
    expect(wrapper.props()).toEqual(
      {
        movie: {
          id: 1,
          title: "Star Wars",
          description: "Pretty great movie",
          poster: "imastarwarsposter"
        }
      }
    );
  });

  it('should render an li tag', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('should render an image tag with the correct title text and image', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').props().src).toEqual('https://image.tmdb.org/t/p/w300_and_h450_bestv2imastarwarsposter');
    expect(wrapper.find('img').props().title).toEqual('Star Wars: Pretty great movie');
  });
});
