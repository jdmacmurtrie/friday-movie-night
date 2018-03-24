import ToppingFormContainer from '../../../src/wantMovies/containers/ToppingFormContainer';
import ToppingForm from '../../../src/wantMovies/components/ToppingForm';

xdescribe('ToppingFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ToppingFormContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({ toppings: [], queryString: '' });
  });

  it('should render a ToppingForm Component', () => {
    expect(wrapper.find(ToppingForm)).toBePresent();
  });

  it('should render the ToppingForm Component an onChange function', () => {
    expect(wrapper.find(ToppingForm).props()).toEqual({
      handleChange: jasmine.any(Function)
    });
  });
});
