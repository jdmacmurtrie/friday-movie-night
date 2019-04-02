import FinalTopping from '../../../src/wantToppings/components/FinalTopping';

describe('FinalTopping', () => {
  let wrapper
  let topping = {
        id: 1,
        name: "Mushroom",
        image: "classypicofmushroom"
      }

  beforeEach(() => {
    wrapper = mount(
      <FinalTopping
        topping={topping}
      />
    );
  });

  it('should render with the correct props', () => {
    expect(wrapper.props()).toEqual(
      {
        topping: {
          id: 1,
          name: "Mushroom",
          image: "classypicofmushroom"
        }
      }
    );
  });

  it('should render an li tag', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('should render an image tag with the correct props', () => {
    expect(wrapper.find('img').props()).toEqual({
          src: 'classypicofmushroom',
          height: '200',
          width: '200'
    })
  });

  it('should render a div with the topping name', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toEqual("Mushroom");
  });
});
