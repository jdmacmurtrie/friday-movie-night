import ChosenToppings from '../../src/wantMovies/components/ChosenToppings';

describe('ChosenToppings', () => {
  let topping,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ChosenToppings
      toppings={["Mushroom"]}
      />
    );
  });

  it('should render an li tag', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('should render an ul tag', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should render an li tag with the chosen toppin', () => {
    expect(wrapper.find('li').text()).toBe('Mushroom');
  })
});
