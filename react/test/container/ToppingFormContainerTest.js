import ToppingFormContainer from '../../src/wantMovies/containers/ToppingFormContainer';
import ChosenTopping from '../../src/wantMovies/components/ChosenTopping';
import PizzaForm from '../../src/wantMovies/components/PizzaForm';

describe('ToppingFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ToppingFormContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({ toppings: [], queryString: '' });
  });

  it('should render a PizzaForm Component', () => {
    expect(wrapper.find(PizzaForm)).toBePresent();
  });

  it('should render the PizzaForm Component an onChange function', () => {
    expect(wrapper.find(PizzaForm).props()).toEqual({
      handleChange: jasmine.any(Function)
    });
  });
});
