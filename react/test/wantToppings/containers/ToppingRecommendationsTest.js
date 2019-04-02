import ToppingRecommendations from '../../../src/wantToppings/containers/ToppingRecommendations';
import FinalTopping from '../../../src/wantToppings/components/FinalTopping';

import fetchMock from 'fetch-mock'

describe('ToppingRecommendations', () => {
  let wrapper;

  let toppings = {
    toppings: [
      {
        id: "1",
        name: "Bacon"
      },
      {
        id: "2",
        name: "Olives"
      }
    ]
  }

  beforeEach(() => {
    fetchMock.get('/api/v1/movies?params=title,Up', {
      status: 200,
      body: toppings
    }).spy();
    wrapper = mount(
      <ToppingRecommendations
        params={{params: "title,Up"}}
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should render an h1 tag', () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  it('should render a Different Genre button', () => {
    expect(wrapper.find('button').at(0).text()).toEqual("Select Different Genre");
  });

  it('should render a Back to Beginning button', () => {
    expect(wrapper.find('button').at(1).text()).toEqual("Back to the Beginning!");
  });

  it('should render a FinalTopping component for each movie in state', done => {
    setTimeout(() => {
      expect(wrapper.find(FinalTopping).length).toEqual(2);
      done();
    }, 0)
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      toppings: [],
      searchType: '',
      title: ''
    });
  })

  it('should store the recommended toppings in state if a genre is selected', done => {
    setTimeout(() => {
      expect(wrapper.state().toppings).toEqual(
        [
          {
            id: "1",
            name: "Bacon"
          },
          {
            id: "2",
            name: "Olives"
          }
        ]
      );
      expect(wrapper.state().title).toEqual('Up')
      done();
    }, 0)
  });
})
