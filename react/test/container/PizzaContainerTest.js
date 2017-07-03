import PizzaContainer from '../../src/containers/PizzaContainer';
import Topping from '../../src/components/Topping';
import PizzaForm from '../../src/components/PizzaForm';

describe('PizzaContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PizzaContainer />);
  });

  it('should should have the specified inital state', () => {
      expect(wrapper.state()).toEqual({ toppings: [], queryString: '' });
    });

    it('should render a Topping Component when a topping is selected', () => {
    wrapper.setState({ toppings: ["Mushroom"] });
    expect(wrapper.find(Topping)).toBePresent();
  });

    it('should render a PizzaForm Component', () => {
    expect(wrapper.find(PizzaForm)).toBePresent();
  });

  it('should render the Topping Component an array of toppings when toppings are selected', () => {
      wrapper.setState({ toppings: ["Mushroom"] });
      expect(wrapper.find(Topping).props()).toEqual({
        toppings: ["Mushroom"]
      });
    });

  it('should render the PizzaForm Component an onChange function', () => {
      expect(wrapper.find(PizzaForm).props()).toEqual({
        handleChange: jasmine.any(Function)
      });
    });
  });
