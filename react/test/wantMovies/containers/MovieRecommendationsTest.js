import MovieRecommendations from '../../../src/wantMovies/containers/MovieRecommendations';
import FinalMovie from '../../../src/wantMovies/components/FinalMovie';

import fetchMock from 'fetch-mock'

describe('MovieRecommendations', () => {
  let wrapper;

  let movies = {
    movies: [
        {
          id: "1",
          title: "Star Wars",
          description: "A pretty great movie"
        },
        {
          id: "2",
          title: "Star Trek",
          description: "A good movie, not as good tho"
        }
      ],
    genre: {
      id: "1",
      name: "Science Fiction"
    }
  }

  beforeEach(() => {
    fetchMock.get('/api/v1/toppings?params=Sausage,', {
      status: 200,
      body: movies
    }).spy();
    wrapper = mount(
      <MovieRecommendations
        params={{params: "Sausage,"}}
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should render an h1 tag', () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  it('should render a Different Toppings button', () => {
    expect(wrapper.find('button').at(0).text()).toEqual("Select Different Toppings");
  });

  it('should render a Back to Beginning button', () => {
    expect(wrapper.find('button').at(1).text()).toEqual("Back to the Beginning!");
  });

  it('should render a FinalMovie component for each movie in state', done => {
    setTimeout(() => {
      expect(wrapper.find(FinalMovie).length).toEqual(2);
      done();
    }, 0)
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      movies: [],
      genre: ''
    });
  })

  it('should store the selected genre and recommended movies in state', done => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        movies: [
          {
            id: "1",
            title: "Star Wars",
            description: "A pretty great movie"
          },
          {
            id: "2",
            title: "Star Trek",
            description: "A good movie, not as good tho"
          }
        ],
        genre: "Science Fiction"
      });
      done();
    }, 0)
  });
})
