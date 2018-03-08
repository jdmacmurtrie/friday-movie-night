import ChosenTopping from '../../src/wantMovies/components/ChosenTopping';

describe('ChosenTopping', () => {
  let topping,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ChosenTopping
        topping={"Mushroom"}
      />
    );
  });

  it('should render an li tag', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('should render an li tag with the chosen toppin', () => {
    expect(wrapper.find('li').text()).toBe('Mushroom');
  })
});
